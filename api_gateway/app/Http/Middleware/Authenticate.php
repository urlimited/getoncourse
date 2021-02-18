<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Factory as Auth;
use Illuminate\Http\Request;
use LaravelDoctrine\ORM\Auth\DoctrineUserProvider;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\JWTGuard;

class Authenticate
{
    /**
     * The authentication guard factory instance.
     *
     * @var Auth
     */
    protected $auth;

    /**
     * Create a new middleware instance.
     *
     * @param Auth $auth
     * @return void
     */
    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param Closure $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if(! $request->cookie('auth'))
            return response('Unauthorized.', 401);

        if(! auth()->setToken($request->cookie('auth'))->user())
            return response('Unauthorized.', 401);

        /*if ($this->auth->guard($guard)->guest()) {
            return response('Unauthorized.', 401);
        }*/

        return $next($request);
    }
}
