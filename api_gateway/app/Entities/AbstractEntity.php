<?php

namespace ApiGateway\Entities;

use ApiGateway\Traits\CaseSensitiveManageable;
use Mockery\Exception;

abstract class AbstractEntity
{
    use CaseSensitiveManageable;

    protected array $dbFields = [];
    protected array $obligatoryFields = [];

    public function __construct($data)
    {
        $this->fill($data);
    }

    /**
     * @param $data
     * @throws \Exception
     */
    public function fill($data)
    {
        $obligatoryFieldsCheck = $this->obligatoryFields;

        foreach ($data as $f => $value) {
            if (!property_exists($this, $this->snakeToCamelCase($f)))
                throw new Exception("Property $f does not exist in the class of " . get_class($this));

            $propertyName = $this->snakeToCamelCase($f);

            $obligatoryFieldsCheck = array_diff($obligatoryFieldsCheck, [$propertyName]);

            $this->$propertyName = $value;
        }

        if (sizeof($obligatoryFieldsCheck) !== 0)
            throw new \Exception('Data does not provide enough data, please provide ' . json_encode($obligatoryFieldsCheck));
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
