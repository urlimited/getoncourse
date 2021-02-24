<?php

namespace Database\Factories;

use App\Entities\Course;
use Faker\Generator;

/**
 * @var $factory;
 */
$factory->define(Course::class, function(Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'description' => $faker->sentences(6, true),
        'authorId' => $faker->numberBetween(1, 10)
    ];
});
