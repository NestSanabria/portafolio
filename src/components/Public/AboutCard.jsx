// src/components/public/AboutCard.jsx
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  // Retorna el contenido del componente AboutCard.
  return (
    <Card className="quote-card-view"> {/* Crea una tarjeta con una clase específica */}
      <Card.Body> {/* Contenido principal de la tarjeta */}
        <blockquote className="blockquote mb-0"> {/* Contenedor para una cita */}
          <p style={{ textAlign: "justify" }}> {/* Párrafo justificado */}
            In addition to coding, I enjoy various activities that fill me with energy and creativity:
          </p>
          <ul aria-label="Activities I enjoy"> {/* Lista de actividades que disfruta */}
            <li className="about-activity"> {/* Elemento de lista para una actividad */}
              <ImPointRight /> Play video games {/* Icono seguido de texto */}
            </li>
            <li className="about-activity"> {/* Elemento de lista para otra actividad */}
              <ImPointRight /> Listen to music {/* Icono seguido de texto */}
            </li>
            <li className="about-activity"> {/* Elemento de lista para otra actividad */}
              <ImPointRight /> Travel and exploring new places {/* Icono seguido de texto */}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}> {/* Cita con estilo personalizado */}
            "Be the change you wish to see in the world."
          </p>
          <footer className="blockquote-footer">Mahatma Gandhi</footer> {/* Autor de la cita */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
