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
            'name' => 'Place 1',
            'status' => 0,
            'group_id' => 1,
            'latitude' => 34.686555,
            'longitude' => 135.52000,
            'date' => json_encode([
                "2024-02-15",
                "2024-02-16"
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Place::create([
            'name' => 'Place 2',
            'status' => 1,
            'group_id' => 2,
            'latitude' => '43.0686',
            'longitude' => '141.350784',
            'date' => json_encode([
                '2024-02-17',
                '2024-02-18'
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Place::create([
            'name' => 'Place 3',
            'status' => 2,
            'group_id' => 3,
            'latitude' => '-34.686555',
            'longitude' => '-135.52000',
            'date' => json_encode([
                '2024-02-19',
                '2024-02-20'
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Place::create([
            'name' => 'Place 4',
            'status' => 0,
            'group_id' => 4,
            'latitude' => '-43.0686',
            'longitude' => '-141.350784',
            'date' => json_encode([
                '2023-02-15',
                '2023-02-16'
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

        Place::create([
            'name' => 'Place 5',
            'status' => 1,
            'group_id' => 5,
            'latitude' => '50.686555',
            'longitude' => '100.52000',
            'date' => json_encode([
                '2024-03-15',
                '2024-03-16'
            ], JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT)
        ]);

    }
}
