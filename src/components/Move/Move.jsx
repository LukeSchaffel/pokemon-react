import { useState } from "react";

const Move = ({ currentMove }) => {
  const [move, setMove] = useState(currentMove.move)


  return ( 
    <div className="move">
      <div className="grid-name">
        <h3>{move.name}</h3>
      </div>
    </div>
  );
}
 
export default Move;