<?php

use App\Entities\Course;
use App\Traits\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use LaravelDoctrine\ORM\Testing\Factory;

class GetCourseDetailsTest extends TestCase
{
    use DatabaseMigrations, DatabaseTransactions;

    /**
     * Standard scenario of receiving courses from database
     *
     * @return void
     */
    public function testGetCourseDetailsFromDatabase()
    {
        //$this->beginDatabaseTransaction();
        $this->runDatabaseMigrations();

        $requestData = [
            'course_id' => 2
        ];

        $this->get('/courses/get_course_details' . '?course_id=' . $requestData['course_id'], [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(200);

        $this->assertEquals(
            // To test
            json_encode(['course' => app('db')->table('courses')
                ->select(['id', 'name', 'description', 'author_id'])
                ->where('id', '=', $requestData['course_id'])
                ->first()]),
            // Testable
            $this->response->getContent()
        );
    }

    public function testFailToGetCourseDetailsWithoutCourseId()
    {
        //$this->beginDatabaseTransaction();
        $this->runDatabaseMigrations();

        $this->get('/courses/get_course_details', [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(422);

        $this->assertEquals(
        // To test
            json_encode(['error' => ['course_id' => ["You should provide course_id in your request"]]]),
            // Testable
            $this->response->getContent()
        );
    }
}
