<?php

namespace App\Http\Controllers;

use App\Http\Requests\Lessons\CloneLessonRequest;
use App\Http\Requests\Lessons\CreateLessonRequest;
use App\Http\Requests\Lessons\DeleteLessonRequest;
use App\Http\Requests\Lessons\GetLessonDetailsRequest;
use App\Http\Requests\Lessons\SoftDeleteLessonRequest;
use App\Http\Requests\Lessons\UpdateLessonRequest;
use App\Models\LessonModel;
use Illuminate\Support\Facades\Request;

class LessonsController extends Controller
{
    public function getLessons(Request $request){
        $courses = LessonModel::allNotDeleted();

        return response()->json(['lessons' => collect($courses)->map(function($course){
            return $course->toAPI();
        })], 200) ;
    }

    public function getLessonsDeleted(Request $request){
        $courses = LessonModel::allDeleted();

        return response()->json(['lessons' => collect($courses)->map(function($course){
            return $course->toAPI();
        })], 200) ;
    }

    public function getLessonDetails(GetLessonDetailsRequest $request){
        $lesson = LessonModel::find($request->id);

        return response()->json(['lesson' => $lesson->toAPI()], 200);
    }

    public function createLesson(CreateLessonRequest $request){
        $lesson = LessonModel::create($request->all());

        return response(['lesson' => $lesson->toAPI()], 200);
    }

    public function cloneLesson(CloneLessonRequest $request){
        $lesson = LessonModel::find($request->id)->clone();

        return response()->json(['lesson' => $lesson->toAPI()], 200);
    }

    public function updateLesson(UpdateLessonRequest $request){
        $lesson = LessonModel::find($request->id)->update($request->all());

        return response()->json(['lesson' => $lesson->toAPI()], 200);
    }

    public function softDeleteLesson(SoftDeleteLessonRequest $request){
        $lesson = LessonModel::find($request->id)->softDelete();

        return response()->json(['lesson' => $lesson->toAPI()], 200);
    }

    public function deleteLesson(DeleteLessonRequest $request){
        LessonModel::find($request->id)->delete();

        return response()->json('', 200);
    }
}
