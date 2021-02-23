<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class GetCoursesTest extends TestCase
{
    /**
     * Standard scenario of receiving courses from database
     *
     * @return void
     */
    public function testGetCoursesFromDatabase()
    {
        $this->get('/courses/get_courses');

        dd("adawdwa");

        $this->assertEquals(
            $this->app->version(), $this->response->getContent()
        );
    }
}
