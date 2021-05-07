<?php


namespace ApiCourses\Http\Requests\Lessons;


use Anik\Form\FormRequest;

class GetLessonDetailsRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'id' => ['required', 'integer', 'exists:ApiCourses\Entities\LessonEntity,id'],
        ];
    }
}
