<?php


namespace App\Http\Requests;


use Anik\Form\FormRequest;

class CloneCourseRequest extends FormRequest
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
