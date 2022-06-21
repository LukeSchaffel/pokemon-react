const baseUrl = "https://pokeapi.co/api/v2"

export function getAllPokemon(num) {
  return fetch(`${baseUrl}/pokemon?limit=${num}&offset=0/`)
  .then(res => res.json())
}

export const getPokemonInfo = (formData)=>{
  return fetch (`https://pokeapi.co/api/v2/pokemon/${formData}`)
  .then(res => res.json())
}