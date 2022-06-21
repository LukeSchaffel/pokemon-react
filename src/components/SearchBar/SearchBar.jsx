import { useState } from "react"

const SearchBar = (props) => {
  const [formData, setFormData] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setFormData(e.target.value)

  }

  const handleSubmit = e => {
    e.preventDefault()
    props.handleGetPokemonInfo(formData)


  }

  return ( 
    
    <>
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
    </>

   );
}
 
export default SearchBar;