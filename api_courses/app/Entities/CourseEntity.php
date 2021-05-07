<?php

namespace ApiCourses\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="ApiCourses\Entities\Repositories\CourseRepository")
 * @ORM\Table(name="courses")
 */
class CourseEntity extends AbstractEntity
{
    protected array $dbFields = ['id', 'name', 'description', 'authorId', 'deletedAt'];

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    public $id;


    /**
     * @ORM\Column(type="string")
     */
    public $name;

    /**
     * @ORM\Column(type="string", length=350)
     */
    public $description;

    /**
     * @ORM\Column(type="integer", name="author_id")
     */
    public $authorId;

    /**
     * @ORM\Column(type="integer", options={"default" : null}, nullable=true, name="deleted_at")
     */
    public $deletedAt;

    /**
     * @ORM\ManyToMany(targetEntity="ApiCourses\Entities\CategoryEntity", inversedBy="courses")
     * @ORM\JoinTable(name="categories_courses",
     *      joinColumns={@ORM\JoinColumn(name="course_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="category_id", referencedColumnName="id")}
     *      )
     */
    public $categories;

    /**
     * @ORM\OneToMany(targetEntity="ApiCourses\Entities\LessonEntity", mappedBy="course")
     */
    public $lessons;
}
