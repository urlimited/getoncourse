<?php

namespace ApiCourses\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="ApiCourses\Entities\Repositories\CategoryRepository")
 * @ORM\Table(name="categories")
 */
class CategoryEntity extends AbstractEntity
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
     * @ORM\Column(type="integer")
     */
    private $parent_id;

    /**
     * @ORM\ManyToOne(targetEntity="ApiCourses\Entities\CategoryEntity", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id")
     */
    private $parent;

    /**
     * @ORM\OneToMany(targetEntity="ApiCourses\Entities\CategoryEntity", mappedBy="parent")
     */
    private $children;

    /**
     * @ORM\ManyToMany(targetEntity="ApiCourses\Entities\CourseEntity", mappedBy="categories")
     */
    private $courses;

    private $author;
}
