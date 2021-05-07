<?php

namespace ApiCourses\Http\Controllers;

use ApiCourses\Http\Requests\Lessons\CloneLessonRequest;
use ApiCourses\Http\Requests\Lessons\CreateLessonRequest;
use ApiCourses\Http\Requests\Lessons\DeleteLessonRequest;
use ApiCourses\Http\Requests\Lessons\GetLessonDetailsRequest;
use ApiCourses\Http\Requests\Lessons\SoftDeleteLessonRequest;
use ApiCourses\Http\Requests\Lessons\UpdateLessonRequest;
use ApiCourses\Models\LessonModel;
use Illuminate\Http\Request;

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
        $lesson = LessonModel::findWith($request->id, ['lessonBlocks']);

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

    public function updateLesson(Request $request){
        $lesson = LessonModel::find($request->id)->update(collect($request->all())
            ->filter(function($val, $key){
                return $key !== '_method';
            })->toArray());

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
