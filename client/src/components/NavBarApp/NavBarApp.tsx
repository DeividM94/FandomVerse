import { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBarApp.scss";
import { Link } from "react-router-dom";

export const NavBarApp: FC = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container fluid>
        <span className="link">
          <Link to="/">
            <img src="./FandonVerse.png" alt="fandonVerse" className="fandonverse-logo" />
          </Link>
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/harry-potter">
              <img
                src="./harry-potter-logo.png"
                alt="harry-potter-logo"
                className="hp-logo"
              />
            </Link>
            <Link to="/stranger-things">
              <img
                src="./st-logo.png"
                alt="stranger-things-logo"
                className="st-logo"
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
