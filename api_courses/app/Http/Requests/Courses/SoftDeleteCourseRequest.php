<?php


namespace ApiCourses\Http\Requests\Courses;


use Anik\Form\FormRequest;

class SoftDeleteCourseRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'id' => ['required', 'integer', 'exists:ApiCourses\Entities\CourseEntity,id'],
        ];
    }
}
