<?php


namespace App\Http\Requests;


use Anik\Form\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'login' => ['required', 'string', 'min:5', 'max:50'],
            'password' => ['required', 'string'],
        ];
    }

    public function messages()
    {
        return [
            'login.required' => 'You should provide login in your request',
            'password.required' => 'You should provide password in your request',
        ];
    }
}
