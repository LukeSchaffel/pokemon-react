import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getMoveInfo } from "../../components/services/poke-api";


const MoveDetails = () => {
  const location = useLocation()
  const URL = location.state.move.move.url
  const [move, setMove] = useState({})
  const [loading, setLoading] = useState(true)
  const [pokemonList, setPokemonList] = useState([])

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
    setLoading(false)
  }


  useEffect(() => {
    getAndSetMoveInfo(URL)
  }, [])



  if (loading) {
    return <h1>Loading</h1>
  } else {

    return (
      <article className="info-div">
        <header>
          <h3>{move.name}</h3>
          <h3>{move.type.name}</h3>
        </header>
        <div>
          Learned By:
          <ul style={{ color: 'white', backgroundColor: 'white' }}>
            {pokemonList.map((pokemon, i) => {
              const { name, url } = pokemon
              return (
                <li style={{ color: 'white' }}>
                  <Link
                    to='/pokemon-details'
                    state={{
                      singlePokemon: pokemon
                    }}
                  >
                    {name}
                  </Link>
                </li>
              )
            })

            }
          </ul>
        </div>

      </article>
    );
  }
}

export default MoveDetails;