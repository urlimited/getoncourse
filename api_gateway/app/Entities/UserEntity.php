<?php

namespace ApiGateway\Entities;

use Doctrine\ORM\Mapping as ORM;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Lumen\Auth\Authorizable;
use LaravelDoctrine\ORM\Auth\Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;


/**
 * @ORM\Entity
 * @ORM\Table(name="users")
 */
class UserEntity extends AbstractEntity implements JWTSubject, AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    public $id;


    /**
     * @ORM\Column(type="string", length=30)
     */
    public $name;

    /**
     * @ORM\Column(type="string", length=50, unique=true)
     */
    public $email;

    /**
     * @ORM\Column(type="integer", options={"default" : 2}, nullable=false)
     */
    public $role;

    /**
     * @ORM\Column(type="integer", options={"default" : 1}, nullable=false)
     */
    public $avatar;

    /**
     * @ORM\Column(type="string", length=14, unique=true, nullable=true)
     */
    public $phone;



    public function setName(string $username){
        $this->name = $username;
    }

    public function setPassword(string $password){
        $this->password = $password;
    }

    public function setEmail(string $email){
        $this->email = $email;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getRole()
    {
        return $this->role;
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
            'sub' => $this->id
        ];
    }
}
