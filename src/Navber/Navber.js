import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

const Navber = () => {
  return (
    <div>
      <Navbar fixed="top" className="navbar-color" expand="lg">
        <Container>
          <Navbar.Brand className="text-white " href="#">
            {" "}
            <img
              width="30"
              height="24"
              class="d-inline-block ms-2 align-text-top rounded-circle"
              src="https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg"
              alt=""
            />
            <span className="ms-2">JAPANESE FOODS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="text-white " href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="text-white ms-4" href="#action2">
                Products
              </Nav.Link>
              <Nav.Link className="text-white ms-4" href="#action2">
                Contact
              </Nav.Link>
              <Nav.Link className="text-white ms-4" href="#" disabled>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navber;
