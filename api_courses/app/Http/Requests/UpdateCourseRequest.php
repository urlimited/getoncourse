<?php


namespace App\Http\Requests;


use Anik\Form\FormRequest;

class UpdateCourseRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'id' => ['required', 'integer', 'exists:App\Entities\CourseEntity,id'],
            'author_id' => ['integer'],
            'description' => ['string', 'max: 350'],
            'name' => ['string', 'max: 25', 'min: 10'],
        ];
    }
}
