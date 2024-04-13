<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AddController extends AbstractController
{
    #[IsGranted("ROLE_USER")]
    #[Route('/add', name: 'app_add')]
    public function index(): Response
    {
        // $this->getUser();
        //dd($this->getUser());
        return $this->render('add/index.html.twig', [
            'controller_name' => 'AddController',
        ]);
    }
}
