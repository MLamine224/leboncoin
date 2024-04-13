<?php

namespace App\EntityListener;

use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserListener
{
    private UserPasswordHasherInterface $hasher;

    public function __construct(UserPasswordHasherInterface $hasher)
    {
        $this->hasher = $hasher;
    }

    /**
     * Cette méthode est appelée avant que 
     * l'entité soit persistée pour la première fois
     * @param User $user
     * @param LifecycleEventArgs $event
     * @return void
     */
    public function prePersist(User $user): void
    {
        $this->hashPassword($user);
    }

    /**
     * Cette méthode est appelée avant 
     * que l'entité soit mise à jour
     *
     * @param User $user
     * @param LifecycleEventArgs $event
     * @return void
     */
    public function preUpdate(User $user): void
    {
        $this->hashPassword($user);
    }

    private function hashPassword(User $user): void
    {
        if ($user->getPlainPassword() != null) {
            $hashedPassword = $this->hasher->hashPassword(
                $user, 
                $user->getPlainPassword()
            );

            $user->setPassword($hashedPassword);

            // s'assurer d'effacer le mot de passe 
            // en clair après l'avoir haché
            $user->eraseCredentials();
        }
    }
}