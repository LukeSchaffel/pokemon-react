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
        {currentPokemon.name ?
          <PokemonCard pokemon={currentPokemon} />
          : <h2>Search by Name</h2>
        }

      </section>

    </>

  );
}

export default SearchPage;