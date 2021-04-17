<?php

namespace Database\Seeders;

use App\Entities\LessonEntity;
use Illuminate\Database\Seeder;

class LessonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $lessons = entity(LessonEntity::class, 50)->make();

        $connection = getenv('APP_ENV') === 'local' ? 'mysql' : 'testing';

        app('db')->connection('mysql')->table('lessons')->insert(
            $lessons->map(function ($lesson) {
                return $lesson->toDB();
            })->toArray());
    }
}
