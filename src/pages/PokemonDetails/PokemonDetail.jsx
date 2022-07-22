import { useState } from "react";
import { useLocation } from "react-router-dom";
import PhotoGalery from "../../components/PhotoGalery/PhotoGalery";
import MoveList from "../../components/MoveList/MoveList";
import EncounterLocations from "../../components/EncounterLocations/EncounterLocations";

const PokemonDetails = ({ loading, setLoading }) => {
  const location = useLocation()
  const [pokemon, setPokemon] = useState(location.state.singlePokemon)

  console.log(pokemon);
  return (
    <article className="info-div">
      <header>
        <h1>{pokemon.name}</h1>
        <h1># {pokemon.id}</h1>
      </header>
      <PhotoGalery
        pokemon={pokemon}
         />
      <MoveList pokemon={pokemon}
        loading={loading}
        setLoading={setLoading} />
      <EncounterLocations pokemon={pokemon}
        loading={loading}
        setLoading={setLoading} />
    </article>
  );
}

export default PokemonDetails;