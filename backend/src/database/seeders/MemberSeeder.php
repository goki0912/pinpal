<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Member;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Member::create([
            'group_id' => 1,
            'email' => 'yamada@example.com'
        ]);
        Member::create([
            'group_id' => 1, // 存在するgroup_idを指定
            'email' => 'tanaka@example.com'
        ]);
        Member::create([
            'group_id' => 2, // 存在するgroup_idを指定
            'email' => 'suzuki@example.com'
        ]);
        Member::create([
            'group_id' => 2, // 存在するgroup_idを指定
            'email' => 'sato@example.com'
        ]);
        Member::create([
            'group_id' => 3,
            'email' => 'iwagi@example.com'
        ]);
        Member::create([
            'group_id' => 3,
            'email' => 'kanno@example.com'
        ]);
        Member::create([
            'group_id' => 3,
            'email' => 'tsukakoshi@example.com'
        ]);
        Member::create([
            'group_id' => 3,
            'email' => 'ueno@example.com'
        ]);
    }
}
