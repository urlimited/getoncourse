<?php

namespace ApiGateway\Http\Controllers;

use ApiGateway\Entities\UserEntity;
use ApiGateway\Http\Requests\LoginRequest;
use ApiGateway\Http\Requests\RegisterRequest;
use Doctrine\ORM\EntityManagerInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Cookie;

class AuthController extends Controller
{
    /**
     * Store a new user.
     *
     * @param RegisterRequest $request
     * @param EntityManagerInterface $entityManager
     * @return JsonResponse
     * @throws ValidationException
     */
    public function register(RegisterRequest $request, EntityManagerInterface $entityManager)
    {
        //validate incoming request
        $this->validate($request, [
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        try {

            $user = new UserEntity;
            $user->setName($request->input('name'));
            $user->setEmail($request->input('email'));
            $user->setPassword(app('hash')->make($request->input('password')));

            $entityManager->persist($user);
            $entityManager->flush();

            $token = Auth::attempt(['email' => $request->get('email'), 'password' => $request->get('password')]);

            return response()
                ->json(['message' => 'Okay'], 200)
                ->withCookie(new Cookie('auth', $token));

        } catch (\Exception $e) {
            //return error message
            return response()->json(['message' => 'User Registration Failed!'], 409);
        }

    }

    /**
     * Get a JWT via given credentials.
     *
     * @param LoginRequest $request
     * @return JsonResponse
     * @throws ValidationException
     */
    public function login(LoginRequest $request)
    {
        //validate incoming request
        $this->validate($request, [
            'login' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = [
            'email' => $request->input('login'),
            'password' => $request->input('password')
        ];

        if (! $token = Auth::attempt($credentials))
            return response()
                ->json(['message' => 'Unauthorized'], 401);


        return response()
            ->json(['message' => 'Okay'], 200)
            ->withCookie(new Cookie('auth', $token));
    }
}
