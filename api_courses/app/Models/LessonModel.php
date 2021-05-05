<?php

namespace App\Models;

use Anik\Form\ValidationException;
use App\Entities\LessonBlockEntity;
use App\Entities\LessonEntity;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\MessageBag;
use ReflectionException;


class LessonModel extends AbstractModel
{
    protected LessonEntity $entity;

    protected EntityManagerInterface $entityManager;

    protected array $publishableFields = ['id', 'name', 'description', 'courseId', 'lessonBlocks'];

    protected string $lessonDir;

    public function __construct($entity)
    {
        parent::__construct($entity);

        $this->lessonDir = 'lessons/' . sha1($this->getCourseId() . 'lesson' . env('APP_SALT'))
            . '/'
            . sha1($this->getId() . 'course' . env('APP_SALT'));
    }

    public static function allDeleted()
    {
        $courses = self::all();

        return collect($courses)->filter(function ($c) {
            return $c->entity->deletedAt !== null;
        })->flatten()->toArray();
    }

    public static function allNotDeleted()
    {
        $courses = self::all();

        return collect($courses)->filter(function ($c) {
            return $c->entity->deletedAt === null;
        })->flatten()->toArray();
    }

    /**
     * @return $this
     * @throws ValidationException
     */
    public function clone(): self
    {
        if ($this->entity->deletedAt !== null)
            throw new ValidationException(new MessageBag(['course' => 'You tried to clone soft deleted course']));

        $courseCloned = clone $this->entity;
        $courseCloned->id = null;

        $this->entityManager->persist($courseCloned);
        $this->entityManager->flush();

        $this->entity = $courseCloned;

        return $this;
    }

    /**
     * @param array $data
     * @return static
     * @throws ReflectionException
     */
    public static function create(array $data): self
    {
        $entityManager = app(EntityManagerInterface::class);

        $lesson = new LessonEntity($data);

        // Setting course association, since it will not save without it
        $lesson->course = CourseModel::find($lesson->courseId)->getEntity();

        $lessonBlocks = json_decode($lesson->lessonBlocks);

        $lesson->lessonBlocks = new ArrayCollection();

        foreach ($lessonBlocks as $block) {
            $lesson->lessonBlocks->add(new LessonBlockEntity($block));
        }

        $entityManager->persist($lesson);

        $entityManager->flush();

        return new LessonModel($lesson);
    }

    /**
     * @return null
     * @throws ValidationException
     */
    public function delete()
    {
        if ($this->entity->deletedAt === null)
            throw new ValidationException(new MessageBag(['course' => 'You can not delete soft undeleted lesson. Delete it softly, first']));

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
        if ($this->entity->deletedAt !== null)
            throw new ValidationException(new MessageBag(['course' => 'Course is already soft deleted, try to recover it first']));

        $this->entity->deletedAt = time();

        $this->entityManager->persist($this->entity);
        $this->entityManager->flush();

        return $this;
    }

    /**
     * @param int $id
     * @param array $relations
     * @return $this
     * @throws \Exception
     */
    public static function findWith(int $id, array $relations): self
    {
        if (empty($relations))
            throw new \Exception('Relations array must not be empty');

        $entityManager = app(EntityManagerInterface::class);

        $lesson = new LessonModel($entityManager->getRepository(LessonEntity::class)
            ->getLessonWith($id, $relations));

        $lesson->setWith($relations);

        return $lesson;
    }

    /**
     * @param array $data
     * @return $this
     * @throws ValidationException
     * @throws Exception
     */
    public function update(array $data): self
    {
        if ($this->entity->deletedAt !== null)
            throw new ValidationException(new MessageBag(['course' => 'Course is soft deleted']));

        //TODO: Refactor allocation of images by blocks
        $images = [];

        $entityManager = app(EntityManagerInterface::class);

        if (isset($data['image_files'])) {
            foreach ($data['image_files'] as $image_file) {
                $pathToTheImage = $this->lessonDir . '/' . $image_file->hashName();

                $images[] = [
                    'path' => $pathToTheImage,
                    'name' => $image_file->getClientOriginalName()
                ];

                Storage::disk('s3')
                    ->put($pathToTheImage, $image_file->get(), 'public');
            }
        }

        $data['lessonBlocks'] = collect(json_decode($data['lesson_blocks'], true))
            ->map(function ($block) use ($data, $entityManager, $images) {
                $block['lesson'] = $this->entity;

                // If type of block is image
                if ($block['type'] === 2)
                    $block['content'] = Storage::disk('s3')->url(collect($images)
                        ->first(function ($img) use ($block) {
                            return $img['name'] === $block['meta'];
                        })['path']);

                $entityManager->getRepository(LessonEntity::class)
                    ->deleteAllLessonBlocks($this->getId());

                return new LessonBlockEntity(collect($block)
                    ->filter(function($bd, $k){
                        return $k !== 'meta';
                    })
                    ->toArray());
            })->toArray();

        $this->entity->fill(collect($data)
            ->filter(function ($d, $k) {
                return $k !== 'image_files';
            })
            ->toArray());

        $this->entityManager->persist($this->entity);
        $this->entityManager->flush();

        return $this;
    }

    public function getId()
    {
        return $this->entity->id;
    }

    public function getCourseId()
    {
        return $this->entity->courseId;
    }

    public function getName()
    {
        return $this->entity->name;
    }

    public function getDescription()
    {
        return $this->entity->description;
    }

    public function getCourse()
    {
        return $this->entity->course;
    }

    public function getLessonBlocks()
    {
        return collect($this->entity->lessonBlocks->getSnapshot())
            ->map(function ($block) {
                return (new LessonBlockModel($block))->toAPI();
            })
            ->toArray();
    }

    public function setWith(array $with)
    {
        $this->with = array_merge($this->with, $with);

        return true;
    }
}
