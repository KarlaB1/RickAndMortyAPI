import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favorites() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <p>No hay personajes favoritos.</p>;
  }

  return (
    <div>
      <h1>Personajes Favoritos</h1>
      <div className="favorites-list">
        {favorites.map(character => (
          <div key={character.id} className="character-card">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>Género: {character.gender}</p>
            <p>Estado: {character.status}</p>
            <Link to={`/character/${character.id}`} className="VD">Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
