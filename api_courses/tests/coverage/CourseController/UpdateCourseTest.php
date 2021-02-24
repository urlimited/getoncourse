<?php

use App\Entities\Course;
use App\Traits\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use LaravelDoctrine\ORM\Testing\Factory;

class UpdateCourseTest extends TestCase
{
    use DatabaseMigrations, DatabaseTransactions;

    /**
     * Standard scenario of receiving courses from database
     *
     * @return void
     */
    public function testUpdateCourseWithData()
    {
        //$this->beginDatabaseTransaction();
        $this->runDatabaseMigrations();

        $request_data = array_merge(
            entity(Course::class)->make()->toJSON(),
            ['id' => 2]
        );

        $old_course_details = (new Course(app('db')->table('courses')->find($request_data['id'])))->toJSON();

        $this->put('/courses/update_course', $request_data, [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(200);

        // Response is equal to the deleted one
        $this->assertEquals(
            json_encode(
                ['course' => $request_data]
            ),
            $this->response->getContent()
        );

        // In database there is no old course
        $this->notSeeInDatabase('courses', $old_course_details);

        // In database there is new course
        $this->seeInDatabase('courses', (new Course($request_data))->toJSON());
    }

    public function testFailToUpdateCourseWithoutId(){
        $this->runDatabaseMigrations();

        $this->post('/courses/clone_course', [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(422);
    }
}
