import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { getAllPokemon, getAllPokemonWithInfo } from '../../components/services/poke-api';


const AllPokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)

  const handleNextPgae = () => {
    setPage(page + 1)
    setOffset(offset + 12)
    getAllPokemon((12 * page), (offset))
      .then(pokemonData => setPokemon(pokemonData.results))
  }

  // useEffect(() => {
  //   getAllPokemon((12 * page), (offset * page))
  //     .then(pokemonData => setPokemon(pokemonData.results))
  // }, [])

  useEffect(() => {
    getAllPokemonWithInfo()
    .then(pokemonData => setPokemon(pokemonData))
  }, [])

  if (pokemon.length === 0) {
    return <h1>loading...</h1>
  }

  return (
    <>
      <h1>All Pokemon</h1>
      <div className='cards-container'>
        {/* {pokemon.map(pokemon => (
          <h1 key={pokemon.name} pokemon={pokemon}>{pokemon.name}</h1>
        ))} */}
        {pokemon.map((pokemon, i) => {
          return <PokemonCard pokemon={pokemon}/>
        })}

      </div>
      <button onClick={handleNextPgae}>Next Page</button>
    </>
  );
}

export default AllPokemon;