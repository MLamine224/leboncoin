import React from "react";
import { Link } from "react-router-dom";

const ModifierAnnonce = () => {
  const annonce = {
    id: 1,
    type: "Meuble",
    longueur: 2,
    largeur: 1.5,
    hauteur: 1,
    description: "Table en bois",
    demontable: true,
    date_annonce: "2024-03-07",
    lieu_stockage: "Entrepôt A",
    condition_deplacement: "Fragile",
    etat: "Neuf",
  };

  if (!annonce) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div>
      <h1>Modifier l'annonce</h1>
      <div>
        <p>
          <label>Type :</label>
          <input type="text" defaultValue={annonce.type} />
        </p>
        <p>
          <label>Description :</label>
          <input type="text" defaultValue={annonce.description} />
        </p>
        <p>
          <label>Dimensions :</label>
          <input type="text" defaultValue={annonce.longueur} /> m x
          <input type="text" defaultValue={annonce.largeur} /> m x
          <input type="text" defaultValue={annonce.hauteur} /> m
        </p>
        <p>
          <label>Lieu de stockage :</label>
          <input type="text" defaultValue={annonce.lieu_stockage} />
        </p>
        <p>
          <label>Condition de déplacement :</label>
          <input type="text" defaultValue={annonce.condition_deplacement} />
        </p>
        <p>
          <label>État :</label>
          <input type="text" defaultValue={annonce.etat} />
        </p>
        <p>
          <label>Date de l'annonce :</label>
          <input type="text" defaultValue={annonce.date_annonce} />
        </p>
        <p>
          <label>Démontable :</label>
          <input
            type="text"
            defaultValue={annonce.demontable ? "Oui" : "Non"}
          />
        </p>
        <Link to="/">
          <button>Enregistrer les modifications</button>
        </Link>
      </div>
    </div>
  );
};
export default ModifierAnnonce;
