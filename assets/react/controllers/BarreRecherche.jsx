import React, { useState } from 'react';

const BarreRecherche = ({ onRecherche }) => {
  const [termeRecherche, setTermeRecherche] = useState('');

  const handleRecherche = () => {
    onRecherche(termeRecherche);
  };

  return (
    <div className="barre-recherche">
      <input
        type="text"
        placeholder="Recherchez une annonce"
        value={termeRecherche}
        onChange={(e) => setTermeRecherche(e.target.value)}
      />
      <button onClick={handleRecherche}>Rechercher</button>
    </div>
  );
};

export default BarreRecherche;
