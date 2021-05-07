<?php

namespace ApiCourses\Entities;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="ApiCourses\Entities\Repositories\LessonBlockRepository")
 * @ORM\Table(name="lesson_blocks", indexes={@ORM\Index(name="keyid", columns={"key_id"})})
 */
class LessonBlockEntity extends AbstractEntity
{
    protected array $dbFields = ['id', 'content', 'parentId', 'type', 'lessonId', 'deletedAt'];
    protected array $obligatoryFields = ['content', 'type', 'lesson', 'keyId'];

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
     * @ORM\Column(type="string", length=36, unique=true, name="key_id", options={"default" : null}, nullable=true)
     */
    public $keyId;

    /**
     * @ORM\Column(type="integer", name="lesson_id")
     */
    public $lessonId;

    /**
     * @ORM\Column(type="integer", options={"default" : null}, nullable=true, name="deleted_at")
     */
    public $deletedAt;

    /**
     * @ORM\ManyToOne(targetEntity="ApiCourses\Entities\LessonEntity", fetch="EXTRA_LAZY")
     */
    public $lesson;

    /**
     * @ORM\OneToMany(targetEntity="ApiCourses\Entities\LessonBlockEntity", mappedBy="parent")
     */
    public $children;

    /**
     * @ORM\ManyToOne(targetEntity="ApiCourses\Entities\LessonBlockEntity", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id")
     */
    public $parent;
}
