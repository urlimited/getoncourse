<?php

namespace App\Http\Controllers;

use App\Entities\Course;
use App\Entities\User;
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

    public function getCourseDetails(Request $request, EntityManagerInterface $entityManager){
        return "get all courses";
    }

    public function createCourse(Request $request, EntityManagerInterface $entityManager){
        return "course created";
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
