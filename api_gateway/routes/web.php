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
    return view('welcome');
});

/*$router->get('/login', function () use ($router) {
    return view('auth.login');
});

$router->get('/register', function () use ($router) {
    return view('auth.register');
});

$router->get('/api/{path}', function ($path) {
    return $path;
});*/

$router->get('/{path: .*}', function () {
    return view('frontend');
});
