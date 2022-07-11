const baseUrl = "https://pokeapi.co/api/v2"

export function getAllPokemon(get, offset) {
  return fetch(`${baseUrl}/pokemon?limit=${get}&offset=${offset}/`)
  .then(res => res.json())
}

export const getPokemonInfo = (formData)=>{
  return fetch (`https://pokeapi.co/api/v2/pokemon/${formData}`)
  .then(res => res.json())
}