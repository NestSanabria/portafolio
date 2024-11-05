// src/components/Home.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";

// Define el componente funcional Home.
function Home() {
  // Retorna el contenido del componente.
  return (
    <section>
      {/* Contenedor principal para la sección de inicio */}
      <Container fluid className="home-section" id="home">
        {/* Llama al componente Particle para el fondo */}
        <Particle />
        {/* Contenedor para el contenido de la sección de inicio */}
        <Container className="home-content">
          {/* Fila para organizar los elementos en columnas */}
          <Row>
            {/* Columna para el texto y la presentación personal */}
            <Col md={7} className="home-header">
              {/* Encabezado de saludo */}
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello!{" "}
                {/* Emoji de saludo */}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              {/* Encabezado con el nombre del usuario */}
              <h1 className="heading-name">
                I am
                <strong className="main-name"> NÉSTOR SANABRIA</strong>
              </h1>

              {/* Descripción profesional */}
              <p style={{ fontSize: "1.2em" }}>
                🔧 Electronic Engineer focused on:
                <br />
                {/* Detalles sobre el enfoque profesional */}
                <p>Control and Industrial Instrumentation, Automation, Embedded Systems, Internet of Things (IoT), and Web Development.</p>
              </p>

              {/* Contenedor para el componente Type que muestra habilidades */}
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            {/* Columna para la imagen o ilustración */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo} // Fuente de la imagen
                alt="Illustration of Néstor Sanabria" // Texto alternativo para la imagen (accesibilidad)
                className="img-fluid" // Clase de Bootstrap para que la imagen sea responsiva
                style={{ maxHeight: "450px" }} // Establece una altura máxima para la imagen
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
