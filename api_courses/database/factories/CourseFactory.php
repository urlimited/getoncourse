<?php

namespace Database\Factories;

use ApiCourses\Entities\CourseEntity;
use Faker\Generator;

/**
 * @var $factory;
 */
$factory->define(CourseEntity::class, function(Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'description' => $faker->sentences(6, true),
        'authorId' => $faker->numberBetween(1, 10)
    ];
});
