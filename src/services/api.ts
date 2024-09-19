export async function getCharacters(name: string): Promise<any> {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(name)}`);
    if (!response.ok) {
      throw new Error('Error al obtener los personajes');
    }
    const data = await response.json();
    return data.results;
  }
  export async function getCharacterById(id: string): Promise<any> {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener los detalles del personaje');
    }
    const data = await response.json();
    return data;
  }
    