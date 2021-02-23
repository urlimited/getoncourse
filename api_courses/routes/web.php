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

/*$router->get('/', function () use ($router) {
    //return $router->app->version();
    //return var_dump(app('db')->select("SELECT * FROM users"));
    //return phpinfo();
});*/

$router->get('/', function(){
    return "Hello it is okay";
});
$router->get('/courses/get_courses', 'CoursesController@getCourses');
$router->get('/courses/get_course_details', 'CoursesController@getCourseDetails');
$router->post('/courses/create_course', 'CoursesController@createCourse');
$router->post('/courses/clone_course', 'CoursesController@cloneCourse');
$router->put('/courses/update_course', 'CoursesController@updateCourse');
$router->put('/courses/soft_delete_course', 'CoursesController@softDeleteCourse');
$router->delete('/courses/delete_course', 'CoursesController@deleteCourse');
