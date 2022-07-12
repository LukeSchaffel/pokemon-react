import { useState } from "react";

const MoveList = ({ pokemon }) => {
  const [moveList, setMoveList] = useState([...pokemon.moves])
  const [firstFive, setFirstFive] = useState([...moveList.slice(0, 5)])
  const [smallList, setSmallList] = useState(true)


  return (
    <div className="move-div">
      <article className="move-list">
        <header>
          <h3>Move List</h3>
          <button className="gen-btn" onClick={() => { setSmallList(!smallList) }}>
            {smallList ? "Show More" : "Show Less"}
          </button>
        </header>
        <div>
          {smallList ?
            <ul>
              {firstFive.map((move, i) => {
                return <li key={i}>{move.move.name}</li>
              })}
            </ul> :
            <ul>
              {moveList.map((move, i) => {
                return <li key={i}>{move.move.name}</li>
              })}
            </ul>
          }
        </div>
      </article>
    </div>
  );
}

export default MoveList;