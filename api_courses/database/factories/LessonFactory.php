<?php

namespace Database\Factories;

use ApiCourses\Entities\LessonEntity;
use Faker\Generator;

/**
 * @var $factory;
 */
$factory->define(LessonEntity::class, function(Generator $faker) {
    return [
        'name' => $faker->name,
        'courseId' => $faker->numberBetween(3, 7),
        'description' => $faker->sentences(3, true),
    ];
});
