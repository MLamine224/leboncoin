<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\User;
use App\Entity\Photo;
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
        
        // Création de 10 utilisateurs
        $users = [];
       /* JE RETIRE PROVISOIREMENT LES FIXTURES POUR LA TABLE USER ...
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
        }*/

        // Création de Sites Géographiques
        $sites = [];
        for ($i = 0; $i < 5; $i++) {
            $site = new GeographicSite();
            $site->setSiteName($faker->company)
                 ->setSiteAddress($faker->address)
                 ->setLatitude($faker->latitude)
                 ->setLongitude($faker->longitude);
            $sites[] = $site;
            $manager->persist($site);
        }

        // Création d'Annonces
        foreach ($sites as $site) {
            for ($i = 0; $i < 2; $i++) {
                $annonce = new Annonces();
                $annonce->setFurnitureType($faker->randomElement(['bureau', 'chaise', 'table']))
                        ->setUser($users[$i])
                        ->setWidth($faker->randomFloat(2, 50, 200))
                        ->setLength($faker->randomFloat(2, 50, 200))
                        ->setHeight($faker->randomFloat(2, 50, 200))
                        ->setIsDismountable($faker->boolean)
                        // ->setAnnouncementDate(new \DateTime())
                        ->setStorageLocation($faker->sentence)
                        ->setMovementCondition($faker->randomElement(['chariot', 'roulettes', 'plusieurs personne']))
                        ->setFurnitureCondition($faker->randomElement(['Neuf', 'Usagé', 'Endommagé']))
                        ->setAnnouncementStatus($faker->randomElement(['Actif', 'Archivé', 'Donné', 'Détruit']))
                        ->setIsRepairable($faker->boolean)
                        ->setSiteGeographique($site);
                $manager->persist($annonce);

                // Création de Photos pour chaque Annonce
                for ($j = 0; $j < 5; $j++) {
                    $photo = new Photo();
                    $photo->setAnnonce($annonce)
                          ->setPhotoPath($faker->imageUrl);
                    $manager->persist($photo);
                }
            }
        }

        // Création de Statistiques
        $stat = new Statistics();
        $stat->setStatisticsLabel('Nombre d\'annonces créées')
             ->setStatisticsValue(20);
            //  ->setStatisticsDate(new \DateTime());
        $manager->persist($stat);

        $manager->flush();
    }
}
