import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllPokemon } from '../../components/services/poke-api';


const AllPokemon = () => {
  const [pokemon, setPokemon] = useState([])


  useEffect(()=> {
    getAllPokemon(12)
    .then(pokemonData => setPokemon(pokemonData.results))
  }, [])

  return ( 
  <>
    <h1>All Pokemon</h1>
    <div>
      {pokemon.map(pokemon =>
        <h1>{pokemon.name}</h1>
        )}
    
    </div>
  </> 
  );
}
 
export default AllPokemon;