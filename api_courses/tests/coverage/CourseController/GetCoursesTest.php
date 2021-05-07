<?php

use ApiCourses\Entities\CourseEntity;
use ApiCourses\Traits\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;
use LaravelDoctrine\ORM\Testing\Factory;

class GetCoursesTest extends TestCase
{
    use DatabaseMigrations, DatabaseTransactions;

    /**
     * Standard scenario of receiving courses from database
     *
     * @return void
     */
    public function testGetCoursesFromDatabase()
    {
        $this->runDatabaseMigrations();

        $this->get('/courses/get_courses', [
            'Accept' => 'application/json'
        ]);

        $this->assertResponseStatus(200);

        $this->assertEquals(
            // To test
            json_encode(['courses' => app('db')->table('courses')->select(['id', 'name', 'description', 'author_id'])
                ->where('deleted_at', '=', null)->get()]),
            // Testable
            $this->response->getContent()
        );
    }
}
