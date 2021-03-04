<?php


namespace App\Http\Requests\Courses;


use Anik\Form\FormRequest;

class DeleteCourseRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'id' => ['required', 'integer', 'exists:App\Entities\CourseEntity,id'],
        ];
    }
}
