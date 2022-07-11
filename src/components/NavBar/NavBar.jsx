import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <ul>
        <NavLink end to="/">Pokemon</NavLink>
        <NavLink end to="search">Search</NavLink>
        <NavLink end to='/pokemon-details'>Details</NavLink>
      </ul>
    </>
  );
}

export default NavBar;