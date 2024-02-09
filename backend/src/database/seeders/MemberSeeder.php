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

        $membersEmails = [
            'yamada@example.com',
            'tanaka@example.com',
            'suzuki@example.com',
            'sato@example.com',
            'iwagi@example.com',
            'kanno@example.com'
        ];

        foreach ($membersEmails as $email) {
            Member::create([
                'group_id' => rand(1, 5),
                'email' => $email
            ]);
        }
    }
}
