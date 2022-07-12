import { useState } from "react";
import { useLocation } from "react-router-dom";
import PhotoGalery from "../../components/PhotoGalery/PhotoGalery";
import MoveList from "../../components/MoveList/MoveList";

const PokemonDetails = () => {
  const location = useLocation()
  const [pokemon, setPokemon] = useState(location.state.singlePokemon)
  

  return (
    <>
      <h1>{pokemon.name}</h1>
      <PhotoGalery pokemon={pokemon}/>
      <MoveList pokemon={pokemon} />
    </>
  );
}

export default PokemonDetails;