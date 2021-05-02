<?php


namespace App\Http\Requests\Lessons;


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
            'id' => ['required', 'integer', 'exists:App\Entities\LessonEntity,id'],
            'course_id' => ['integer'],
            'description' => ['string', 'max: 350'],
            'name' => ['string', 'max: 25', 'min: 10'],
            'lesson_blocks' => ['string']
        ];
    }
}
