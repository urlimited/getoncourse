<?php


namespace App\Http\Requests\Courses;


use Anik\Form\FormRequest;

class GetCourseDetailsRequest extends FormRequest
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

    public function messages()
    {
        return [
            'id.required' => 'You should provide course_id in your request',
            'id.integer' => 'Your course id should be integer',
        ];
    }
}
