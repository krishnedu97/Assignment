<?php

namespace App\Services;

use App\Models\User;
use App\Models\Role;
use App\Repositories\UserRepository;

class UserService
{
    protected UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function createUser(array $data): User
    {
        $user = $this->userRepository->create($data);
        $roleIds = Role::whereIn('name', $data['roles'])->pluck('id')->toArray();
        $user->roles()->sync($roleIds);

        return $user;
    }

    public function getUsersGroupedByRoles(): array
    {
        return $this->userRepository->getGroupedByRoles();
    }
}
