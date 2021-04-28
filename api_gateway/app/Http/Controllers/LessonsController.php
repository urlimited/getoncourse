<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class LessonsController extends Controller
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

    public function getLessonDetails(Request $request)
    {
        $client = new Client();
        return $client->request(
            'GET',
            'http://webserver/lessons/get_lesson_details', [
            'headers' => [
                'Host' => 'courses.oncourse.local',
                'Accept' => 'application/json'
            ],
            'query' => $request->all()
        ]);
    }

    public function createLesson(Request $request)
    {
        $client = new Client();
        return $client->request(
            'POST',
            'http://webserver/lessons/create_lesson', [
            'headers' => [
                'Host' => 'courses.oncourse.local',
                'Accept' => 'application/json'
            ],
            'query' => $request->all()
        ]);
    }

    public function updateLesson(Request $request)
    {
        $client = new Client();
        return $client->request(
            'PUT',
            'http://webserver/lessons/update_lesson', [
            'headers' => [
                'Host' => 'courses.oncourse.local',
                'Accept' => 'application/json'
            ],
            'query' => $request->all()
        ]);
    }

    public function deleteLesson(Request $request)
    {
        $client = new Client();
        return $client->request(
            'DELETE',
            'http://webserver/lessons/delete_lesson', [
            'headers' => [
                'Host' => 'courses.oncourse.local',
                'Accept' => 'application/json'
            ],
            'query' => $request->all()
        ]);
    }

    public function softDeleteLesson(Request $request)
    {
        $client = new Client();
        return $client->request(
            'PUT',
            'http://webserver/lessons/soft_delete_lesson', [
            'headers' => [
                'Host' => 'courses.oncourse.local',
                'Accept' => 'application/json'
            ],
            'query' => $request->all()
        ]);
    }
}
