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
            'tag_id' => 1,
            'address' => 'Address 1',
            'date' => '2024-02-15'
        ]);

        Place::create([
            'name' => 'Place 2',
            'status' => 1,
            'tag_id' => 2,
            'address' => 'Address 2',
            'date' => '2024-02-16'
        ]);

        Place::create([
            'name' => 'Place 3',
            'status' => 2,
            'tag_id' => 3,
            'address' => 'Address 3',
            'date' => '2024-03-17'
        ]);

        Place::create([
            'name' => 'Place 4',
            'status' => 0,
            'tag_id' => 4,
            'address' => 'Address 4',
            'date' => '2024-02-18'
        ]);

        Place::create([
            'name' => 'Place 5',
            'status' => 1,
            'tag_id' => 5,
            'address' => 'Address 5',
            'date' => '2024-02-19'
        ]);

    }
}
