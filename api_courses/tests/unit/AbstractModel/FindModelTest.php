<?php

use ApiCourses\Entities\CourseEntity;
use ApiCourses\Models\CourseModel;
use ApiCourses\Traits\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class FindModelTest extends TestCase
{
    use DatabaseMigrations, DatabaseTransactions;

    private array $useCases = [
        'CourseModel' => [
            'model' => CourseModel::class,
            'entity' => CourseEntity::class
        ]
    ];

    /**
     * Standard scenario of receiving courses from database
     *
     * @return void
     */
    public function testFindCourseByIdFromDatabase()
    {
        $this->runDatabaseMigrations();

        foreach($this->useCases as $ucName => $uc){
            echo $ucName;

            $actualModel = $uc['model']::find(3);

            $expectedModel = new $uc['model'](app('em')->getRepository($uc['entity'])->find(3));

            // Test class are similar
            $this->assertEquals(get_class($actualModel), $uc['model'], 'Class does not equal to the initial one');

            // Test models' params are similar
            $this->assertEquals($actualModel->toAPI(), $expectedModel->toAPI(), 'Models are not identical');
        }

    }
}
