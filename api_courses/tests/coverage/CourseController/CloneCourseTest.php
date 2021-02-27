<?php

use App\Entities\CourseEntity;
use App\Models\CourseModel;
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
            'id' => 2
        ];

        $this->post('/courses/clone_course', $request_data, [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(200);

        // Response is equal to the last one in database
        $this->assertEquals(
            json_encode(
                ['course' => (new CourseModel(new CourseEntity(app('db')->table('courses')->orderByDesc('id')->first())))->toAPI()]
            ),
            $this->response->getContent()
        );

        // In database it is also equals
        $this->assertEquals(
            (collect(new CourseEntity(app('db')->table('courses')->where('id', '=', $request_data['id'])->first()))->except('id'))->toArray(),
            (collect(new CourseEntity(app('db')->table('courses')->orderByDesc('id')->first()))->except('id'))->toArray(),
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
