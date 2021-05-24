<?php

namespace ApiGateway\Http\Controllers;

use ApiGateway\Entities\UserEntity;
use ApiGateway\Http\Requests\UserCreateRequest;
use ApiGateway\Http\Requests\UserUpdateRequest;
use ApiGateway\Models\UserModel;
use Doctrine\ORM\EntityManagerInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use ReflectionException;

class UsersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @throws ReflectionException
     */
    public function getProfile(Request $request)
    {
        return response()
            ->json(['user' => UserModel::find(auth()->id())->toAPI()], 200);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     * @throws ReflectionException
     */
    public function getUser(Request $request)
    {
        return response()
            ->json(['user' => UserModel::find($request->id)->toAPI()], 200);
    }

    /**
     * @param UserUpdateRequest $request
     * @return JsonResponse
     * @throws ReflectionException
     */
    public function updateUser(UserUpdateRequest $request)
    {
        return response()
            ->json(['user' => UserModel::find($request->id)
                ->update($request->all())->toAPI()]);
    }

    public function createUser(UserCreateRequest $request)
    {
        return response()
            ->json(['user' => UserModel::create($request->all())->toAPI()]);
    }

    public function getUsers(Request $request)
    {
        return response()
            ->json(['users' => collect(UserModel::all())
                ->map(function($user){
                    return $user->toAPI();
                })]);
    }
}
