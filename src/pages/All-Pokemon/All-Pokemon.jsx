import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllPokemon } from '../../components/services/poke-api';


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

  useEffect(()=> {
    getAllPokemon((12 * page), (offset * page))
    .then(pokemonData => setPokemon(pokemonData.results))
  }, [])

  console.log(pokemon)
  return ( 
  <>
    <h1>All Pokemon</h1>
    <div>
      {pokemon.map(pokemon => (
        <h1>{pokemon.name} {pokemon.weight}</h1>
        
        
        ))}
    
    </div>
    <button onClick={handleNextPgae}>Next Page</button>
  </> 
  );
}
 
export default AllPokemon;