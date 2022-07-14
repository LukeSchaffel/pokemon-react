import { Link, NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';



const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className='nav' >
        <Container >
          <Navbar.Brand href="/" style={{ color: 'white' }}>
            <img style={{ width: '10rem' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="/" style={{ color: 'white' }}>Pokemon List</Nav.Link>

              <Nav.Link href="/search" style={{ color: 'white' }}>Search For Pokemon</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;