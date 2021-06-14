<?php

namespace App\Models;

use App\Enums\EmergencyLevel;
use Exception;

class LoggerMessage
{
    protected string $message;
    protected string $initiator;
    protected string $emergencyLevel;

    /**
     * LoggerMessage constructor.
     * @param string $dataJson
     * @throws Exception
     */
    public function __construct(string $dataJson)
    {
        $processedData = $this->validate($dataJson);

        $this->message = $processedData['message'];
        $this->initiator = $processedData['initiator'];
        $this->emergencyLevel = $processedData['emergency_level'];
    }

    public function getContent(): string
    {
        // 01.02.05 00:00:00 User Accessed something somewhere
        return $this->initiator . ' ' . $this->message;
    }

    public function getEmergencyLevel()
    {
        return $this->emergencyLevel;
    }

    /**
     * @param string $dataJson
     * @return array
     * @throws Exception
     */
    protected function validate(string $dataJson): array
    {
        $dataProcessed = json_decode($dataJson, true);

        if (json_last_error() !== JSON_ERROR_NONE)
            throw new Exception('Message is not JSON-able string');

        foreach (['message', 'initiator', 'emergency_level'] as $param) {
            if (!array_key_exists($param, $dataProcessed))
                throw new Exception($param . ' is not presented in the JSON-able string');
        }

        if (!in_array($dataProcessed['emergency_level'],
            [EmergencyLevel::ACCESS, EmergencyLevel::DEBUG, EmergencyLevel::INFO,
                EmergencyLevel::WARNING, EmergencyLevel::ERROR, EmergencyLevel::CRITICAL]))
            throw new Exception('Emergency level of ' . $dataProcessed['emergency_level'] . ' is not in the list of 0, 1, 2, 3, 4, 5');

        return $dataProcessed;
    }

    function isJson($string)
    {
        json_decode($string);
        return json_last_error() === JSON_ERROR_NONE;
    }
}
