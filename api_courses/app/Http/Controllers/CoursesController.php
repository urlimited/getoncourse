<?php

namespace App\Http\Controllers;

use App\Entities\Course;
use App\Http\Requests\CloneCourseRequest;
use App\Http\Requests\CreateCourseRequest;
use App\Http\Requests\DeleteCourseRequest;
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

    public function cloneCourse(CloneCourseRequest $request, EntityManagerInterface $entityManager){
        $sampleCourse = $entityManager->getRepository(Course::class)
            ->find($request->course_id);

        $newCourse = new Course($sampleCourse->toDB());

        $entityManager->persist($newCourse);
        $entityManager->flush();

        return response()->json(['course' => $newCourse->toJSON()], 200);
    }

    public function updateCourse(Request $request, EntityManagerInterface $entityManager){
        return "update course";
    }

    public function softDeleteCourse(Request $request, EntityManagerInterface $entityManager){
        return "soft delete course";
    }

    public function deleteCourse(DeleteCourseRequest $request, EntityManagerInterface $entityManager){
        $deletedCourse = $entityManager->getRepository(Course::class)
            ->find($request->course_id);

        $toDelete = clone $deletedCourse;

        $entityManager->remove($deletedCourse);
        $entityManager->flush();

        return response()->json(['course' => $toDelete->toJSON()], 200);
    }
}
