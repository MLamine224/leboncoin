import React from "react";
// import "./css/mesAnnonces.css";
import Button from "@mui/material/Button";
import  {Link}  from "react-router-dom";

function ListeAnnonces() {
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
    }
  return (
    <div>
      <h1>Mes Annonces</h1>
        <div key={annonce.id} className="annoncesContainer">
          <h2>{annonce.type}</h2>
          <p>Description : {annonce.description}</p>
          <p>Dimensions : {annonce.longueur}m x {annonce.largeur}m x {annonce.hauteur}m</p>
          <p>Lieu de stockage : {annonce.lieu_stockage}</p>
          <p>Condition de déplacement : {annonce.condition_deplacement}</p>
          <p>État : {annonce.etat}</p>
          <p>Date de l'annonce : {annonce.date_annonce}</p>
          <p>Démontable : {annonce.demontable ? 'Oui' : 'Non'}</p>
          <Link to="/modifier">
            <Button variant="contained" className="annonceBtn">
              Modifier
            </Button>
          </Link>
          <Button variant="contained" className="annonceBtn" onClick={() => null}>
            Supprimer
          </Button>
	        {/* TODO: Rajout d'une condition pour activer le boutton*/}
          <Button variant="contained" className="annonceBtn" onClick={() => null}>
            Gérer
          </Button>
        </div>
    </div>
  );
}

export default ListeAnnonces;
