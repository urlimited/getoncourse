<?php

use ApiCourses\Entities\CourseEntity;
use ApiCourses\Models\CourseModel;
use ApiCourses\Traits\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use LaravelDoctrine\ORM\Testing\Factory;

class SoftDeleteCourseTest extends TestCase
{
    use DatabaseMigrations, DatabaseTransactions;

    /**
     * Standard scenario of receiving courses from database
     *
     * @return void
     */
    public function testSoftDeleteCourseWithData()
    {
        //$this->beginDatabaseTransaction();
        $this->runDatabaseMigrations();

        $request_data = [
            'id' => 2
        ];

        $this->put('/courses/soft_delete_course', $request_data, [
            'Accept' => 'application/json'
        ]);

        $course = new CourseModel(new CourseEntity(app('db')->table('courses')->find($request_data['id'])));

        $this->assertResponseStatus(200);

        // Response is equal to the deleted one
        $this->assertEquals(
            json_encode(
                ['course' => $course->toAPI()]
            ),
            $this->response->getContent()
        );

        $this->assertNotEquals(app('db')->table('courses')->find($request_data['id'])->deleted_at, null);
    }

    public function testFailToUpdateCourseWithoutId(){
        $this->runDatabaseMigrations();

        $this->post('/courses/clone_course', [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(422);
    }
}
