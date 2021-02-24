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

            return [$this->camelToSnakeCase($f) => $this->$method()];
        })->toArray();
    }

    /**
     * @return array
     */
    public function toDB(){
        return collect($this->dbFields)->flatMap(function($f){
            if(!property_exists($this, $f))
                throw new Exception("Property $f does not exist in the class " . get_class($this));

            return [$this->camelToSnakeCase($f) => $this->$f];
        })->toArray();
    }

    public function fill($data){
        foreach($data as $f => $value){
            if(!property_exists($this, $this->snakeToCamelCase($f)))
                throw new Exception("Property $f does not exist in the class " . get_class($this));

            $propertyName = $this->snakeToCamelCase($f);

            $this->$propertyName = $value;
        }
    }

    protected function camelToSnakeCase($input){
        return ltrim(strtolower(preg_replace('/[A-Z]([A-Z](?![a-z]))*/', '_$0', $input)), '_');
    }

    protected function snakeToCamelCase($string, $capitalizeFirstCharacter = false)
    {
        $str = str_replace('_', '', ucwords($string, '_'));

        if (!$capitalizeFirstCharacter)
            $str = lcfirst($str);

        return $str;
    }
}
