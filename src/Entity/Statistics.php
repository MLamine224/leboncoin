<?php

namespace App\Entity;

use App\Repository\StatisticsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StatisticsRepository::class)]
class Statistics
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $statisticsLabel = null;

    #[ORM\Column]
    private ?float $statisticsValue = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeImmutable $statisticsDate = null;

    public function __construct() {
        $this->statisticsDate = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatisticsLabel(): ?string
    {
        return $this->statisticsLabel;
    }

    public function setStatisticsLabel(string $statisticsLabel): static
    {
        $this->statisticsLabel = $statisticsLabel;

        return $this;
    }

    public function getStatisticsValue(): ?float
    {
        return $this->statisticsValue;
    }

    public function setStatisticsValue(float $statisticsValue): static
    {
        $this->statisticsValue = $statisticsValue;

        return $this;
    }

    public function getStatisticsDate(): ?\DateTimeImmutable
    {
        return $this->statisticsDate;
    }

    public function setStatisticsDate(\DateTimeImmutable $statisticsDate): static
    {
        $this->statisticsDate = $statisticsDate;

        return $this;
    }
}
