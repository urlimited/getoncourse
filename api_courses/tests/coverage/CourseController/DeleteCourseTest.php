<?php

use App\Entities\Course;
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
            'course_id' => 2
        ];

        $deleted_course = (new Course(app('db')->table('courses')->where('id', '=', $request_data['course_id'])->first()));

        $this->delete('/courses/delete_course', $request_data, [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(200);

        // Response is equal to the deleted one
        $this->assertEquals(
            json_encode(
                ['course' => $deleted_course->toJSON()]
            ),
            $this->response->getContent()
        );

        // In database there is no deleted course
        $this->notSeeInDatabase('courses', $deleted_course->toJSON());
    }

    public function testFailToDeleteCourseWithoutData(){
        $this->runDatabaseMigrations();

        $this->post('/courses/clone_course', [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(422);
    }
}
