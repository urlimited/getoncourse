<?php

namespace ApiCourses\Entities\Repositories;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;

class LessonRepository extends EntityRepository
{
    /**
     * @param int $id
     * @param array $with
     * @return int|mixed|string
     * @throws NoResultException
     * @throws NonUniqueResultException
     */
    public function getLessonWith(int $id, array $with = []){
        $sql = "SELECT l, b FROM ApiCourses\Entities\LessonEntity l
                LEFT JOIN l.lessonBlocks b
                WHERE l.id = $id";

        $query = $this->getEntityManager()->createQuery($sql);

        /*foreach($with as $w){
            $query->setFetchMode("ApiCourses\Entities\CourseEntity", $w, ClassMetadata::FETCH_EAGER);
        }*/

        return $query->getSingleResult();
    }

    public function deleteAllLessonBlocks(int $id){
        $sql = "DELETE ApiCourses\Entities\LessonBlockEntity b WHERE b.lessonId = $id";

        $query = $this->getEntityManager()->createQuery($sql);

        return $query->execute();
    }
}
