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
    getAllPokemonWithInfo(300, 151)
    .then((pokemonData) => {
      setPokemon(pokemonData)
      setLoading(false)
    })
  }, [])


  return (
    <main>
      <h1>All Pokemon {loading ? <Spinner animation="border"></Spinner> : null}</h1>
      
      <div className='cards-container'>
        {pokemon.map((pokemon, i) => {
          return <PokemonCard key={i} pokemon={pokemon} />
        })}

      </div>
      
    </main>
  );
}

export default AllPokemon;