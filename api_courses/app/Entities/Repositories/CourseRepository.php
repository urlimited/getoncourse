<?php

namespace ApiCourses\Entities\Repositories;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;

class CourseRepository extends EntityRepository
{
    /**
     * @param int $id
     * @param array $with
     * @return int|mixed|string
     * @throws NoResultException
     * @throws NonUniqueResultException
     */
    public function getCourseWith(int $id, array $with = []){
        $sql = "SELECT c, l FROM ApiCourses\Entities\CourseEntity c
                LEFT JOIN c.lessons l
                WHERE c.id = $id";

        $query = $this->getEntityManager()->createQuery($sql);

        /*foreach($with as $w){
            $query->setFetchMode("ApiCourses\Entities\CourseEntity", $w, ClassMetadata::FETCH_EAGER);
        }*/

        return $query->getSingleResult();
    }
}
