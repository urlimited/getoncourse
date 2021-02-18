<?php

namespace App\Http\Controllers;

use App\Entities\User;
use Doctrine\ORM\EntityManagerInterface;
use Illuminate\Support\Facades\Request;

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

    public function getUser(Request $request, EntityManagerInterface $entityManager){
        return response()
        ->json(['user' => $entityManager->getRepository(User::class)->find(auth()->id())->toJSON()], 200);
    }
}
