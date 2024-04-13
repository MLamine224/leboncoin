<?php

// namespace App\Controller;

// use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\HttpFoundation\Response;
// use Symfony\Component\Routing\Attribute\Route;
// use Symfony\Component\Serializer\SerializerInterface;

// class ReactController extends AbstractController
// {
//     #[Route('/react', name: 'app_react')]
//     public function index(SerializerInterface $serializer): Response
//     {
//         return $this->render('react/index.html.twig');
//     }
// }


// src/Controller/ReactController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\AnnoncesRepository;
use Symfony\Component\Serializer\SerializerInterface;

class ReactController extends AbstractController
{
    #[Route('/react', name: 'app_react')]
    public function index(AnnoncesRepository $annoncesRepository, SerializerInterface $serializer): Response
    {
        $annonces = $annoncesRepository->findAll();
        $jsonAnnonces = $serializer->serialize($annonces, 'json');

        return $this->render('react/index.html.twig', [
            'annonces' => $jsonAnnonces,
        ]);
    }
}
