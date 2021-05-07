<?php

namespace ApiCourses\Traits;

trait CaseSensitiveManageable
{
    protected function camelToSnakeCase($input)
    {
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

