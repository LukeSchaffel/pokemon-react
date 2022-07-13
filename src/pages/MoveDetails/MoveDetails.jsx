import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getMoveInfo } from "../../components/services/poke-api";


const MoveDetails = () => {
  const location = useLocation()
  console.log(location);
  const URL = location.state.move.move.url
  const [move, setMove] = useState({})
  const [loading, setLoading] = useState(true)

  const getAndSetMoveInfo = async (URL) => {
    const newMoveInfo = await getMoveInfo(URL)
    setMove(newMoveInfo);
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
          <h1>{move.name}</h1>
        </header>

      </article>
    );
  }
}

export default MoveDetails;