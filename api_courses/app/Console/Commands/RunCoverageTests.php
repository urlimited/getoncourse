<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;



/**
 * Class deletePostsCommand
 *
 * @category Console_Command
 * @package  App\Console\Commands
 */
class RunCoverageTests extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = "tests:run";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Runs all coverage tests for the service";


    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        echo shell_exec('vendor/phpunit/phpunit/phpunit --testdox --color=always --verbose');
    }
}
