<?php

namespace ApiGateway\Models;

use ApiGateway\Entities\UserEntity;
use Doctrine\ORM\EntityManagerInterface;
use Exception;

class UserModel extends AbstractModel
{
    protected UserEntity $entity;

    protected array $publishableFields = ['id', 'name', 'email', 'role', 'avatar', 'phone'];

    /**
     * @param array $data
     * @return $this
     * @throws Exception
     */
    public function update(array $data): self
    {
        $data['password'] = app('hash')->make($data['password']);

        $this->entity->fill($data);

        $this->entityManager->persist($this->entity);
        $this->entityManager->flush();

        return $this;
    }

    /**
     * @param array $data
     * @return static
     */
    public static function create(array $data): self
    {
        $entityManager = app(EntityManagerInterface::class);

        $user = new UserEntity($data);

        $user->setPassword(app('hash')->make($data['password']));

        $entityManager->persist($user);

        $entityManager->flush();

        return new UserModel($user);
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

    public function getAvatar()
    {
        return $this->entity->avatar;
    }

    public function getPhone()
    {
        return $this->entity->phone;
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
