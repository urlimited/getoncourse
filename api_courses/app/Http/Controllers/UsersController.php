<?php

namespace App\Http\Controllers;

use App\Entities\User;
use Doctrine\ORM\EntityManagerInterface;
use Illuminate\Support\Facades\Request;

class UsersController extends Controller
{
    public function detailUser(Request $request, EntityManagerInterface $entityManager){
        //$query = $entityManager->createQuery('SELECT u FROM App\Entities\User u');
        //return $query->getResult();

        return var_dump($entityManager
            ->getRepository(User::class)
            ->findAll());
    }
}
