<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Phonebook extends Model
{
     protected $hidden = [
        'created+at', 'updated_at'
    ];
}
