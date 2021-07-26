import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Container, Button } from 'react-bootstrap';
import { BrowserRouter, Link, Switch} from 'react-router-dom';


function addProduct(){
   localStorage.setItem('products', []);
}


export default function AddProduct(){
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
                <NavDropdown.Item to="/">Consultar</NavDropdown.Item>
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
         <Container>
            <h1>Adiciona Produto</h1>
            <Form>

               <Form.Group className="mb-3" controlId="formNameProduct">
                  <Form.Label>Nome do Produto</Form.Label>
                  <Form.Control type="text" placeholder="Geladeira 32L" />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formNameBrand">
                  <Form.Label>Marca</Form.Label>
                  <Form.Control type="text" placeholder="Eletrolux" />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formPrice">
                  <Form.Label>Preço</Form.Label>
                  <Form.Control type="number" placeholder="1999.99" />
               </Form.Group>

               <Form.Group className="mb-3" controlId="formNome">
                  <Form.Label>Link da Imagem</Form.Label>
                  <Form.Control type="url" placeholder="https://teste/image.jpg" />
               </Form.Group>


                <Button variant="primary" type="submit">
                    Salvar
                </Button>
            </Form>
        </Container>
      </>
   )
}
