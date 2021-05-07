<?php

use ApiCourses\Entities\CourseEntity;
use ApiCourses\Models\CourseModel;
use ApiCourses\Traits\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use LaravelDoctrine\ORM\Testing\Factory;

class CreateCourseTest extends TestCase
{
    use DatabaseMigrations, DatabaseTransactions;

    /**
     * Standard scenario of receiving courses from database
     *
     * @return void
     */
    public function testCreateCourseWithData()
    {
        //$this->beginDatabaseTransaction();
        $this->runDatabaseMigrations();

        $courseModel = new CourseModel(entity(CourseEntity::class)->make());

        $this->post('/courses/create_course', $courseModel->toAPI(), [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(200);

        $this->seeInDatabase('courses', collect($courseModel->toAPI())->except('id')->toArray());
    }

    public function testFailToCreateCourseWithoutData(){
        $this->runDatabaseMigrations();

        $courseDetails = collect((new CourseModel(entity(CourseEntity::class)->make()))->toAPI())->except('id');

        foreach($courseDetails as $c => $value){
            $this->post('/courses/create_course', $courseDetails->except($c)->toArray(), [
                'Accept' => 'application/json'
            ]);

            $this->assertResponseStatus(422);
        }
    }
}
