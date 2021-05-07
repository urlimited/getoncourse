<?php

namespace Database\Seeders;

use ApiCourses\Entities\CourseEntity;
use Illuminate\Database\Seeder;

class CoursesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $courses = entity(CourseEntity::class, 10)->make();

        $connection = getenv('APP_ENV') === 'local' ? 'mysql' : 'testing';

        app('db')->connection('mysql')->table('courses')->insert(
            $courses->map(function ($course) {
                return $course->toDB();
            })->toArray());
    }
}
