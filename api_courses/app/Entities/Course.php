<?php

namespace App\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Entities\Repositories\CourseRepository")
 * @ORM\Table(name="courses")
 */
class Course
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @ORM\Column(type="string")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $description;

    /**
     * @ORM\Column(type="integer")
     */
    private $author_id;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entities\Category", inversedBy="courses")
     * @ORM\JoinTable(name="categories_courses",
     *      joinColumns={@ORM\JoinColumn(name="course_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="category_id", referencedColumnName="id")}
     *      )
     */
    private $categories;


}
