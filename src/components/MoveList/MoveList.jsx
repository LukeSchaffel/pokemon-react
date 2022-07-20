import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Move from "../Move/Move";

const MoveList = ({ pokemon }) => {
  const [moveList, setMoveList] = useState([...pokemon.moves])
  const [firstFive, setFirstFive] = useState([...moveList.slice(0, 5)])
  const [smallList, setSmallList] = useState(true)
  const navigate = useNavigate()

  const toMoveDetails = (singleMove) => {
    navigate(`/move-details`, { state: { singleMove } })
  }

  return (
    <div className="move-div">
      <article className="move-list">
        <header>
          <h3>Move List</h3>
          <button className="gen-btn" onClick={() => { setSmallList(!smallList) }}>
            {smallList ? `Show ${moveList.length - firstFive.length} More` : "Show Less"}
          </button>
        </header>
        <div>
          {smallList ?
            <ul>
              {firstFive.map((move, i) => {
                return <Link
                  to={`/move-details`}
                  state={{
                    move: move
                  }}
                  key={i}
                >
                  <li ><Move currentMove={move} /></li>
                </Link>
              })}
            </ul> :
            <ul>
              {moveList.map((move, i) => {
                return <Link
                  to={`/move-details`}
                  state={{
                    move: move
                  }}
                  key={i}
                ><li >
                    <Move currentMove={move} />
                  </li>
                </Link>
              })}
            </ul>
          }
        </div>
      </article>
    </div>
  );
}

export default MoveList;