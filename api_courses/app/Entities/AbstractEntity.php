<?php

namespace App\Entities;

use Mockery\Exception;

abstract class AbstractEntity
{
    protected $publishableFields = [];
    protected $dbFields = [];

    public function toJSON(){
        return collect($this->publishableFields)->flatMap(function($f){
            $method = "get" . ucfirst($f);

            if(!method_exists($this, $method))
                throw new Exception("Method $method does not exist in the class " . get_class($this));

            return [$this->fromCamelCase($f) => $this->$method()];
        })->toArray();
    }

    public function toDB(){
        return collect($this->dbFields)->flatMap(function($f){
            if(!property_exists($this, $f))
                throw new Exception("Property $f does not exist in the class " . get_class($this));

            return [$this->fromCamelCase($f) => $this->$f];
        })->toArray();
    }

    protected function fromCamelCase($input){
        return ltrim(strtolower(preg_replace('/[A-Z]([A-Z](?![a-z]))*/', '_$0', $input)), '_');
    }
}
