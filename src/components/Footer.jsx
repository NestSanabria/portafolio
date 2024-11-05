// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  
  return (
    <Container fluid className="footer"> {/* Crea un contenedor que ocupa todo el ancho con la clase footer */}
      <Row> {/* Crea una fila para organizar el contenido */}
        <Col md="4" className="footer-copywright"> {/* Columna para el nombre con ancho md de 4 */}
          <h3>Néstor Sanabria</h3> {/* Título con el nombre del autor */}
        </Col>
        <Col md="4" className="footer-body"> {/* Columna para los iconos sociales con ancho md de 4 */}
          <ul className="footer-icons"> {/* Lista desordenada para los iconos sociales */}
            <li className="social-icons"> {/* Elemento de lista para el icono de GitHub */}
              <a
                href="https://github.com/NestSanabria" /* Enlace al perfil de GitHub */
                style={{ color: "white" }} /* Estilo en línea para el color del icono */
                target="_blank"  /* Abre el enlace en una nueva pestaña */
                rel="noopener noreferrer" /* Mejora de seguridad para evitar ataques de tipo reverse tabnabbing */
              >
                <AiFillGithub /> {/* Icono de GitHub */}
              </a>
            </li>
            <li className="social-icons"> {/* Elemento de lista para el icono de LinkedIn */}
              <a
                href="https://www.linkedin.com/in/néstor-alonso-sanabria-chacón/" /* Enlace al perfil de LinkedIn */
                style={{ color: "white" }} /* Estilo en línea para el color del icono */
                target="_blank"  /* Abre el enlace en una nueva pestaña */
                rel="noopener noreferrer" /* Mejora de seguridad para evitar ataques de tipo reverse tabnabbing */
              >
                <FaLinkedinIn /> {/* Icono de LinkedIn */}
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
