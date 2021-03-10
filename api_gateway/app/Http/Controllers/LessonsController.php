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
}
