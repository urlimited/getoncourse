<?php

use App\Entities\Course;
use App\Traits\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use LaravelDoctrine\ORM\Testing\Factory;

class CloneCourseTest extends TestCase
{
    use DatabaseMigrations, DatabaseTransactions;

    /**
     * Standard scenario of receiving courses from database
     *
     * @return void
     */
    public function testCloneCourseWithData()
    {
        //$this->beginDatabaseTransaction();
        $this->runDatabaseMigrations();

        $request_data = [
            'course_id' => 2
        ];

        $this->post('/courses/clone_course', $request_data, [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(200);

        // Response is equal to the last one in database
        $this->assertEquals(
            json_encode(
                ['course' => (new Course(app('db')->table('courses')->orderByDesc('id')->first()))->toJSON()]
            ),
            $this->response->getContent()
        );

        // In database it is also equals
        $this->assertEquals(
            (collect((new Course(app('db')->table('courses')->where('id', '=', 2)->first()))->toJSON())->except('id'))->toArray(),
            (collect((new Course(app('db')->table('courses')->orderByDesc('id')->first()))->toJSON())->except('id'))->toArray(),
        );
    }

    public function testFailToCloneCourseWithoutData(){
        $this->runDatabaseMigrations();

        $this->post('/courses/clone_course', [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(422);
    }
}
