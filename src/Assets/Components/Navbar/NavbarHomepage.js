import React from 'react'
import './NavbarHomepage.css'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const NavbarHomepage = () => {
  return (
    <div>
        <Navbar bg="#F1F3FF" variant="light">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ms-auto g-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </div>
  )
}
