import React, { useState, useEffect } from 'react';
import Annonce from './Annonce';
import BarreRecherche from './BarreRecherche'; 




const ListeAnnonces = () => {
  const [annonces, setAnnonces] = useState([]);

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
  }, []);


  const rechercherAnnonces = (termeRecherche) => {
    const annoncesFiltrees = annonces.filter(annonce =>
      annonce.titre.toLowerCase().includes(termeRecherche.toLowerCase())
    );
    setAnnonces(annoncesFiltrees);
  };

  return (
    <div>
      <BarreRecherche onRecherche={rechercherAnnonces} />
      {/* Utilisez les données dans votre interface utilisateur */}
      {annonces.map(annonce => (
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
        />
      ))}
    </div>
  );
};
export default ListeAnnonces;
