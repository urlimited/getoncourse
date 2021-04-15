<?php

namespace App\Models;

use Anik\Form\ValidationException;
use App\Entities\EduStuffEntity;
use Doctrine\ORM\EntityManagerInterface;
use Illuminate\Support\MessageBag;

class EduStuffModel extends AbstractModel
{
    protected EduStuffEntity $entity;
    protected EntityManagerInterface $entityManager;
    protected array $publishableFields = ['id', 'lesson', 'content', 'type'];

    public static function create(array $data): self
    {
        $entityManager = app(EntityManagerInterface::class);

        $eduStuffEntity = new EduStuffEntity($data);

        $entityManager->persist($eduStuffEntity);

        $entityManager->flush();

        return new EduStuffModel($eduStuffEntity);
    }

    /**
     * @return null
     * @throws ValidationException
     */
    public function delete()
    {
        if($this->entity->deletedAt === null)
            throw new ValidationException(new MessageBag(['edu_stuff' => 'You can not delete soft undeleted edu_stuff. Delete it softly, first']));

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
            throw new ValidationException(new MessageBag(['edu_stuff' => 'Edu stuff is already soft deleted, try to recover it first']));

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
            throw new ValidationException(new MessageBag(['edu_stuff' => 'Edu stuff is soft deleted']));

        $this->entity->fill($data);

        $this->entityManager->persist($this->entity);
        $this->entityManager->flush();

        return $this;
    }


    public function getId(){
        return $this->entity->id;
    }

    public function getContent(){
        return $this->entity->content;
    }

    public function getType(){
        return $this->entity->type;
    }

    public function getLesson(){
        return $this->entity->lesson;
    }

    public function getParent(){
        return $this->entity->parent;
    }

    public function getChildren(){
        return $this->entity->children;
    }
}
