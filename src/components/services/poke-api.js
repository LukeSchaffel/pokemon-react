import axios from "axios"

const baseUrl = "https://pokeapi.co/api/v2"

// export function getAllPokemon(get, offset) {
//   return fetch(`${baseUrl}/pokemon?limit=${get}&offset=${offset}/`)
//     .then(res => res.json())
// }

export const getPokemonInfo = (formData) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${formData}`)
    .then(res => res.json())
}



export const getAllPokemonWithInfo = async (total, offset) => {
  try {
    const res = await axios.get(`${baseUrl}/pokemon?limit=${total}&offset=${offset}/`)
    const pokemonData = res.data.results
    const promiseArray = []

    for (let i = 0; i < pokemonData.length; i++) {
      const element = pokemonData[i];

      promiseArray.push(
        axios.get(element.url)
      )

    }
    const allPokemonData = await Promise.all(promiseArray)
    const pokemon = []
    allPokemonData.forEach((item) => {
      pokemon.push(item.data)
    })
    return pokemon
  } catch (error) {
    console.log(error);
    throw (error)
  }
}

export const getLocationInfo = async (url) => {
  const res = await axios.get(url)
  const locationData = res.data
  return locationData
}

export const getMoveInfo = async (url) => {
  const res = await axios.get(url)
  const moveData = res.data
  return moveData
}

