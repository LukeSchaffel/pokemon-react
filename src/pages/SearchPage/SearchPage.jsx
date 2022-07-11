import { useState, useEffect } from "react";
import { getPokemonInfo } from "../../components/services/poke-api";
import PokemonCard from "../../components/PokemonCard/PokemonCard";

const SearchPage = (props) => {
  const [currentPokemon, setCurrentPokemon] = useState({})

  const handleGetPokemonInfo = formData => {
    getPokemonInfo(formData)
      .then(newPokemon => setCurrentPokemon(newPokemon))

  }
  const [formData, setFormData] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setFormData(e.target.value)

  }

  const handleSubmit = e => {
    e.preventDefault()
    handleGetPokemonInfo(formData)


  }

  console.log(currentPokemon)


  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            autoComplete="off"
            value={formData.query}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>

        <div>
          <PokemonCard pokemon={currentPokemon}/>

        </div>
      </section>

    </>

  );
}

export default SearchPage;