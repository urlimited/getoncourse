<?php


namespace ApiGateway\Http\Requests;


use Anik\Form\FormRequest;

/**
 * @property int id
 */
class UserUpdateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'id' => ['required', 'integer', 'exists:ApiGateway\Entities\UserEntity,id'],
            'email' => ['email', 'string', 'min:5', 'max:50'],
            'phone' => ['string', 'min:8', 'max:13'],
            'name' => ['string', 'min:10', 'max:50'],
            'avatar' => ['integer', 'min:1', 'max:50'],
        ];
    }

    public function messages()
    {
        return [];
    }
}
