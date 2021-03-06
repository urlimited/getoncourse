<?php

namespace App\Console\Commands;

use Anik\Amqp\ConsumableMessage;
use App\Models\Logger;
use Illuminate\Console\Command;

class AmqpConsumerConnectCommand extends Command {
    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = 'amqp:consumer:connect';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Serve the application on the PHP development server";
    /**
     * Execute the console command.
     *
     * @return void
     */

    public function __construct()
    {
        parent::__construct();
    }


    public function handle()
    {
        app('amqp')->consume(function (ConsumableMessage $message) {
            try {
                (new Logger($message->getStream()))->process();
            } catch (\Exception $e) {
                app('log')->error($e->getMessage());
            }

            $message->getDeliveryInfo()->acknowledge();
        }, 'routing-key', [
            'connection' => 'rabbitmq',
            'exchange'   => [
                'declare' => true,
                'type'    => 'direct',
                'name'    => 'direct.exchange',
            ],
            'queue' => [
                'name'         => 'direct.exchange.queue',
                'exclusive'    => false,
            ],
            'qos' => [
                'enabled'            => true,
                'qos_prefetch_count' => 5,
            ],
        ]);
    }
}
