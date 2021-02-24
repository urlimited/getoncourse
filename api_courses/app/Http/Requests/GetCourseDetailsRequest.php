<?php


namespace App\Http\Requests;


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
            'course_id' => ['required', 'integer', 'exists:App\Entities\Course,id'],
        ];
    }

    public function messages()
    {
        return [
            'course_id.required' => 'You should provide course_id in your request',
            'course_id.integer' => 'Your course id should be integer',
        ];
    }
}
