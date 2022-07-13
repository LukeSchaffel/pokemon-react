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
    setPokemonList(newMoveInfo.learned_by_pokemon)
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
          <ul>
          {pokemonList.map((pokemon, i) => {
            const { name, url } = pokemon
            return (
            <li>
              <Link to='/pokemon-details'>
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