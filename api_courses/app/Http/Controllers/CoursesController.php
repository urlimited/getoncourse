<?php

namespace App\Http\Controllers;

use App\Entities\Course;
use App\Http\Requests\CreateCourseRequest;
use App\Http\Requests\GetCourseDetailsRequest;
use Doctrine\ORM\EntityManagerInterface;
use Illuminate\Support\Facades\Request;

class CoursesController extends Controller
{
    public function getCourses(Request $request, EntityManagerInterface $entityManager){
        $courses = $entityManager->getRepository(Course::class)
            ->findAll();

        return response()->json(['courses' => collect($courses)->map(function($course){
            return $course->toJSON();
        })], 200) ;
    }

    public function getCourseDetails(GetCourseDetailsRequest $request, EntityManagerInterface $entityManager){
        $course = $entityManager->getRepository(Course::class)
            ->find($request->course_id);

        return response()->json(['course' => $course->toJSON()], 200);
    }

    public function createCourse(CreateCourseRequest $request, EntityManagerInterface $entityManager){
        $course = new Course($request->all());
        $entityManager->persist($course);
        $entityManager->flush();

        return response('success', 200);
    }

    public function cloneCourse(Request $request, EntityManagerInterface $entityManager){
        return "clone course";
    }

    public function updateCourse(Request $request, EntityManagerInterface $entityManager){
        return "update course";
    }

    public function softDeleteCourse(Request $request, EntityManagerInterface $entityManager){
        return "soft delete course";
    }

    public function deleteCourse(Request $request, EntityManagerInterface $entityManager){
        return "delete course";
    }
}