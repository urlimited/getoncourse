<?php

namespace ApiCourses\Http\Controllers;

use ApiCourses\Http\Requests\Courses\CloneCourseRequest;
use ApiCourses\Http\Requests\Courses\CreateCourseRequest;
use ApiCourses\Http\Requests\Courses\DeleteCourseRequest;
use ApiCourses\Http\Requests\Courses\GetCourseDetailsRequest;
use ApiCourses\Http\Requests\Courses\SoftDeleteCourseRequest;
use ApiCourses\Http\Requests\Courses\UpdateCourseRequest;
use ApiCourses\Models\CourseModel;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Request;

class CoursesController extends Controller
{
    public function getCourses(Request $request){
        $courses = CourseModel::allNotDeleted();

        return response()->json(['courses' => collect($courses)->map(function($course){
            return $course->toAPI();
        })], 200) ;
    }

    public function getCoursesDeleted(Request $request){
        $courses = CourseModel::allDeleted();

        return response()->json(['courses' => collect($courses)->map(function($course){
            return $course->toAPI();
        })], 200) ;
    }

    /**
     * @param GetCourseDetailsRequest $request
     * @return JsonResponse
     * @throws Exception
     */
    public function getCourseDetails(GetCourseDetailsRequest $request){
        $course = CourseModel::findWith($request->id, ["lessons"]);

        return response()->json(['course' => $course->toAPI()], 200);
    }

    public function createCourse(CreateCourseRequest $request){
        $course = CourseModel::create($request->all());

        return response(['course' => $course->toAPI()], 200);
    }

    public function cloneCourse(CloneCourseRequest $request){
        $course = CourseModel::find($request->id)->clone();

        return response()->json(['course' => $course->toAPI()], 200);
    }

    public function updateCourse(UpdateCourseRequest $request){
        $course = CourseModel::find($request->id)->update($request->all());

        return response()->json(['course' => $course->toAPI()], 200);
    }

    public function softDeleteCourse(SoftDeleteCourseRequest $request){
        $course = CourseModel::find($request->id)->softDelete();

        return response()->json(['course' => $course->toAPI()], 200);
    }

    public function deleteCourse(DeleteCourseRequest $request){
        CourseModel::find($request->id)->delete();

        return response()->json('', 200);
    }
}
