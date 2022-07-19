import { useState } from "react";


const ListPokemon = ({ currentPokemon }) => {
  const [pokemon, setPokemon] = useState(currentPokemon)
  console.log(pokemon.sprites.front_default);

  return (
    <div className="learned-by-list">
      <img src={pokemon.sprites.front_default} alt="" />
      <div className="grid-name">
        <h3>{pokemon.name}</h3>
      </div>
      <div className="grid-number">
        <h3>{pokemon.id}</h3>
      </div>
    </div>
  );
}

export default ListPokemon;