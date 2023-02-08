import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  return (
    <>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            
            <img
              alt=""
              src="https://c8.alamy.com/comp/R985NJ/restaurant-logo-or-label-menu-food-service-symbol-vector-illustration-R985NJ.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bake With Us
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header