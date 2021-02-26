<?php

use App\Entities\Course;
use App\Traits\DatabaseMigrations;
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

        $course = entity(Course::class)->make();

        $this->post('/courses/create_course', $course->toDB(), [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(200);

        $this->seeInDatabase('courses', $course->toDB());
    }

    public function testFailToCreateCourseCourseWithoutData(){
        $this->runDatabaseMigrations();

        $course_details = entity(Course::class)->make()->toDB();

        foreach($course_details as $c => $value){
            $this->post('/courses/create_course', collect($course_details)->except($c)->toArray(), [
                'Accept' => 'application/json'
            ]);

            $this->assertResponseStatus(422);
        }
    }
}
