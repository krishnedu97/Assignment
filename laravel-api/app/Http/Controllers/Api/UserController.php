<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    protected UserService $userService;

    /**
     * Inject UserService via constructor
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * Store a new user with roles
     *
     * @param  \App\Http\Requests\StoreUserRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(StoreUserRequest $request): JsonResponse
    {
        try {
            $user = $this->userService->createUser($request->validated());

            return response()->json([
                'message' => 'User created successfully.',
                'data' => $user->load('roles')
            ], 201);

        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Failed to create user.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get all users grouped by roles
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(): JsonResponse
    {
        try {
            $groupedUsers = $this->userService->getUsersGroupedByRoles();

            return response()->json($groupedUsers, 200);

        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'Failed to fetch users.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
