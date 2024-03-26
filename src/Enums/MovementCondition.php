<?php

namespace App\Enums;

enum MovementCondition: string
{
    case CART = 'chariot';
    case Medium = 'roulettes';
    case SOME_PEOPLE = 'plusieurs personne';
    // ... D'AUTRES IDÉES ???
}