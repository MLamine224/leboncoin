<?php

namespace App\Repository;

use App\Entity\GeographicSite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<GeographicSite>
 *
 * @method GeographicSite|null find($id, $lockMode = null, $lockVersion = null)
 * @method GeographicSite|null findOneBy(array $criteria, array $orderBy = null)
 * @method GeographicSite[]    findAll()
 * @method GeographicSite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GeographicSiteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GeographicSite::class);
    }

//    /**
//     * @return GeographicSite[] Returns an array of GeographicSite objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('g')
//            ->andWhere('g.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('g.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?GeographicSite
//    {
//        return $this->createQueryBuilder('g')
//            ->andWhere('g.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
