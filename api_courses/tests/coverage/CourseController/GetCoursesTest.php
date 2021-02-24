<?php

use App\Entities\Course;
use App\Traits\DatabaseMigrations;
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
        //$this->beginDatabaseTransaction();
        $this->runDatabaseMigrations();

        $this->get('/courses/get_courses');

        $this->assertResponseStatus(200);

        $this->assertEquals(
            // To test
            json_encode(['courses' => app('db')->table('courses')->select(['id', 'name', 'description', 'author_id'])->get()]),
            // Testable
            $this->response->getContent()
        );
    }
}
