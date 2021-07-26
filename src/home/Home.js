import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter, Link, Switch} from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Admin Loja</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Cliente" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to="/AddClient">
                  Consulta r
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/AddClient">
                  Inserir
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Produto" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to="/AddProduct">
                  Consultar
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/AddProduct">Inserir</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Home;
