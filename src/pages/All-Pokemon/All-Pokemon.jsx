import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { getAllPokemon, getAllPokemonWithInfo } from '../../components/services/poke-api';
import { Spinner } from 'react-bootstrap';



const AllPokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)

  const handleNextPgae = () => {
    setPage(page + 1)
    setOffset(offset + 12)
    getAllPokemon((12 * page), (offset))
      .then(pokemonData => setPokemon(pokemonData.results))
  }



  useEffect(() => {
    getAllPokemonWithInfo()
    .then(pokemonData => setPokemon(pokemonData))
  }, [])


  return (
    <main>
      <h1>All Pokemon</h1>
      {loading ? <Spinner animation="border"><h1>Loading</h1></Spinner> : null}
      <div className='cards-container'>
        {pokemon.map((pokemon, i) => {
          return <PokemonCard pokemon={pokemon} />
        })}

      </div>
      <button onClick={handleNextPgae}>Next Page</button>
    </main>
  );
}

export default AllPokemon;