<?php

namespace App\Entities;

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
class User extends AbstractEntity implements JWTSubject, AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable, HasFactory;

    protected $publishable_fields = ['id', 'name', 'email', 'role'];

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="string", length=30)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=50, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="integer", options={"default" : 2}, nullable=false)
     */
    private $role;



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
