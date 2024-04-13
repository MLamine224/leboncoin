<?php

namespace App\Enums;

enum FurnitureCondition: string
{
    case NEW = 'Neuf';
    case USED = 'Usagé';
    case DAMAGED = 'Endommagé';
    // ... D'AUTRES IDÉES ???
}