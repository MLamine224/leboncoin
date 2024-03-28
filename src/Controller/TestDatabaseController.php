<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class TestDatabaseController extends AbstractController
{
    #[Route('/database', name: 'database')]
    public function index(UserRepository $userRepository): JsonResponse
    {
        $users = $userRepository->findBy(['id' => '1'],null,1,null);
        foreach($users as $user){
            $userArray[] = [
                'FirstName' => $user->getFirstName(),
            ];
        }
        return new JsonResponse($userArray);
    }
}
