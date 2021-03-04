<?php


namespace App\Http\Requests\Lessons;


use Anik\Form\FormRequest;

class CreateLessonRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'course_id' => ['required', 'integer', 'exists:App\Entities\CourseEntity,id'],
            'description' => ['required', 'string', 'max: 350'],
            'name' => ['required', 'string', 'max: 25', 'min: 10'],
        ];
    }
}
