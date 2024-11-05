import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBarApp.scss'; 
import { Link } from 'react-router-dom';

export const NavBarApp = () => {
  return (
    <Navbar className="custom-navbar" expand="lg"> 
      <Container fluid>
        <span className='link'><Link to="/">FandomVerse</Link></span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
