<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;

class CoursesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function getCourses(Request $request){
        $client = new \GuzzleHttp\Client();
        return $client->request('GET', 'http://webserver/courses/get_courses', [
            'headers' => [
                'Host' => 'courses.oncourse.local'
            ]
        ]);
    }

    //TODO: add params into request
    public function getCourseDetails(Request $request){
        $client = new \GuzzleHttp\Client();
        return $client->request('GET', 'http://webserver/courses/get_course_details', [
            'headers' => [
                'Host' => 'courses.oncourse.local'
            ]
        ]);
    }

    //TODO: add params into request
    public function createCourse(Request $request){
        $client = new \GuzzleHttp\Client();
        return $client->request('GET', 'http://webserver/courses/create_course', [
            'headers' => [
                'Host' => 'courses.oncourse.local'
            ]
        ]);
    }
}
