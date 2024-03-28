import React, { useState } from "react";

import Annonce from "./Annonce";
import BarreRecherche from "./BarreRecherche";

import { Link } from "react-router-dom";

const annoncesListe = [
  {
    id: 1,
    type: "Armoire",
    longueur: 4,
    largeur: 2,
    hauteur: 1.5,
    description: "En bois",
    demontable: true,
    date_annonce: "2024-03-05",
    lieu_stockage: "Chambre",
    condition_deplacement: "À venir chercher",
    etat: "Neuf",
    prix: 30,
  },
  {
    id: 2,
    type: "Table",
    longueur: 1.5,
    largeur: 1,
    hauteur: 2,
    description: "En verre",
    demontable: true,
    date_annonce: "2024-03-05",
    lieu_stockage: "Salon",
    condition_deplacement: "À venir chercher",
    etat: "Occasion",
    prix: 100,
  },
];

const Acceuil = () => {
  const [annonces, setAnnonces] = useState(annoncesListe);
  const [filtre, setFiltre] = useState("");

  /* Utilisez les données dans votre interface utilisateur 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:46535/API/Annonces');
        const data = await response.json();
        setAnnonces(data);
        console.log(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };
    fetchData();
  }, []);*/

  const rechercherAnnonces = (termeRecherche) => {
    const annoncesFiltrees = annonces.filter((annonce) =>
      annonce.type.toLowerCase().includes(termeRecherche.toLowerCase())
    );
    setAnnonces(annoncesFiltrees);
  };

  const trierParPrix = (optionTri) => {
    let annoncesTrie;
    if (optionTri === "prixCroissant") {
      annoncesTrie = [...annonces].sort((a, b) => a.prix - b.prix);
    } else if (optionTri === "prixDecroissant") {
      annoncesTrie = [...annonces].sort((a, b) => b.prix - a.prix);
    } else {
      annoncesTrie = annoncesListe;
    }
    setAnnonces(annoncesTrie);
  };
  const filtrerAnnonces = () => {
    let annoncesFiltrees = annoncesListe;

    if (filtre === "demontable") {
      annoncesFiltrees = annoncesFiltrees.filter(
        (annonce) => annonce.demontable
      );
    } else if (filtre === "nonDemontable") {
      annoncesFiltrees = annoncesFiltrees.filter(
        (annonce) => !annonce.demontable
      );
    } else if (filtre === "etatNeuf") {
      annoncesFiltrees = annoncesFiltrees.filter(
        (annonce) => annonce.etat.toLowerCase() === "neuf"
      );
    } else if (filtre === "etatOccasion") {
      annoncesFiltrees = annoncesFiltrees.filter(
        (annonce) => annonce.etat.toLowerCase() === "occasion"
      );
    } else if (filtre === "date") {
      annoncesFiltrees = annoncesFiltrees.sort(
        (a, b) => new Date(b.date_annonce) - new Date(a.date_annonce)
      );
    }

    setAnnonces(annoncesFiltrees);
  };

  return (
    <div>
      <label htmlFor="tri">Trier par prix : </label>
      <select id="tri" onChange={(e) => trierParPrix(e.target.value)}>
        <option value="prixCroissant">Prix croissant</option>
        <option value="prixDecroissant">Prix décroissant</option>
        <option value="aucunTri">Aucun tri</option>
      </select>
      <label htmlFor="filtre">Filtrer par : </label>
      <select id="filtre" onChange={(e) => setFiltre(e.target.value)}>
        <option value="">Aucun filtre</option>
        <option value="demontable">Démontable</option>
        <option value="nonDemontable">Non Démontable</option>
        <option value="etatNeuf">État Neuf</option>
        <option value="etatOccasion">État Occasion</option>
        <option value="date">Date</option>
      </select>
      <button type="button" onClick={filtrerAnnonces}>
        Appliquer le filtre
      </button>
      <Link to="/Profil">
        <button type="button" onClick={() => null}>
          Page utilisateur
        </button>
      </Link>
      <Link to="/connexion">
        <button type="button" onClick={() => null}>
          Connexion
        </button>
      </Link>

      <BarreRecherche onRecherche={rechercherAnnonces} />
      {/* Utilisez les données dans votre interface utilisateur */}
      {annonces.map((annonce) => (
        <Annonce
          key={annonce.id}
          id={annonce.id}
          type={annonce.type}
          longueur={annonce.longueur}
          largeur={annonce.largeur}
          hauteur={annonce.hauteur}
          description={annonce.description}
          demontable={annonce.demontable}
          date_annonce={annonce.date_annonce}
          lieu_stockage={annonce.lieu_stockage}
          condition_deplacement={annonce.condition_deplacement}
          etat={annonce.etat}
          prix={annonce.prix}
        />
      ))}
    </div>
  );
};
export default Acceuil;
