<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Place extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'status',
        'group_id',
        'latitude',
        'longitude',
        'date'
    ];

    const WANT_TO_GO = 0;
    const GOING = 1;
    const GONE = 2;

    public function group() : BelongsTo
    {
        return $this->belongsTo(Group::class, 'group_id');
    }

}
