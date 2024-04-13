import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PhotographIcon, XIcon } from '@heroicons/react/outline';

function Addannonce() {
  const [annonce, setAnnonce] = useState({
    typeMeuble: "",
    longueur: "",
    largeur: "",
    hauteur: "",
    description: "",
    demontable: "",
    dateAnnonce: "",
    lieuStockage: "",
    conditionDeplacement: "",
    etat: "",
    photos: [],
  });

  const [photos, setPhotos] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // const re = /^[0-9\b]+$/;

    // if (!(value === '' || re.test(value))) {
    //   alert("seulement des valeurs numériques réquises !");
    //   return;
    // }

    if (name === "dateAnnonce") {
      const selectedDate = new Date(value);
      const currentDate  = new Date();
      currentDate.setHours(0, 0, 0, 0);

      if (selectedDate < currentDate) {
        alert("La date doit être supérieure ou égale à la date actuelle.");
        return;
      }
    }

    setAnnonce({ ...annonce, [name]: value });
  };

  const handlePhotoChange = (event) => {
    if (event.target.files) {
      // Convertir les fichiers téléchargés en tableau et filtrer les doublons
      const newPhotosArray = Array.from(event.target.files).filter(
        (file) => !photos.some(photo => photo.name === file.name)
      );

      // Ajouter les nouvelles photos à l'état actuel, sans dépasser 10 images
      setPhotos(photos => [...photos, ...newPhotosArray].slice(0, 10));
      
      // Prévisualiser les images
      const newPreviewImages = newPhotosArray.map(file => URL.createObjectURL(file));
      setPreviewImages(prevImages => [...prevImages, ...newPreviewImages]);
    }
  };

  const handleRemovePhoto = (name) => {
    // Mettre à jour l'état des photos et des aperçus
    setPhotos(photos => photos.filter(photo => photo.name !== name));
    setPreviewImages(prevImages => prevImages.filter(url => {
      // Créer un objet File à partir de l'URL pour accéder à `name`
      let matches = url.match(/blob:(.*)$/);
      if (matches && matches[1]) {
        const file = new File([""], name);
        return URL.createObjectURL(file) !== url;
      }
      return true;
    }));
  };

  // Utilisez cette fonction pour nettoyer les URLs lors du démontage du composant
  useEffect(() => {
    return () => {
      previewImages.forEach(image => URL.revokeObjectURL(image));
    };
  }, [previewImages]);

  const renderPhotos = () => {
    return photos.map((photo, index) => {
      const photoURL = URL.createObjectURL(photo);
      return (
        <div key={photo.name} className="relative" >
          <img 
            src={photoURL} 
            alt={`Aperçu ${index}`} 
            className="w-24 h-24 object-cover"
          />
          <button 
            type="button"
            onClick={() => handleRemovePhoto(photo.name)} 
            className="absolute top-0 right-0 bg-red-100 p-1 rounded-full"
          >
            <XIcon className="h-4 w-4 text-red-600" />
          </button>
        </div>
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/mes-annonces", { state: { annonce } });
  };

  return (
    <>
    <header className="fixed top-0 w-full bg-gray-200 text-gray-900 shadow z-10">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between text-center">
        <Link to="/add" className="text-4xl font-semibold text-orange-600 hover:text-orange-700">
          LeBonCoin
        </Link>
        
        <label htmlFor="text" className="text-3xl font-medium text-gray-800 flex-grow">
          Déposer votre annonce
        </label>

        <Link
          to="/react"
          className="rounded-md bg-white py-2 px-4 text-sm font-medium text-gray-800 shadow-sm border border-gray-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Quitter
        </Link>
      </nav>
    </header>

    <div className="max-w-4xl mx-auto my-5 bg-white p-8 rounded-lg shadow">
        <div className="pt-[4rem]"></div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="sm:col-span-3">
            <label htmlFor="typeMeuble" className="block text-sm font-semibold text-gray-700">
              Type de meuble
            </label>
            <input
              type="text"
              id="typeMeuble"
              name="typeMeuble"
              min="0"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              value={annonce.typeMeuble}
              onChange={handleInputChange} />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="longueur" className="block text-sm font-semibold text-gray-700">
                Longueur (cm)
              </label>
              <input
                type="number"
                id="longueur"
                name="longueur"
                min="0"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                value={annonce.longueur}
                onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="largeur" className="block text-sm font-semibold text-gray-700">
                Largeur (cm)
              </label>
              <input
                type="number"
                id="largeur"
                name="largeur"
                min="0"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                value={annonce.largeur}
                onChange={handleInputChange} />
            </div>
            <div>
              <label htmlFor="hauteur" className="block text-sm font-semibold text-gray-700">
                Hauteur (cm)
              </label>
              <input
                type="number"
                id="hauteur"
                name="hauteur"
                required
                className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
                value={annonce.hauteur}
                onChange={handleInputChange} />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              value={annonce.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div>
            <label htmlFor="demontable" className="block text-sm font-semibold text-gray-700">
              Démontable
            </label>
            <select
              id="demontable"
              name="demontable"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              value={annonce.demontable}
              onChange={handleInputChange}
            >
              <option value="oui">Oui</option>
              <option value="non">Non</option>
            </select>
          </div>

          <div>
            <label htmlFor="dateAnnonce" className="block text-sm font-semibold text-gray-700">
              Date de l'annonce
            </label>
            <input
              type="date"
              id="dateAnnonce"
              name="dateAnnonce"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              value={annonce.dateAnnonce}
              onChange={handleInputChange} />
          </div>

          <div>
            <label htmlFor="lieuStockage" className="block text-sm font-semibold text-gray-700">
              Lieu de stockage
            </label>
            <input
              type="text"
              id="lieuStockage"
              name="lieuStockage"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              value={annonce.lieuStockage}
              onChange={handleInputChange} />
          </div>

          <div>
            <label htmlFor="conditionDeplacement" className="block text-sm font-semibold text-gray-700">
              Condition de déplacement
            </label>
            <input
              type="text"
              id="conditionDeplacement"
              name="conditionDeplacement"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              value={annonce.conditionDeplacement}
              onChange={handleInputChange} />
          </div>

          <div>
            <label htmlFor="etat" className="block text-sm font-semibold text-gray-700">
              État
            </label>
            <select
              id="etat"
              name="etat"
              required
              className="mt-1 block w-full rounded-lg border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              value={annonce.etat}
              onChange={handleInputChange}
            >
              <option value="neuf">Neuf</option>
              <option value="usage">Usagé</option>
              <option value="endommage">Endommagé</option>
            </select>
          </div>

          {/* Ajout de photos */}
          <div>
            <label htmlFor="photo-upload" className="block text-sm font-semibold text-gray-700 mb-4">
              Ajouter des photos
            </label>
            <div className="flex flex-wrap gap-4 justify-center mb-4">
              <div className="w-full">
                <div className="flex flex-wrap gap-4 justify-center border-2 border-dashed border-gray-300 rounded-lg p-4">
                  {renderPhotos()}
                  {photos.length < 10 && (
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <div className="flex items-center justify-center w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400">
                        <PhotographIcon className="h-10 w-10 text-gray-400" />
                      </div>
                    </label>
                  )}
                </div>
              </div>
              <input
                id="photo-upload"
                type="file"
                multiple
                onChange={handlePhotoChange}
                className="hidden"
                accept="image/*" />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Publier l'annonce
            </button>
          </div>
        </form>
      </div></>
  );
}

export default Addannonce;