import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
function HeaderComponent() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "gray", color: "b" }}
    >
      <Container>
        <LinkContainer to={"/"}>
          <Navbar.Brand className="text-b">BEST ONLINE</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <InputGroup>
              <DropdownButton id="dropdown-basic-button" title="All">
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Cars</Dropdown.Item>
                <Dropdown.Item>Books</Dropdown.Item>
                <Dropdown.Item>Watch</Dropdown.Item>
              </DropdownButton>
              <Form.Control type="text" placeholder="Search in shop.." />
              <Button variant="warning">
                <i className="bi bi-search text-dark"></i>
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <LinkContainer to="/admin/order">
              <Nav.Link className="text-b">
                Admin
                <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger rounded-circle"></span>
              </Nav.Link>
            </LinkContainer>

            <NavDropdown
              style={{ color: "b" }}
              title="John Doe"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                eventKey={"/user/my-orders"}
                as={Link}
                to="/user/my-orders"
              >
                My Order's
              </NavDropdown.Item>
              <NavDropdown.Item eventKey={"/user"} as={Link} to="/user">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/login">
              <Nav.Link className="text-b">Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link className="text-b">Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link href="#pricing">
                <Badge pill bg="danger">
                  3
                </Badge>
                <i className="bi bi-cart-dash text-b"></i>
                <span className="ms-1 text-b">CART</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
