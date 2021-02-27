<?php

use App\Entities\CourseEntity;
use App\Models\CourseModel;
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
            (new CourseModel(entity(CourseEntity::class)->make()))->toAPI(),
            ['id' => 2]
        );

        $old_course_details = (new CourseModel(new CourseEntity(app('db')->table('courses')->find($request_data['id']))))->toAPI();

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
        $this->seeInDatabase('courses', (new CourseModel((new CourseEntity($request_data))))->toAPI());
    }

    public function testFailToUpdateCourseWithoutId(){
        $this->runDatabaseMigrations();

        $this->post('/courses/clone_course', [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(422);
    }
}
