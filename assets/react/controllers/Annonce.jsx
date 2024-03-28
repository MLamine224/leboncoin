import React from 'react';

const Annonce = ({ id, type, longueur, largeur, hauteur, description, demontable, date_annonce, lieu_stockage, condition_deplacement, etat , prix}) => {
  return (
    <div className="annonce">
      <h2>{type}</h2>
      <p>Description : {description}</p>
      <p>Dimensions : {longueur}m x {largeur}m x {hauteur}m</p>
      <p>Lieu de stockage : {lieu_stockage}</p>
      <p>Condition de déplacement : {condition_deplacement}</p>
      <p>État : {etat}</p>
      <p>Date de l'annonce : {date_annonce}</p>
      <p>Démontable : {demontable ? 'Oui' : 'Non'}</p>
      <p>Prix : {prix}€</p>
      <button>
        <a href='App.js'>Voir détails</a>
      </button>
    </div>
  );
};

export default Annonce;
