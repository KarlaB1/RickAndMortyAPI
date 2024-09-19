import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCharacterById } from '../services/api';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true); 
      getCharacterById(id)
        .then(data => {
          setCharacter(data);
          setLoading(false);
        })
        .catch(err => {
          setError('Error al cargar los detalles del personaje.');
          setLoading(false);
        });
    }
  }, [id]);

  const addToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.length === 5) {
      favorites.shift();
    }

    favorites.push(character);

    localStorage.setItem('favorites', JSON.stringify(favorites));

    alert(`${character.name} ha sido añadido a favoritos!`);
  };

  if (loading) {
    return <p>Cargando detalles del personaje...</p>; 
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!character) {
    return <p>No se encontró el personaje.</p>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <div className="character-info">
      <div className="info-item">
        <strong>Género:</strong> {character.gender}
      </div>
      <div className="info-item">
        <strong>Estado:</strong> {character.status}
      </div>
      <div className="info-item">
        <strong>Origen:</strong> {character.origin?.name}
      </div>
      <div className="info-item">
        <strong>Ubicación:</strong> {character.location?.name}
      </div>
      <div className="info-item">
        <strong>Número de episodios:</strong> {character.episode?.length}
      </div>
</div>

      <button className="favorite-button" onClick={addToFavorites}>Agregar a Favoritos</button>
    </div>
  );
}

export default CharacterDetail;
