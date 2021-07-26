import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Container, Button } from 'react-bootstrap';
import { BrowserRouter, Link, Switch} from 'react-router-dom';




export default class AddClient extends React.Component{

    constructor(props) {
        super(props);
        this.state = { 
            name: '',  
            email: '',  
            phone: '', 
            password: '', 
        };
    }

    formChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;

        this.setState({[nam]: val});
    }

    addClient = (event) => {
        console.log(this.state.name);

        let clients = [];

        clients = JSON.parse(localStorage.getItem("clients"));

        clients.push({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
        });
        alert("teste", this.state.name );

        console.log(clients);

        localStorage.setItem(
            'clients', 
            JSON.stringify(clients)
        );
    }


    render(){
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
                    <h1>Adiciona Cliente</h1>
                    <Form onSubmit={this.addClient}>
        
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text"  name="name" onChange={this.formChange}  placeholder="Maria das Graças" />
                        </Form.Group>
        
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"  name="email" onChange={this.formChange} placeholder="maria@teste.com" />
                        </Form.Group>
        
                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="phone" name="phone" onChange={this.formChange} placeholder="82999999999" />
                        </Form.Group>
        
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={this.formChange} placeholder="Password" />
                        </Form.Group>
        
                        <Button variant="primary" onClick={this.addClient}>
                            Submit
                        </Button>
                        </Form>
                </Container>
                
            </>
           )
    }
   
}
