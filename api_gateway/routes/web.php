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
/*Временные роуты*/
$router->get('/', function () use ($router) {
    $client = new \GuzzleHttp\Client();
    return $client->request('GET', 'http://webserver/courses/get_courses', [
        'headers' => [
            'Host' => 'courses.oncourse.local'
        ]
    ]);
    //return "awdad";
});

$router->group(['middleware' => 'auth', 'prefix' => 'api'], function () use ($router) {
    $router->group(['prefix' => 'users'], function () use ($router) {
        $router->get('get_user', "UsersController@getUser");
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
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->group(['prefix' => 'auth'], function () use ($router) {
        $router->post('register', 'AuthController@register');
        $router->post('login', 'AuthController@login');
    });
});

/*$router->get('/login', function () use ($router) {
>>>>>>> de9ec735ed3bfab9e421a431552f429709484c5e
    return view('auth.login');
});

$router->get('/register', function () use ($router) {
    return view('auth.register');
});

/*$router->get('/api/{path}', function ($path) {
    return $path;
});*/
/*
$router->get('/{path: .*}', function () {
    return view('frontend');
});*/
