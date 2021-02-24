<?php

namespace App\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Entities\Repositories\CourseRepository")
 * @ORM\Table(name="courses")
 */
class Course extends AbstractEntity
{
    protected $dbFields = ['name', 'description', 'authorId'];
    protected $publishableFields = ['id', 'name', 'description', 'authorId'];

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    protected $id;


    /**
     * @ORM\Column(type="string")
     */
    protected $name;

    /**
     * @ORM\Column(type="string", length=350)
     */
    protected $description;

    /**
     * @ORM\Column(type="integer", name="author_id")
     */
    protected $authorId;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entities\Category", inversedBy="courses")
     * @ORM\JoinTable(name="categories_courses",
     *      joinColumns={@ORM\JoinColumn(name="course_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="category_id", referencedColumnName="id")}
     *      )
     */
    protected $categories;

    public function __construct($data){
        $this->fill($data);
    }

    /**
     * getters
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * getters
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * getters
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * getters
     */
    public function getAuthorId()
    {
        return $this->authorId;
    }


}
