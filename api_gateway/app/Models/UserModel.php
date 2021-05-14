<?php

namespace ApiGateway\Models;

use ApiGateway\Entities\UserEntity;
use Exception;

class UserModel extends AbstractModel
{
    protected UserEntity $entity;

    protected array $publishableFields = ['id', 'name', 'email', 'role'];

    /**
     * @param array $data
     * @return $this
     * @throws Exception
     */
    public function update(array $data): self
    {
        $this->entity->fill($data);

        $this->entityManager->persist($this->entity);
        $this->entityManager->flush();

        return $this;
    }

    public function getId()
    {
        return $this->entity->id;
    }

    public function getName()
    {
        return $this->entity->name;
    }

    public function getEmail()
    {
        return $this->entity->email;
    }

    public function getRole()
    {
        return $this->entity->role;
    }

    /**
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getId();
    }

    public function getJWTCustomClaims()
    {
        return [
            'iss' => 'oncourse',
            'exp' => time() + 60 * 60 * 4,
            'sub' => $this->getId()
        ];
    }
}
