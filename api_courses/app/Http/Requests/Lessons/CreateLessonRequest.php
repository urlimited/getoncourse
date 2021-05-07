<?php


namespace ApiCourses\Http\Requests\Lessons;


use Anik\Form\FormRequest;
use ApiCourses\Entities\EduStuffEntity;

class CreateLessonRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'course_id' => ['required', 'integer', 'exists:ApiCourses\Entities\CourseEntity,id'],
            'description' => ['required', 'string', 'max: 350'],
            'name' => ['required', 'string', 'max: 25', 'min: 10'],
            'edu_stuffs' => ['required', 'string',
                function ($attribute, $value, $fail) {
                    $eduStuffs = json_decode($value);

                    if (!$eduStuffs)
                        return $fail('The ' . $attribute . ' must be valid JSON object.');

                    if (!is_array($eduStuffs))
                        return $fail('The ' . $attribute . ' must be an array.');

                    foreach ($eduStuffs as $stuff) {
                        try{
                            new EduStuffEntity($stuff);
                        }catch(\Exception $e){
                            return $fail('The part of edu_stuffs param (' . json_encode($stuff) . ') is invalid. Additional exceptions: ' . $e->getMessage());
                        }
                    }

                    return true;
                },
            ]
        ];
    }
}
