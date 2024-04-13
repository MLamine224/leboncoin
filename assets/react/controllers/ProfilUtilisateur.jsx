import React from "react";
// import "./css/ProfileUtilisateur.css";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const ProfilUtilisateur = () => {
  const user = {
    name: "Massi",
    email: "massi@test.com",
    phone: "+33 621394682",
  };

  return (
    <div className="rootProfile">
      <div className="header-root">
        <p className="headingProfile">Salut, {user.name} !</p>
        <p className="greeting">Bienvenue ! Bon shopping !</p>
      </div>
      <div className="profileContainer">
        <div className="leftContainer">
          <h4 className="profileHeadingLeft">Aperçu du profil</h4>
          <div className="profileSection">
            <div className="leftDetails">
              <p className="profileText">
                <span className="profileSubHeading">Nom :</span>
                {user.name}
              </p>
              <p className="profileText">
                <span className="profileSubHeading">Email : </span>
                {user.email}
              </p>
            </div>
          </div>

          <div className="mesAnnonces">
            <p>Mes Annonces</p>
            <Link to="/Profil/MesAnnonces">
              <Button variant="contained" className="ordersButton">
                Voir
              </Button>
            </Link>
          </div>

          <div className="AjoutAnnonce">
            <p>Ajouter une Annonce</p>
            <Link to="/Profil/addAnnonce">
              <Button variant="contained" className="ordersButton">
                Ajout
              </Button>
            </Link>
          </div>
        </div>

        <div className="rightContainer">
          <div className="righHeadings">
            <p className="profileHeading">Informations Personnelles</p>
            <p className="profileText2">
              Salut ! N'hésitez pas à modifier vos détails ci-dessous pour que
              votre compte soit à jour.
            </p>
          </div>

          <div className="profileDetials">
            <div className="details">
              <p className="profileHeading">Mes Coordonnées</p>
              <p className="profileText">Nom d'utilisateur: {user.name}</p>
              <p className="profileText">Email: {user.email}</p>
              <p className="profileText">Numéro de téléphone: {user.phone}</p>
            </div>

            <Button
              variant="contained"
              className="profileButton"
              onClick={() => null}
            >
              Éditer les Coordonnées
            </Button>

            <div className="detials">
              <p className="profileHeading">INFORMATIONS DE CONNEXION</p>
              <p className="profileSubHeading">EMAIL</p>
              <p className="profileText">{user.email}</p>

              <p className="profileSubHeading">Mot de passe</p>
              <p className="profileSubHeading">*************</p>
            </div>

            <Button
              variant="contained"
              className="profileButton"
              onClick={() => null}
            >
              Mettre à jour le mot de passe
            </Button>

            <div className="mangeAccount">
              <p className="profileHeading">
                Se déconnecter de tous les appareils
              </p>
              <p className="profileText3">
                Pour accéder à nouveau au site web Le BonCoin UR, vous devez
                fournir vos informations d'identification. Cette action vous
                déconnectera de tout autre navigateur web que vous avez utilisé
                auparavant.
              </p>
            </div>

            <Button
              variant="contained"
              className="profileButton"
              onClick={() => null}
            >
              Déconnexion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilUtilisateur;
