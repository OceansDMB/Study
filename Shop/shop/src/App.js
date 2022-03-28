/* eslint-disable */

import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Carousel } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <br />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
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
      <Carousel className="background">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPP5letp-8ItRXn7RCN12nN3bjh3RsTiN8TA&usqp=CAU"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>20% Season OFF</h3>
            <p>Always sold at a discounted price.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.shutterstock.com/image-photo/software-developer-programming-code-abstract-600w-577183882.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>20% Season OFF</h3>
            <p>Always sold at a discounted price.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.shutterstock.com/image-photo/javascript-text-toddler-girl-using-600w-1011796354.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>20% Season OFF</h3>
            <p>Always sold at a discounted price.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container">
        <div className="row">
          {
            shoes.map((a,i)=>{
              return <Card shoes={shoes[i]} i={i}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={'https://codingapple1.github.io/shop/shoes'+ (props.i + 1)+".jpg"}
        width="100%"
        alt="error occured"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
/* [props 전송법] 
  1.  <자식컴포넌트 보낼이름={전송할state}/>
  2.  function 자식컴포넌트(props){}
  3. props.보낼이름을 쓰면 됨.



  // [map] 반복문
  1. 자료.map(()=>{
  2.  return <Card~~~ /> (반복시킬 HTML)
  3. 반복하며 변해야 하는 숫자 체크
    // value.map((a.i)=>{
      //  a = value 안에 들어있는 하나하나의 안에 있는 데이터 의미
          i = 반복문이 돌 때마다 0,1,2 가 되는 정수부
    }) 
  })

  카톡에다가 대화형식으로 게임?
  대화로 선택창 만들기
  개인 블로그 react로 버젼 2개 관리하기
*/
