<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tag;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Tag::create([
            'name' => 'ランチ',
            'color' => '#FF0000'
        ]);

        Tag::create([
            'name' => 'カフェ',
            'color' => '#00FF00'
        ]);

        Tag::create([
            'name' => 'ディナー',
            'color' => '#0000FF'
        ]);

        Tag::create([
            'name' => '観光',
            'color' => '#FFFF00'
        ]);

        Tag::create([
            'name' => 'ショッピング',
            'color' => '#00FFFF'
        ]);
    }
}
