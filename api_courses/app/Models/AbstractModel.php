<?php

namespace App\Models;

use App\Traits\CaseSensitiveManageable;
use Doctrine\ORM\EntityManagerInterface;
use Mockery\Exception;
use ReflectionClass;
use ReflectionException;

abstract class AbstractModel
{
    use CaseSensitiveManageable;

    protected array $publishableFields = [];

    protected array $with = [];

    protected EntityManagerInterface $entityManager;

    public function __construct($entity)
    {
        $this->entityManager = app(EntityManagerInterface::class);

        $this->entity = $entity;
    }

    public static function all() {
        $entityManager = app(EntityManagerInterface::class);

        $entities = $entityManager
            ->getRepository((new ReflectionClass(static::class))->getProperty('entity')->getType()->getName())
            ->findAll();

        return collect($entities)->map(function($en){
            return new static($en);
        })->toArray();
    }

    /**
     * @param int $id
     * @return AbstractModel
     * @throws ReflectionException
     */
    public static function find(int $id): AbstractModel
    {
        $entityManager = app(EntityManagerInterface::class);

        $entity = $entityManager
            ->getRepository((new ReflectionClass(static::class))->getProperty('entity')->getType()->getName())
            ->find($id);

        return new static($entity);
    }

    /**
     * @param string $byParam
     * @param $paramValue
     * @return AbstractModel
     * @throws ReflectionException
     */
    public static function findBy(string $byParam, $paramValue): AbstractModel
    {
        $entityManager = app(EntityManagerInterface::class);

        $entity = $entityManager
            ->getRepository((new ReflectionClass(static::class))->getProperty('entity')->getType()->getName())
            ->findOneBy([$byParam => $paramValue]);

        return new static($entity);
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

    public function toAPI()
    {
        return collect(array_merge($this->publishableFields, $this->with))->flatMap(function ($f) {
            $method = "get" . ucfirst($f);

            if (!method_exists($this, $method))
                throw new Exception("Method $method does not exist in the class " . get_class($this));

            return [$this->camelToSnakeCase($f) => $this->$method()];
        })->toArray();
    }

    public function getEntity(){
        return $this->entity;
    }
}
