<?php

namespace App\Entities;

use App\Traits\CaseSensitiveManageable;
use Mockery\Exception;

abstract class AbstractEntity
{
    use CaseSensitiveManageable;

    protected array $dbFields = [];

    public function __construct($data)
    {
        $this->fill($data);
    }

    public function fill($data)
    {
        foreach ($data as $f => $value) {
            if (!property_exists($this, $this->snakeToCamelCase($f)))
                throw new Exception("Property $f does not exist in the class " . get_class($this));

            $propertyName = $this->snakeToCamelCase($f);

            $this->$propertyName = $value;
        }
    }

    public function toDB()
    {
        return collect($this->dbFields)->flatMap(function ($f) {
            if (!property_exists($this, $f))
                throw new Exception("Property $f does not exist in the class " . get_class($this));

            return [$this->camelToSnakeCase($f) => $this->$f];
        })->toArray();
    }
}
