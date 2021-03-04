<?php


namespace App\Http\Requests\Courses;


use Anik\Form\FormRequest;

class CreateCourseRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'author_id' => ['required', 'integer'],
            'description' => ['required', 'string', 'max: 350'],
            'name' => ['required', 'string', 'max: 25', 'min: 10'],
        ];
    }
}
