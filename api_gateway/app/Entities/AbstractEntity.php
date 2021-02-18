<?php

namespace App\Entities;

use Mockery\Exception;

abstract class AbstractEntity
{
    protected $publishable_fields = [];

    public function toJSON(){
        return collect($this->publishable_fields)->flatMap(function($f){
            $method = "get" . ucfirst($f);

            if(!method_exists($this, $method))
                throw new Exception("Method $method does not exist in the class " . get_class($this));

            return [$f => $this->$method()];
        });
    }
}
