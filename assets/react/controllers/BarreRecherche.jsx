import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const BarreRecherche = ({ onRecherche }) => {
  const [termeRecherche, setTermeRecherche] = useState('');

  const handleRecherche = (e) => {
    // Prévenir le rechargement de la page
    e.preventDefault();
    onRecherche(termeRecherche);
  };

  return (
    <form onSubmit={handleRecherche} className="flex items-center">
      <label htmlFor="search" className="sr-only">Rechercher</label>
      <div className="relative flex items-center w-full">
        <SearchIcon className="absolute left-3 h-5 w-5 text-gray-500" />
        <input
          type="text"
          id="search"
          placeholder="Recherchez une annonce"
          value={termeRecherche}
          onChange={(e) => setTermeRecherche(e.target.value)}
          className="w-full rounded-md border-2 border-gray-300 pl-10 p-2 focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <button 
        type="submit"
        className="ml-2 rounded-md bg-indigo-600 p-2 text-white hover:bg-indigo-700"
      >
        Rechercher
      </button>
    </form>
  );
};

export default BarreRecherche;
