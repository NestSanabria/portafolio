import React, { useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  // Define dos estados: uno para controlar si la barra está expandida y otro para el color de la barra.
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // Función para manejar el scroll y actualizar el estado del color de la barra de navegación.
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true); // Cambia el color si se ha desplazado 20px hacia abajo.
    } else {
      updateNavbar(false); // Restaura el color original al desplazarse hacia arriba.
    }
  }

  // Añade un evento de escucha para el scroll en la ventana.
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand} // Prop para controlar la expansión de la barra.
      fixed="top" // Fija la barra en la parte superior de la pantalla.
      expand="md" // Expande la barra en dispositivos medianos y más grandes.
      className={navColour ? "sticky" : "navbar"} // Cambia la clase según el estado del color.
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex"> {/* Enlace al inicio con el logo */}
          <img src={logo} className="img-fluid logo" alt="brand" /> {/* Logo de la aplicación */}
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav" // Control de accesibilidad para el toggle.
          onClick={() => {updateExpanded(expand ? false : "expanded"); }} // Cambia el estado de expansión al hacer clic.
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav"> {/* Sección que colapsa en móviles */}
          <Nav className="ms-auto" defaultActiveKey="#home"> {/* Navegación de enlaces */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home {/* Enlace a Home */}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About Me {/* Enlace a About */}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }} />{" "} Projects {/* Enlace a Projects */}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume {/* Enlace a Resume */}
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
