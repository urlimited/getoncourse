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

        $some = entity(Course::class)->make();

        $this->get('/courses/get_courses');

        $this->assertEquals(
            ['database' => []], $this->response->getContent()
        );
    }
}
