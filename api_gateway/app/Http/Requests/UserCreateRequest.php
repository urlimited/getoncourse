<?php


namespace ApiGateway\Http\Requests;


use Anik\Form\FormRequest;

/**
 * @property int id
 */
class UserCreateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'role' => ['required', 'integer', 'min:1', 'max:3'],
            'email' => ['required', 'email', 'string', 'min:5', 'max:50'],
            'phone' => ['required', 'string', 'min:8', 'max:13'],
            'name' => ['required', 'string', 'min:10', 'max:50'],
            'avatar' => ['required', 'integer', 'min:1', 'max:50']
        ];
    }

    public function messages()
    {
        return [];
    }
}
