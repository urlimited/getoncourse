<?php


namespace ApiCourses\Http\Requests\Lessons;


use Anik\Form\FormRequest;

class UpdateLessonRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'id' => ['required', 'integer', 'exists:ApiCourses\Entities\LessonEntity,id'],
            'course_id' => ['integer'],
            'description' => ['string', 'max: 350'],
            'name' => ['string', 'max: 25', 'min: 10'],
            'lesson_blocks' => ['string'],
            'image_files.*' => ['required', 'mimes:jpg,jpeg,png,bmp', 'max:20000']
        ];
    }
}
