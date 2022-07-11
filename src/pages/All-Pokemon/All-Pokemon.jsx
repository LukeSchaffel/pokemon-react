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

  const getGenOne = async () => {
    setLoading(true)
    const gen1Pokemon = await getAllPokemonWithInfo(151, 0)
    setPokemon(gen1Pokemon)
    setLoading(false)
  }

  useEffect(() => {
    getGenOne()
  }, [])

  const getGenTwo = async () => {
    setLoading(true)
    const gen2Pokemon = await getAllPokemonWithInfo(100, 151)
    setPokemon(gen2Pokemon)
    setLoading(false)
  }


  return (
    <main>
      <h1>All Pokemon {loading ? <Spinner animation="border"></Spinner> : null}</h1>
      <button onClick={()=>getGenOne()}>gen 1</button>
      <button onClick={()=>getGenTwo()}>gen 2</button>

      <div className='cards-container'>
        {pokemon.map((pokemon, i) => {
          return <PokemonCard key={i} pokemon={pokemon} />
        })}

      </div>

    </main>
  );
}

export default AllPokemon;