import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getMoveInfo } from "../../components/services/poke-api";
import Pokeball from "../../components/Pokeball/Pokeball";
import ListPokemon from "../../components/ListPokemon/ListPokemon";


const MoveDetails = () => {
  const location = useLocation()
  const URL = location.state.move.move.url
  const [move, setMove] = useState({})
  const [loading, setLoading] = useState(true)
  const [pokemonList, setPokemonList] = useState([])
  const [firstFive, setFirstFive] = useState([])
  const [smallList, setSmallList] = useState(true)

  const getAndSetMoveInfo = async (URL) => {
    const newMoveInfo = await getMoveInfo(URL)
    setMove(newMoveInfo);
    const arrayOfPokemon = newMoveInfo.learned_by_pokemon
    const promiseArray = []
    const arrayOfCompletedPromises = []
    for (let i = 0; i < arrayOfPokemon.length; i++) {
      const poke = arrayOfPokemon[i];
      promiseArray.push(axios.get(poke.url))
    }
    const resolvedPromises = await Promise.all(promiseArray)
    resolvedPromises.forEach((promise) => {
      arrayOfCompletedPromises.push(promise.data)
    })
    setPokemonList(arrayOfCompletedPromises)
    setFirstFive(arrayOfCompletedPromises.slice(0, 5))
    setLoading(false)
  }


  useEffect(() => {
    getAndSetMoveInfo(URL)
  }, [])

  if (loading) {
    return <Pokeball />
  } else {

    return (
      <article className="info-div">
        <header>
          <h3>{move.name}</h3>
          <h3>{move.type.name}</h3>
        </header>
        <div>
          Learned By:
          <button className="gen-btn" onClick={() => { setSmallList(!smallList) }}>
            {smallList ? `Show ${pokemonList.length - firstFive.length} More` : "Show Less"}
          </button>

          {smallList ?
            <ul >
              {firstFive.map((pokemon, i) => {
                return (
                  <ListPokemon key={pokemon.id} currentPokemon={pokemon} />
                )
              })
              }
            </ul>
            :
            <ul>
              {pokemonList.map((pokemon, i) => {
                return (
                  <ListPokemon key={pokemon.id} currentPokemon={pokemon} />
                )
              })

              }
            </ul>
          }
          
        </div>

      </article>
    );
  }
}

export default MoveDetails;