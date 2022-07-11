import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <ul>
        <NavLink end to="/AllPokemon">Pokemon</NavLink>
        <NavLink end to="SearchPage">Search</NavLink>
      </ul>
    </>
  );
}

export default NavBar;