import React from "react";
import logo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavBar(props) {
  const handleClick = () => {
    const cart = document.getElementById("cart");
    if (cart.className == "cartInactive") {
      cart.className = "cartActive";
      document.getElementById("main").className = "mainHidden";
    } else {
      document.getElementById("main").className = "main";
      cart.className = "cartInactive";
    }
  };
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown
                title="DERVINSA"
                id="basic-nav-dropdown"
                key="end"
                drop="end"
                variant="secondary"
              >
                <NavDropdown.Item href="#action/3.1">
                  Ácido Tartárico
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Cremor Tártaro
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Ácido Metatártico
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Alcohol Vínico
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Aguardiente de Vino
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Aguardiente de Orujo
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="VINOLAB"
                id="basic-nav-dropdown"
                key="end"
                drop="end"
                variant="secondary"
              >
                <NavDropdown.Item href="#action/2.1">
                  Nutrientes Corteza de Levadura
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/2.2">
                  Nutrientes Levadura Seca Inactiva
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/2.3">
                  Levaduras Saccharomyces cerevisiae
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/2.4">
                  Levaduras Saccharomyces bayanus
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/2.5">
                  Maderas Stavin
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/2.6">
                  Levaduras Pinnacle
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="FRUTO DE LA VIÑA"
                id="basic-nav-dropdown"
                key="end"
                drop="end"
                variant="secondary"
              >
                <NavDropdown.Item href="#action/3.1">
                  Compost - Abono
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Compost - Sustrato
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Aceite de Uva Refinado
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Aceite de Uva Crudo
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Pepitas de Uva
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Alcohol en Gel
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                  Fertilizante Líquido Natural
                </NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <Nav.Link href="#link">CONTACTO</Nav.Link>
            <Nav.Link
              href="#link"
              className="logo-carrito"
              onClick={handleClick}
            >
              {props.conCart === false ? (
                <FontAwesomeIcon icon={faShoppingCart} className="vacio" />
              ) : (
                <FontAwesomeIcon icon={faCartArrowDown} className="lleno" />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
