<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'name' => 'admin',
        ]);

        DB::table('roles')->insert([
            'name' => 'user',
        ]);

    }
}
