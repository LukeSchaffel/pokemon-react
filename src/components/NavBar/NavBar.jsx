import {Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return ( 
    <>
      <NavLink end to = "/AllPokemon">Pokemon</NavLink>
      <NavLink end to = "SearchPage">Search</NavLink>
    </>
   );
}
 
export default NavBar;