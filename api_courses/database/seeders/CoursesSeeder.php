<?php

namespace Database\Seeders;

use App\Entities\Course;
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
        $courses = entity(Course::class, 10)->make();

        $connection = getenv('APP_ENV') === 'local' ? 'mysql' : 'testing';

        app('db')->connection($connection)->table('courses')->insert(
            $courses->map(function ($course) {
                return $course->toDB();
            })->toArray());
    }
}
