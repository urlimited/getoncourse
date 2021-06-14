<?php

namespace App\Models;

use App\Enums\EmergencyLevel;

class Logger
{
    public LoggerMessage $message;

    /**
     * Logger constructor.
     * @param string $data
     * @throws \Exception
     */
    public function __construct(string $data){
        $this->message = new LoggerMessage($data);
    }

    public function process(){
        switch($this->message->getEmergencyLevel()){
            case EmergencyLevel::DEBUG:
                app('log')->debug($this->message->getContent());
                break;

            case EmergencyLevel::ACCESS:
                app('log')->info($this->message->getContent());
                break;

            case EmergencyLevel::INFO:
                app('log')->notice($this->message->getContent());
                break;

            case EmergencyLevel::WARNING:
                app('log')->warning($this->message->getContent());
                break;

            case EmergencyLevel::ERROR:
                app('log')->error($this->message->getContent());
                break;

            case EmergencyLevel::CRITICAL:
                app('log')->emergency($this->message->getContent());
                break;
        }
    }
}
