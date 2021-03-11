<?php

namespace App\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Entities\Repositories\LessonRepository")
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
     * @ORM\OneToMany(targetEntity="App\Entities\EduStuffEntity", mappedBy="lesson")
     */
    public $eduStuffs;

   /* /**
     * @ORM\ManyToOne(targetEntity="App\Entities\CourseEntity")

    public $course;*/
}
