<?php

namespace App\Entity;

use App\Enums\MovementCondition;
use App\Enums\AnnouncementStatus;
use App\Enums\FurnitureCondition;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\AnnoncesRepository;
use Symfony\Component\Validator\Constraints as Assert;


#[ORM\Entity(repositoryClass: AnnoncesRepository::class)]
class Annonces
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Assert\Length(min: 2, max: 50)]
    private ?string $furnitureType = null;

    #[ORM\Column]
    #[Assert\NotBlank]
    #[Assert\Positive]
    private ?float $Width = null;

    #[ORM\Column]
    #[Assert\NotBlank]
    #[Assert\Positive]
    private ?float $Length = null;

    #[ORM\Column]
    #[Assert\NotBlank]
    #[Assert\Positive]
    private ?float $Height = null;

    #[ORM\Column]
    private ?bool $isDismountable = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $announcementDate = null;

    #[ORM\Column(length: 255)]
    private ?string $storageLocation = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Assert\Length(min: 2, max: 50)]
    private ?string $movementCondition = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Assert\Length(min: 2, max: 50)]
    private ?string $furnitureCondition = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Assert\Length(min: 2, max: 50)]
    private ?string $announcementStatus = null;

    #[ORM\Column]
    private ?bool $isRepairable = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?GeographicSite $siteGeographique = null;

    public function __construct() {
        $this->announcementDate = new \DateTimeImmutable();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getFurnitureType(): ?string
    {
        return $this->furnitureType;
    }

    public function setFurnitureType(string $furnitureType): static
    {
        $this->furnitureType = $furnitureType;

        return $this;
    }

    public function getWidth(): ?float
    {
        return $this->Width;
    }

    public function setWidth(float $Width): static
    {
        $this->Width = $Width;

        return $this;
    }

    public function getLength(): ?float
    {
        return $this->Length;
    }

    public function setLength(float $Length): static
    {
        $this->Length = $Length;

        return $this;
    }

    public function getHeight(): ?float
    {
        return $this->Height;
    }

    public function setHeight(float $Height): static
    {
        $this->Height = $Height;

        return $this;
    }

    public function isIsDismountable(): ?bool
    {
        return $this->isDismountable;
    }

    public function setIsDismountable(bool $isDismountable): static
    {
        $this->isDismountable = $isDismountable;

        return $this;
    }

    public function getAnnouncementDate(): ?\DateTimeImmutable
    {
        return $this->announcementDate;
    }

    public function setAnnouncementDate(\DateTimeImmutable $announcementDate): static
    {
        $this->announcementDate = $announcementDate;

        return $this;
    }

    public function getStorageLocation(): ?string
    {
        return $this->storageLocation;
    }

    public function setStorageLocation(string $storageLocation): static
    {
        $this->storageLocation = $storageLocation;

        return $this;
    }

    public function getMovementCondition(): ?string
    {
        return $this->movementCondition;
    }

    public function setMovementCondition($movementCondition): static
    {
        if ($movementCondition instanceof MovementCondition) {
            $this->movementCondition = $movementCondition->value;
        } 
        else if (is_string($movementCondition)) {
            $this->movementCondition = $movementCondition;
        }

        return $this;
    }


    public function getFurnitureCondition(): ?string
    {
        return $this->furnitureCondition;
    }

    public function setFurnitureCondition($furnitureCondition): static
    {
        if ($furnitureCondition instanceof FurnitureCondition) {
            $this->furnitureCondition = $furnitureCondition->value;
        } 
        else if (is_string($furnitureCondition)) {
            $this->furnitureCondition = $furnitureCondition;
        }

        return $this;
    }

    public function getAnnouncementStatus(): ?string
    {
        return $this->announcementStatus;
    }

    public function setAnnouncementStatus($announcementStatus): static
    {
        if ($announcementStatus instanceof AnnouncementStatus) {
            $this->announcementStatus = $announcementStatus->value;
        } 
        else if (is_string($announcementStatus)) {
            $this->announcementStatus = $announcementStatus;
        }

        return $this;
    }

    public function isIsRepairable(): ?bool
    {
        return $this->isRepairable;
    }

    public function setIsRepairable(bool $isRepairable): static
    {
        $this->isRepairable = $isRepairable;

        return $this;
    }

    public function getSiteGeographique(): ?GeographicSite
    {
        return $this->siteGeographique;
    }

    public function setSiteGeographique(?GeographicSite $siteGeographique): static
    {
        $this->siteGeographique = $siteGeographique;

        return $this;
    }
}
