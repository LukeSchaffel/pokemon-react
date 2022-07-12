import { useState } from "react";
import { useLocation } from "react-router-dom";
import PhotoGalery from "../../components/PhotoGalery/PhotoGalery";
import MoveList from "../../components/MoveList/MoveList";
import EncounterLocations from "../../components/EncounterLocations/EncounterLocations";

const PokemonDetails = () => {
  const location = useLocation()
  const [pokemon, setPokemon] = useState(location.state.singlePokemon)


  return (
    <article className="info-div">
      <header>
        <h1>{pokemon.name}</h1>
        <h1># {pokemon.id}</h1>
      </header>

      <PhotoGalery pokemon={pokemon} />
      <MoveList pokemon={pokemon} />
      <EncounterLocations pokemon={pokemon} />
    </article>
  );
}

export default PokemonDetails;