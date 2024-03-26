<?php
namespace App\Enums;

enum AnnouncementStatusEnum: string
{
    case ACTIVE = 'active';
    case ARCHIVED = 'archivé';
    case GIVEN_AWAY = 'Donné';
    case DESTROYED = 'Détruit';
}