<?php

namespace ApiCourses\Providers;

use Laravel\Lumen\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        \ApiCourses\Events\ExampleEvent::class => [
            \ApiCourses\Listeners\ExampleListener::class,
        ],
    ];
}
