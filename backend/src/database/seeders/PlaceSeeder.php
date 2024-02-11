<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Place;

class PlaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Place::create([
            'name' => '代々木',
            'status' => 1,
            'group_id' => 1,
            'latitude' => 35.666160,
            'longitude' => 139.695961,
            'date' => json_encode([
                "2024-02-15",
                "2024-02-16"
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Place::create([
            'name' => '渋谷ロフト',
            'status' => 1,
            'group_id' => 2,
            'latitude' => 35.660922,
            'longitude' => 139.699770,
            'date' => json_encode([
                '2024-02-17',
                '2024-02-18'
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Place::create([
            'name' => '表参道カフェ',
            'status' => 1,
            'group_id' => 3,
            'latitude' => 35.665907,
            'longitude' => 139.711274,
            'date' => json_encode([
                '2024-02-19',
                '2024-02-20'
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Place::create([
            'name' => '清水寺',
            'status' => 1,
            'group_id' => 4,
            'latitude' => 34.994647,
            'longitude' => 135.784656,
            'date' => json_encode([
                '2023-02-15',
                '2023-02-16'
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Place::create([
            'name' => '京都スイーツ',
            'status' => 1,
            'group_id' => 5,
            'latitude' => 34.993283,
            'longitude' => 135.763191,
            'date' => json_encode([
                '2024-03-15',
                '2024-03-16'
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        place::create([
            'name' => 'USJ',
            'status' => 1,
            'group_id' => 6,
            'latitude' => 34.985849,
            'longitude' => 135.758767,
            'date' => json_encode([
                '2024-03-17',
                '2024-03-18'
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

    }
}
