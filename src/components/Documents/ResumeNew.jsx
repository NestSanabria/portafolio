// src/components/Documents/ResumeNew.jsx
import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/../Assets/English_Nestor_Sanabria_CV.pdf";

// Define el componente funcional ResumeNew.
function ResumeNew() {
  // Retorna el contenido del componente.
  return (
    <div>
      {/* Contenedor principal para la sección del currículum */}
      <Container fluid className="resume-section">
        {/* Llama al componente Particle para el fondo */}
        <Particle />
        {/* Fila para centrar el botón de descarga */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* Botón para descargar el CV */}
          <Button
            variant="primary" // Estilo del botón (primario)
            href={pdf} // Enlace al PDF del CV
            target="_blank" // Abre el enlace en una nueva pestaña
            style={{ maxWidth: "250px" }} // Establece un ancho máximo para el botón
          >
            {/* Ícono de descarga */}
            <AiOutlineDownload />
            &nbsp;Download CV {/* Texto del botón */}
          </Button>
        </Row>
      </Container>

      {/* Contenedor para mostrar el CV en un iframe */}
      <Container fluid className="resume-section">
        <Row className="resume">
          {/* Iframe para incrustar el PDF del CV directamente en la página */}
          <iframe
            title="resume" // Proporciona un título para el iframe (accesibilidad)
            src={pdf} // Fuente del PDF que se mostrará
            width="100%" // Ancho completo del iframe
            height="800px" // Altura fija del iframe
            style={{ border: "none" }} // Sin borde en el iframe
          ></iframe>
        </Row>
      </Container>

      {/* Contenedor adicional para la sección del currículum */}
      <Container fluid className="resume-section">
        {/* Llama de nuevo al componente Particle para el fondo */}
        <Particle />
        {/* Fila para centrar el botón de descarga nuevamente */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* Botón para descargar el CV otra vez */}
          <Button
            variant="primary" // Estilo del botón (primario)
            href={pdf} // Enlace al PDF del CV
            target="_blank" // Abre el enlace en una nueva pestaña
            style={{ maxWidth: "250px" }} // Establece un ancho máximo para el botón
          >
            {/* Ícono de descarga */}
            <AiOutlineDownload />
            &nbsp;Download CV {/* Texto del botón */}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
