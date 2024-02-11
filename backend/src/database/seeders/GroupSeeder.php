<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Group;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Group::create([
            'name' => '高校の友達',
            'color' => json_encode([
                'r' => 19,
                'g' => 115,
                'b' => 222,
                'a' => 1.0
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Group::create([
            'name' => 'バイト先の仲間',
            'color' => json_encode([
                'r' => 105,
                'g' => 56,
                'b' => 211,
                'a' => 1.0
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Group::create([
            'name' => '学科の友達',
            'color' => json_encode([
                'r' => 57,
                'g' => 211,
                'b' => 174,
                'a' => 1.0
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Group::create([
            'name' => 'サークルの仲間',
            'color' => json_encode([
                'r' => 251,
                'g' => 203,
                'b' => 0,
                'a' => 1.0
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Group::create([
            'name' => '部活の仲間',
            'color' => json_encode([
                'r' => 230,
                'g' => 150,
                'b' => 148,
                'a' => 1.0
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);
    }
}