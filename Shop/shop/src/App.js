import React from 'react';
import logo from './logo.svg';
import { Navbar,Container,Nav,NavDropdown,Carousel } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
<br />
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Coder2Programmer</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Carousel className='background'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPP5letp-8ItRXn7RCN12nN3bjh3RsTiN8TA&usqp=CAU'
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/software-developer-programming-code-abstract-600w-577183882.jpg"
      alt="Second slide"
      
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/javascript-text-toddler-girl-using-600w-1011796354.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
          <h4>contents</h4>
          <p>description&price</p>
        </div>
        <div className='col-md-4'>
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"/>
          <h4>contents</h4>
          <p>description&price</p>
        </div>
        <div className='col-md-4'>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%"/>
          <h4>contents</h4>
          <p>description&price</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
