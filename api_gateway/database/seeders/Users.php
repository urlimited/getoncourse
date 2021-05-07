<?php

namespace Database\Seeders;

use ApiGateway\Enums\UserRole;
use Illuminate\Database\Seeder;

class Users extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app('db')->table('users')->insert([
            'name' => 'admin',
            'email' => 'admin'.'@test.com',
            'password' => app('hash')->make('localadmin'),
            'role' => UserRole::USER_ROLE_ADMIN
        ]);

        app('db')->table('users')->insert([
            'name' => 'teacher',
            'email' => 'teacher'.'@test.com',
            'password' => app('hash')->make('localteacher'),
            'role' => UserRole::USER_ROLE_TEACHER
        ]);
    }
}
