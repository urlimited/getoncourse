<?php

namespace App\Entities\Repositories;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;

class CourseRepository extends EntityRepository
{
    /**
     * @param int $id
     * @param array $with
     */
    public function getCourseWith(int $id, array $with = []){
        $sql = "SELECT c FROM App\Entities\CourseEntity c WHERE c.id = $id";

        $query = $this->getEntityManager()->createQuery($sql);

        foreach($with as $w){
            $query->setFetchMode("App\Entities\CourseEntity", $w, ClassMetadata::FETCH_EAGER);
        }

        $query->execute();
    }
}
