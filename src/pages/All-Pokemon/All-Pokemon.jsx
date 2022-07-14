import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { getAllPokemonWithInfo } from '../../components/services/poke-api';
import { Spinner } from 'react-bootstrap';
import Pokeball from '../../components/Pokeball/Pokeball';



const AllPokemon = ({loading, setLoading}) => {
  const [pokemon, setPokemon] = useState([])
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  
  const navigate = useNavigate()
  const [gen, setGen] = useState(1)

  const getAndDisplayPokemon = async (get, pad, gen) => {
    setLoading(true)
    const newPokemon = await getAllPokemonWithInfo(get, pad)
    setPokemon(newPokemon)
    setGen(gen ? gen : 1)
    setLoading(false)
  }


  useEffect(() => {
    getAndDisplayPokemon(151, 0)
  }, [])

  

  const toPokemonDetails = (singlePokemon) => {
    navigate(`/pokemon-details`, { state: { singlePokemon } })
  }

  if (loading) {
    return <Pokeball />
  } else {


  return (
    <div className='all-pokemon-div'>
      <header>
        <div className="btn-container">
          <button onClick={() => getAndDisplayPokemon(151, 0, 1)} className='gen-btn'>gen 1</button>
          <button onClick={() => getAndDisplayPokemon(100, 151, 2)} className='gen-btn'>gen 2</button>
          <button onClick={() => getAndDisplayPokemon(135, 251, 3)} className='gen-btn'>gen 3</button>
          <button onClick={() => getAndDisplayPokemon(108, 386, 4)} className='gen-btn'>gen 4</button>
          <button onClick={() => getAndDisplayPokemon(155, 494, 5)} className='gen-btn'>gen 5</button>
          <button onClick={() => getAndDisplayPokemon(72, 649, 6)} className='gen-btn'>gen 6</button>
          <button onClick={() => getAndDisplayPokemon(88, 721, 7)} className='gen-btn'>gen 7</button>
          <button onClick={() => getAndDisplayPokemon(89, 809, 8)} className='gen-btn'>gen 8</button>
        </div>

        <h1 >Generation {gen} </h1>
        
      </header>

      <div className='cards-container'>
        {pokemon.map((pokemon, i) => {
          return <button key={i} onClick={() => { toPokemonDetails(pokemon) }} className='card-button'> <PokemonCard key={i} pokemon={pokemon} /></button>
        })}
      </div>
    </div>
  );
}
}

export default AllPokemon;