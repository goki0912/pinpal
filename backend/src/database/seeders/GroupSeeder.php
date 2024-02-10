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
                'r' => 255,
                'g' => 0,
                'b' => 0,
                'a' => 1.0
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Group::create([
            'name' => 'バイト先の仲間',
            'color' => json_encode([
                'r' => 0,
                'g' => 255,
                'b' => 0,
                'a' => 1.0
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Group::create([
            'name' => '学科の友達',
            'color' => json_encode([
                'r' => 0,
                'g' => 0,
                'b' => 255,
                'a' => 1.0
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Group::create([
            'name' => 'サークルの仲間',
            'color' => json_encode([
                'r' => 255,
                'g' => 255,
                'b' => 0,
                'a' => 1.0
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Group::create([
            'name' => '部活の仲間',
            'color' => json_encode([
                'r' => 255,
                'g' => 0,
                'b' => 255,
                'a' => 1.0
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);
    }
}
