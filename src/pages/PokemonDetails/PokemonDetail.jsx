import { useState } from "react";
import { useLocation } from "react-router-dom";

const PokemonDetails = () => {
  const location = useLocation()
  const [pokemon, setPokemon] = useState(location.state.singlePokemon)
  

  console.log(pokemon);
  return (
    <>
      <h1>{pokemon.name}</h1>
    </>
  );
}

export default PokemonDetails;