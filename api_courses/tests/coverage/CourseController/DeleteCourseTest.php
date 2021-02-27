<?php

use App\Entities\CourseEntity;
use App\Models\CourseModel;
use App\Traits\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use LaravelDoctrine\ORM\Testing\Factory;

class DeleteCourseTest extends TestCase
{
    use DatabaseMigrations, DatabaseTransactions;

    /**
     * Standard scenario of receiving courses from database
     *
     * @return void
     */
    public function testDeleteCourseWithData()
    {
        //$this->beginDatabaseTransaction();
        $this->runDatabaseMigrations();

        $request_data = [
            'id' => 2
        ];

        $deleted_course = CourseModel::find($request_data['id']);

        $this->delete('/courses/delete_course', $request_data, [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(200);

        // In database there is no deleted course
        $this->notSeeInDatabase('courses', $deleted_course->toAPI());
    }

    public function testFailToDeleteCourseWithoutData(){
        $this->runDatabaseMigrations();

        $this->post('/courses/clone_course', [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(422);
    }
}
