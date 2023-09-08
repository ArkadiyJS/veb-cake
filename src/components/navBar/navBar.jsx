import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(props) {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Все мои работы</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Торты</Nav.Link>
            <Nav.Link href="#features">Бенто торт</Nav.Link>
            <Nav.Link href="#pricing">Чизкейки</Nav.Link>
            <Nav.Link href="#pricing">Капкейки</Nav.Link>
            <Nav.Link href="#pricing">Пироженое</Nav.Link>
            <Nav.Link href="#pricing">Кэнди бар</Nav.Link>
            <Nav.Link href="#pricing">Как Закакзать?</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBar;