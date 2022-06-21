import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getPokemonInfo } from "../../components/services/poke-api";


const SearchPage = (props) => {
  const [currentPokemon, setCurrentPokemon] = useState({})
  
  const handleGetPokemonInfo = formData => {
    getPokemonInfo(formData)
    .then(newPokemon => setCurrentPokemon(newPokemon))
    
  }



  return ( 
    <>
     <SearchBar 
      handleGetPokemonInfo={handleGetPokemonInfo}
     />
    <div>
      {currentPokemon.types.map(type => (
        <h1>
          {type.slot}
        </h1>
      ))}

    </div>


    </>

   );
}
 
export default SearchPage;