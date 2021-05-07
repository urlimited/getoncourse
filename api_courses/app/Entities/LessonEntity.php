<?php

namespace ApiCourses\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="ApiCourses\Entities\Repositories\LessonRepository")
 * @ORM\Table(name="lessons")
 */
class LessonEntity extends AbstractEntity
{
    protected array $dbFields = ['id', 'name', 'description', 'courseId', 'deletedAt'];

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    public $id;


    /**
     * @ORM\Column(type="string", length=255)
     */
    public $name;

    /**
     * @ORM\Column(type="string", length=350)
     */
    public $description;

    /**
     * @ORM\Column(type="integer", name="course_id")
     */
    public $courseId;

    /**
     * @ORM\Column(type="integer", options={"default" : null}, nullable=true, name="deleted_at")
     */
    public $deletedAt;

    /**
     * @ORM\OneToMany(targetEntity="ApiCourses\Entities\LessonBlockEntity", mappedBy="lesson", cascade={"persist"})
     */
    public $lessonBlocks;

    /**
     * @ORM\ManyToOne(targetEntity="ApiCourses\Entities\CourseEntity")
     */
    public $course;
}
