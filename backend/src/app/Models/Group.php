<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Group extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'color'
    ];

    public function places()
    {
        return $this->hasMany(Place::class);
    }
    public function members()
    {
        return $this->hasMany(Member::class, 'group_id');
    }
}
