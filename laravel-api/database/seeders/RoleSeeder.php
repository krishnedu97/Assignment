<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run() {
        foreach (['Author', 'Editor', 'Subscriber', 'Administrator'] as $role) {
            \App\Models\Role::firstOrCreate(['name' => $role]);
        }
    }

}
