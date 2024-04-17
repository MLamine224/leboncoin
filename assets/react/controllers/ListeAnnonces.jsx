import React, { useState, useEffect, useMemo } from "react";
import BarreRecherche from "./BarreRecherche";
import { SearchIcon, HeartIcon, UserIcon, ChatIcon, SelectorIcon } from '@heroicons/react/solid';
import { Link } from "react-router-dom";
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/outline';
import Footer from './Footer';

const ListeAnnonces = ({ allAnnonces }) => {
  const [termeRecherche, setTermeRecherche] = useState("");
  const [optionTri, setOptionTri] = useState("prixCroissant");
  const [filtre, setFiltre] = useState("");

  // Stocke les ID des annonces favorites
  const [favorites, setFavorites] = useState(new Set()); 

  const handleFavoriteClick = (annonceId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(annonceId)) {
        newFavorites.delete(annonceId);
      } else {
        newFavorites.add(annonceId);
      }
      return newFavorites;
    });
  };

  const annoncesFiltrees = useMemo(() => {
    let resultats = allAnnonces.filter(annonce => 
      annonce.furnitureType.toLowerCase().includes(termeRecherche.toLowerCase())
    );

    // Application du filtre
    if (filtre) {
      switch (filtre) {
        case "demontable":
          resultats = resultats.filter(annonce => annonce.isDismountable);
          break;
        case "nonDemontable":
          resultats = resultats.filter(annonce => !annonce.isDismountable);
          break;
        case "neuf":
          resultats = resultats.filter(annonce => annonce.furnitureCondition === "Neuf");
          break;
        case "usage":
          resultats = resultats.filter(annonce => annonce.furnitureCondition === "Usagé");
          break;
        case "endommage":
          resultats = resultats.filter(annonce => annonce.furnitureCondition === "Endommagé");
          break;
        default:
          // Aucune action si le filtre n'est pas reconnu
          break;
      }
    }

    // Application du tri
    return resultats.sort((a, b) => {
      if (optionTri === "prixCroissant")   return a.price - b.price;
      if (optionTri === "prixDecroissant") return b.price - a.price;
      return 0;
    });
  }, [allAnnonces, termeRecherche, optionTri, filtre]);
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header avec la logique d'importation de l'icône */}
      <header className="fixed top-0 w-full bg-gray-200 text-gray-900 shadow z-10">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/react" className="text-4xl font-semibold text-orange-600 hover:text-orange-700">
          LeBonCoin
        </Link>
          <div className="flex justify-center items-center py-1">
            <Link
              to="/add"
              className="bg-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition duration-300" 
              style={{ padding: '0.5rem' }} 
            >
              <div className="bg-gray-200 p-1 rounded" style={{ width: '30px', height: '30px' }}>
                <svg
                  className="w-6 h-6 bg-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  ></path>
                </svg>
              </div>
              <span className="text-sm text-white ml-2">Déposer une annonce</span>
            </Link>
          </div>

          {/* Déplacer les sélecteurs de tri et filtre ici */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <SelectorIcon className="w-5 h-5 text-gray-600" />
              <select
                id="tri"
                onChange={(e) => setOptionTri(e.target.value)}
                className="border border-gray-300 rounded-md p-1 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
              >
                <option value="prixCroissant">Prix croissant</option>
                <option value="prixDecroissant">Prix décroissant</option>
                <option value="">Aucun tri</option>
              </select>
            </div>

            <div className="flex items-center space-x-1">
              <SelectorIcon className="w-5 h-5 text-gray-600" />
              <select
                id="filtre"
                onChange={(e) => setFiltre(e.target.value)}
                className="border border-gray-300 rounded-md p-1 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-200"
              >
                <option value="">Aucun filtre</option>
                <option value="demontable">Démontable</option>
                <option value="nonDemontable">Non Démontable</option>
                <option value="neuf">État Neuf</option>
                <option value="usage">État Usé</option>
                <option value="endommage">État Endommagé</option>
              </select>
            </div>

            {/* Icônes et barre de recherche */}
            <BarreRecherche onRecherche={setTermeRecherche} />
            <div className="ml-auto flex items-center space-x-4">
              {/* Favoris */}
              <div className="flex flex-col items-center">
                <Link to="/favoris" className="text-gray-700 hover:text-gray-900">
                  <HeartIcon className="w-7 h-7 bg-transparent" />
                </Link>
                <span className="text-xs">Favoris</span>
              </div>
              
              {/* Messages */}
              <div className="flex flex-col items-center">
                <Link to="/messages" className="text-gray-700 hover:text-gray-900">
                  <ChatIcon className="w-7 h-7" />
                </Link>
                <span className="text-xs">Messages</span>
              </div>
              
              {/* Se connecter */}
              <div className="flex flex-col items-center">
                <Link to="/login" className="text-gray-700 hover:text-gray-900">
                  <UserIcon className="w-7 h-7" />
                </Link>
                <span className="text-xs">Se connecter</span>
              </div>
            </div>
          </div>
        </nav>
      </header>
      

      <main className="flex-grow container mx-auto px-4 pt-[70px]">

      <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      
      {annoncesFiltrees.map((annonce) => (
        <div key={annonce.id} className="group relative bg-white p-4 rounded-lg shadow space-y-2">
          {/* Vérifier si l'annonce a des photos */}
          {annonce.photos && annonce.photos.length > 0 ? (
            // Itérer sur la collection de photos et afficher chaque photo
            annonce.photos.map((photo, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75">
                <img
                  src={photo.photoPath} 
                  alt={`Photo ${index + 1} de ${annonce.furnitureType}`} 
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))
          ) : (
            // Fallback si aucune photo n'est disponible
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
              <span>Pas d'image disponible</span>
            </div>
          )}
          <h3 className="text-lg text-gray-900 font-semibold">{annonce.furnitureType}</h3>
          <p className="text-gray-500">{annonce.Width} x {annonce.Length} x {annonce.Height} cm</p>
          <p className="text-gray-900">{annonce.price} €</p>
          {/* Afficher la date de l'annonce */}
          <p className="text-sm text-gray-500">Date de mise en ligne: {new Date(annonce.announcementDate).toLocaleDateString()}</p>
          {/* Afficher le lieu de stockage */}
          {/* <p className="text-sm text-gray-500">Lieu: {annonce.storageLocation}</p> */}
          {/* Conditions de déplacement */}
          {/* <p className="text-sm text-gray-500">À récupérer: {annonce.movementCondition}</p> */}
          {/* État de l'article */}
          <p className={`text-sm ${
              annonce.furnitureCondition === 'Neuf' ?  'text-green-500' :
              annonce.furnitureCondition === 'Usagé' ? 'text-orange-500' :
             'text-red-500'
            }`}>
            État: {annonce.furnitureCondition}
          </p>
          <div className="flex justify-end">
            <button onClick={() => handleFavoriteClick(annonce.id)} className="cursor-pointer">
              {favorites.has(annonce.id) ? (
                <HeartIcon className="w-5 h-5 text-orange-600" />
              ) : (
                <OutlineHeartIcon className="w-5 h-5 text-gray-700 hover:text-orange-600" />
              )}
            </button>
          </div>
          {/* Bouton pour voir plus de détails ou contacter le vendeur */}
          <a href={`/detailAnnonce/${annonce.id}`} className="text-indigo-600 hover:text-indigo-900 text-sm font-semibold">
            Voir détails
          </a>
        </div>
            ))}
          </div>
        </div>
      </div>
    </main>

      <Footer />
    </div>
  );
};
export default ListeAnnonces;
