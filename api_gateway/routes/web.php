<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
$router->group(['middleware' => 'auth', 'prefix' => 'api'], function () use ($router) {
    $router->group(['prefix' => 'users'], function () use ($router) {
        $router->get('get_profile', 'UsersController@getProfile');
        $router->get('get_user', 'UsersController@getUser');
        $router->get('get_users', 'UsersController@getUsers');
        $router->put('update_user', 'UsersController@updateUser');
        $router->post('create_user', 'UsersController@createUser');
    });

    $router->group(['prefix' => 'courses'], function () use ($router) {
        $router->get('get_courses', 'CoursesController@getCourses');
        $router->get('get_courses_deleted', 'CoursesController@getCoursesDeleted');
        $router->get('get_course_details', 'CoursesController@getCourseDetails');
        $router->post('create_course', 'CoursesController@createCourse');
        $router->put('update_course', 'CoursesController@updateCourse');
        $router->post('clone_course', 'CoursesController@cloneCourse');
        $router->put('soft_delete_course', 'CoursesController@softDeleteCourse');
        $router->delete('delete_course', 'CoursesController@deleteCourse');
    });

    $router->group(['prefix' => 'lessons'], function () use ($router) {
        $router->get('get_lesson_details', 'LessonsController@getLessonDetails');
        $router->post('create_lesson', 'LessonsController@createLesson');
        $router->put('update_lesson', 'LessonsController@updateLesson');
        $router->delete('delete_lesson', 'LessonsController@deleteLesson');
        $router->put('soft_delete_lesson', 'LessonsController@softDeleteLesson');
    });
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->group(['prefix' => 'auth'], function () use ($router) {
        $router->post('register', 'AuthController@register');
        $router->post('login', 'AuthController@login');
    });
});

$router->get('/test_ampq', function(){
    app('amqp')->publish(json_encode([
        'initiator' => 'api_gateway',
        'emergency_level' => 1,
        'message' => 'Testing the logger'
    ]), 'routing-key', [
        'exchange' => [
            'type'    => 'direct',
            'name'    => 'direct.exchange',
        ],
    ]);


    return "End of script";
});

$router->get('/{path: .*}', function () {
    return view('frontend');
});
