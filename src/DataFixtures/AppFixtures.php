<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\User;
use App\Entity\Photo;
use App\Entity\Favori;
use App\Entity\Annonces;
use App\Entity\Statistics;
use App\Entity\GeographicSite;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void {
        // Initialisation de Faker
        $faker = Factory::create("fr_FR");

        $users = [];
        for ($i = 0; $i < 10; $i++) {
            $user = new User();
            $user->setFirstName($faker->firstName())
                 ->setLastName($faker->lastName())
                 ->setEmail($faker->email())
                 ->setRoles(['ROLE_USER'])
                 ->setPassword($faker->password(8, 20))
                 ->setUsername($faker->userName());
            $users[] = $user;
            $manager->persist($user);
        }

        $sites = [];
        for ($i = 0; $i < 20; $i++) {
            $site = new GeographicSite();
            $site->setSiteName($faker->company)
                 ->setSiteAddress($faker->address)
                 ->setLatitude($faker->latitude)
                 ->setLongitude($faker->longitude);
            $sites[] = $site;
            $manager->persist($site);
        }

        $annonces = [];
        foreach ($sites as $site) {
            for ($i = 0; $i < 2; $i++) {
                $annonce = new Annonces();
                $annonce->setFurnitureType($faker->randomElement(['bureau', 'chaise', 'table', 'armoir']))
                    ->setUser($users[$i])
                    ->setWidth($faker->randomFloat(2, 50, 200))
                    ->setLength($faker->randomFloat(2, 50, 200))
                    ->setHeight($faker->randomFloat(2, 50, 200))
                    ->setIsDismountable($faker->boolean)
                    ->setStorageLocation($faker->sentence)
                    ->setMovementCondition($faker->randomElement(['chariot', 'roulettes', 'plusieurs personne']))
                    ->setFurnitureCondition($faker->randomElement(['Neuf', 'Usagé', 'Endommagé']))
                    ->setAnnouncementStatus($faker->randomElement(['Actif', 'Archivé', 'Donné', 'Détruit']))
                    ->setIsRepairable($faker->boolean)
                    ->setPrice($faker->randomFloat(2, 10, 500))
                    ->setDescription($faker->paragraph()) // Ajout de la description
                    ->setSiteGeographique($site);
                $annonces[] = $annonce;
                $manager->persist($annonce);

                for ($j = 0; $j < 5; $j++) {
                    $imagesDisponibles = [
                        '/home/lamine/Projet Annuel/im1.jpg',
                        '/home/lamine/Projet Annuel/im2.jpg',
                        '/home/lamine/Projet Annuel/im3.jpg',
                        '/home/lamine/Projet Annuel/im4.jpg',
                        '/home/lamine/Projet Annuel/im5.jpg',
                        '/home/lamine/Projet Annuel/im6.jpg',
                    ];

                    $photo = new Photo();
                    $photo->setAnnonce($annonce)
                          ->setPhotoPath('im1.jpg');
                    $manager->persist($photo);
                    $annonce->addPhoto($photo);
                }
                $manager->persist($annonce);
            }
        }

        // Ajout de quelques favoris
        for ($i = 0; $i < 10; $i++) {
            $favori = new Favori();
            $favori->setUser($users[$i % count($users)])
                   ->setAnnonce($annonces[array_rand($annonces)]);
            $manager->persist($favori);
        }

        $stat = new Statistics();
        $stat->setStatisticsLabel('Nombre d\'annonces créées')
             ->setStatisticsValue(20);
        $manager->persist($stat);

        $manager->flush();
    }
}
