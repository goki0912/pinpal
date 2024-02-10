<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Group extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'color'
    ];

    public function places() : HasMany
    {
        return $this->hasMany(Place::class, 'id');
    }
    public function members() : HasMany
    {
        return $this->hasMany(Member::class, 'group_id');
    }
}
