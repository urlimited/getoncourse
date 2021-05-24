<?php


namespace ApiGateway\Http\Requests;


use Anik\Form\FormRequest;

class RegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'email' => ['required', 'email', 'string', 'min:5', 'max:50', 'unique:ApiGateway\Entities\UserEntity,email'],
            'password' => ['required', 'string', 'min:8', 'max:30'],
            'name' => ['required', 'string', 'min:4', 'max:30'],
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'You should provide email in your request',
            'name.required' => 'You should provide name in your request',
            'password.required' => 'You should provide password in your request',
        ];
    }
}
