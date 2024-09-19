import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../services/api';

function CharacterDetail() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchTerm === '') return;
    setLoading(true);
    getCharacters(searchTerm)
      .then((data: any) => {
        setCharacters(data);
        setLoading(false);
      })
      .catch((err: any) => {
        setError('Error al cargar los personajes.');
        setLoading(false);
      });
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar personaje por nombre..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={() => { /**/ }}>
          Buscar
        </button>
      </div>

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}

      <div className="characters-list">
        {Array.isArray(characters) && characters.map(character => (
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

export default CharacterDetail;
