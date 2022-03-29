import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Button, Row, Col } from 'react-bootstrap'
import UserProfile from "../../Img/user-profile.png"
import IconArrowDown from "../../Img/icon-arrow-down.png"
import Logo from "../../Img/logo.png"
import IconBurger from "../../Img/icon-burger.png"

export const NavbarDefault = () => {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home"><img src={Logo} className="me-5" /></Navbar.Brand>
          <img src={IconBurger} />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            <Form className="d-flex ms-auto">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
            <div className="d-flex align-items-center ms-md-3">
              <div className="ps-md-1 pe-md-1"><img src={UserProfile} /></div>
              <div className="ps-md-1 pe-md-1">Unis Badri</div>
              <div className="ps-md-1 pe-md-1"><img src={IconArrowDown} /></div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
