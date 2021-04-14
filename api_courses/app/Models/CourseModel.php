<?php

namespace App\Models;

use Anik\Form\ValidationException;
use App\Entities\CourseEntity;
use Doctrine\ORM\EntityManagerInterface;
use Illuminate\Support\MessageBag;

class CourseModel extends AbstractModel
{
    protected CourseEntity $entity;
    protected EntityManagerInterface $entityManager;
    protected array $publishableFields = ['id', 'name', 'description', 'authorId'];

    public static function allDeleted(){
        $courses = self::all();

        return collect($courses)->filter(function($c){
            return $c->entity->deletedAt !== null;
        })->flatten()->toArray();
    }

    public static function allNotDeleted(){
        $courses = self::all();

        return collect($courses)->filter(function($c){
            return $c->entity->deletedAt === null;
        })->flatten()->toArray();
    }

    /**
     * @return $this
     * @throws ValidationException
     */
    public function clone(): self
    {
        if($this->entity->deletedAt !== null)
            throw new ValidationException(new MessageBag(['course' => 'You tried to clone soft deleted course']));

        $courseCloned = clone $this->entity;
        $courseCloned->id = null;

        $this->entityManager->persist($courseCloned);
        $this->entityManager->flush();

        $this->entity = $courseCloned;

        return $this;
    }

    public static function create(array $data): self
    {
        $entityManager = app(EntityManagerInterface::class);

        $course = new CourseEntity($data);

        $entityManager->persist($course);

        $entityManager->flush();

        return new CourseModel($course);
    }

    /**
     * @return null
     * @throws ValidationException
     */
    public function delete()
    {
        if($this->entity->deletedAt === null)
            throw new ValidationException(new MessageBag(['course' => 'You can not delete soft undeleted course. Delete it softly, first']));

        $this->entityManager->remove($this->entity);
        $this->entityManager->flush();

        return null;
    }

    /**
     * @return $this
     * @throws ValidationException
     */
    public function softDelete(): self
    {
        if($this->entity->deletedAt !== null)
            throw new ValidationException(new MessageBag(['course' => 'Course is already soft deleted, try to recover it first']));

        $this->entity->deletedAt = time();

        $this->entityManager->persist($this->entity);
        $this->entityManager->flush();

        return $this;
    }

    /**
     * @param array $data
     * @return $this
     * @throws ValidationException
     */
    public function update(array $data): self
    {
        if($this->entity->deletedAt !== null)
            throw new ValidationException(new MessageBag(['course' => 'Course is soft deleted']));

        $this->entity->fill($data);

        $this->entityManager->persist($this->entity);
        $this->entityManager->flush();

        return $this;
    }

    public function getId(){
        return $this->entity->id;
    }

    public function getAuthorId(){
        return $this->entity->authorId;
    }

    public function getName(){
        return $this->entity->name;
    }

    public function getDescription(){
        return $this->entity->description;
    }

    public function getLessons(){
        return $this->entity->lessons;
    }
}