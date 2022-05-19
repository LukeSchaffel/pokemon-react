const baseUrl = "https://pokeapi.co/api/v2"

export function getAllPokemon() {
  return fetch(`${baseUrl}/pokemon/`)
  .then(res => res.json())
}

