<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

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

    public function getCourses(Request $request)
    {
        $client = new Client();
        return $client->request(
            'GET',
            'http://webserver/courses/get_courses', [
            'headers' => [
                'Host' => 'courses.oncourse.local',
                'Accept' => 'application/json'
            ]
        ]);
    }

    public function getCourseDetails(Request $request)
    {
        $client = new Client();
        return $client->request(
            'GET',
            'http://webserver/courses/get_course_details', [
            'headers' => [
                'Host' => 'courses.oncourse.local',
                'Accept' => 'application/json'
            ],
            'query' => $request->all()
        ]);
    }

    public function createCourse(Request $request)
    {
        $client = new Client();
        return $client->request('POST', 'http://webserver/courses/create_course', [
            'headers' => [
                'Host' => 'courses.oncourse.local',
                'Accept' => 'application/json'
            ],
            'form_params' => $request->all()
        ]);
    }

    public function updateCourse(Request $request)
    {
        $client = new Client();

        return $client->request('PUT', 'http://webserver/courses/update_course', [
            'headers' => [
                'Host' => 'courses.oncourse.local',
                'Accept' => 'application/json'
            ],
            'form_params' => $request->all()
        ]);
    }

    public function cloneCourse(Request $request)
    {
        $client = new Client();
        return $client->request('POST', 'http://webserver/courses/clone_course', [
            'headers' => [
                'Host' => 'courses.oncourse.local',
                'Accept' => 'application/json'
            ],
            'form_params' => $request->all()
        ]);
    }

    public function softDeleteCourse(Request $request)
    {
        $client = new Client();
        return $client->request('PUT', 'http://webserver/courses/soft_delete_course', [
            'headers' => [
                'Host' => 'courses.oncourse.local',
                'Accept' => 'application/json'
            ],
            'form_params' => $request->all()
        ]);
    }

    public function deleteCourse(Request $request)
    {
        $client = new Client();
        return $client->request('DELETE', 'http://webserver/courses/delete_course', [
            'headers' => [
                'Host' => 'courses.oncourse.local',
                'Accept' => 'application/json'
            ],
            'form_params' => $request->all()
        ]);
    }
}
