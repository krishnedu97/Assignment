<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    public function create(array $data): User
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt('password') // default password
        ]);
    }

    public function getGroupedByRoles(): array
    {
        return User::with('roles')->get()->groupBy(function ($user) {
            return $user->roles->pluck('name')->implode(', ');
        })->toArray();
    }
}
