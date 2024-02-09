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
            'color' => '#FF0000'
        ]);

        Group::create([
            'name' => 'バイト先の仲間',
            'color' => '#00FF00'
        ]);

        Group::create([
            'name' => '学科の友達',
            'color' => '#0000FF'
        ]);

        Group::create([
            'name' => 'サークルの仲間',
            'color' => '#FFFF00'
        ]);

        Group::create([
            'name' => '部活の仲間',
            'color' => '#00FFFF'
        ]);
    }
}
