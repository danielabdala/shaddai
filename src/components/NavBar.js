import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Test 1</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Test 2</Nav.Link>
            <Nav.Link href="#features">Test 3</Nav.Link>
            <Nav.Link href="#pricing">Test 4</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};

  export default NavBar;