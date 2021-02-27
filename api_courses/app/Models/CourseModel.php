<?php

namespace App\Models;

use App\Entities\CourseEntity;
use Doctrine\ORM\EntityManagerInterface;

class CourseModel extends AbstractModel
{
    protected CourseEntity $entity;
    protected EntityManagerInterface $entityManager;
    protected array $publishableFields = ['id', 'name', 'description', 'authorId'];

    public static function allNotDeleted(){
        $courses = self::all();

        return collect($courses)->filter(function($c){
            return $c->entity->deletedAt === null;
        })->toArray();
    }

    public static function create(array $data): self
    {
        $entityManager = app(EntityManagerInterface::class);

        $course = new CourseEntity($data);

        $entityManager->persist($course);

        $entityManager->flush();

        return new CourseModel($course);
    }

    public function update(array $data): self
    {
        $this->entity->fill($data);

        $this->entityManager->persist($this->entity);
        $this->entityManager->flush();

        return $this;
    }

    public function delete()
    {
        $this->entityManager->remove($this->entity);
        $this->entityManager->flush();

        return null;
    }

    public function softDelete(): self
    {
        $this->entity->deletedAt = time();

        $this->entityManager->persist($this->entity);
        $this->entityManager->flush();

        return $this;
    }

    public function clone(): self
    {
        $courseCloned = clone $this->entity;
        $courseCloned->id = null;

        $this->entityManager->persist($courseCloned);
        $this->entityManager->flush();

        $this->entity = $courseCloned;

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
}
