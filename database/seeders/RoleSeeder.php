<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(['name' => 'admin']);
        Role::create(['name' => 'user']);
        Role::create(['name' => 'library']);
        Role::create(['name' => 'branch']);
        Role::create(['name' => 'teacher']);
        Role::create(['name' => 'stationery']);
        Role::create(['name' => 'stationery_branch']);
    }
}
