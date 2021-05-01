<?php

namespace App\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Entities\Repositories\LessonBlockRepository")
 * @ORM\Table(name="lesson_blocks")
 */
class LessonBlockEntity extends AbstractEntity
{
    protected array $dbFields = ['id', 'content', 'parentId', 'type', 'lessonId', 'deletedAt'];
    protected array $obligatoryFields = ['id', 'content', 'parentId', 'type', 'lessonId'];

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
     * @ORM\Column(type="integer", name="parent_id", options={"default" : null}, nullable=true)
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
     * @ORM\OneToMany(targetEntity="App\Entities\LessonBlockEntity", mappedBy="parent")
     */
    public $children;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entities\LessonBlockEntity", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id")
     */
    public $parent;
}
