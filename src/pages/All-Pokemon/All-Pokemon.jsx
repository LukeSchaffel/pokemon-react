import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { getAllPokemon, getAllPokemonWithInfo } from '../../components/services/poke-api';
import { Spinner } from 'react-bootstrap';



const AllPokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const handleNextPgae = () => {
    setPage(page + 1)
    setOffset(offset + 12)
    getAllPokemon((12 * page), (offset))
      .then(pokemonData => setPokemon(pokemonData.results))
  }

  const getAndDisplayPokemon = async (get, pad) => {
    setLoading(true)
    const newPokemon = await getAllPokemonWithInfo(get, pad)
    setPokemon(newPokemon)
    setLoading(false)
  }


  useEffect(() => {
    getAndDisplayPokemon(151, 0)
  }, [])

  const toPokemonDetails = (singlePokemon) => {
    navigate(`/pokemon-details`, { state: { singlePokemon } })
  }


  return (
    <main>
      <h1>All Pokemon {loading ? <Spinner animation="grow" variant='danger'></Spinner> : null}</h1>

      <div className="btn-container">
        <button onClick={() => getAndDisplayPokemon(151, 0)} className='gen-btn'>gen 1</button>
        <button onClick={() => getAndDisplayPokemon(100, 151)} className='gen-btn'>gen 2</button>
        <button onClick={() => getAndDisplayPokemon(135, 251)} className='gen-btn'>gen 3</button>
      </div>


      <div className='cards-container'>
        {pokemon.map((pokemon, i) => {
          return <button onClick={() => { toPokemonDetails(pokemon) }} className='card-button'> <PokemonCard key={i} pokemon={pokemon} /></button>
        })}
      </div>
    </main>
  );
}

export default AllPokemon;