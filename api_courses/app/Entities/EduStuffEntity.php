<?php

namespace App\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Entities\Repositories\EduStuffRepository")
 * @ORM\Table(name="edu_stuffs")
 */
class EduStuffEntity extends AbstractEntity
{
    protected array $dbFields = ['id', 'content', 'parentId', 'type', 'lessonId', 'deletedAt'];

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    public $id;

    /**
     * @ORM\Column(type="text")
     */
    public $content;

    /**
     * @ORM\Column(type="integer", name="parent_id")
     */
    public $parentId;

    /**
     * @ORM\Column(type="integer")
     */
    public $type;

    /**
     * @ORM\Column(type="integer", name="lesson_id")
     */
    public $lessonId;

    /**
     * @ORM\Column(type="integer", options={"default" : null}, nullable=true, name="deleted_at")
     */
    public $deletedAt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entities\LessonEntity")
     */
    public $lesson;

    /**
     * @ORM\OneToMany(targetEntity="App\Entities\EduStuffEntity", mappedBy="parent")
     */
    public $children;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entities\EduStuffEntity", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id")
     */
    public $parent;
}
