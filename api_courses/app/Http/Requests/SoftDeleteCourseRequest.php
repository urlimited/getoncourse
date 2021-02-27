<?php


namespace App\Http\Requests;


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
            'id' => ['required', 'integer', 'exists:App\Entities\CourseEntity,id'],
        ];
    }
}
