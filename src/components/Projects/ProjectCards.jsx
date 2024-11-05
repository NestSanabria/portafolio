// src/components/Projects/ProjectCards.jsx
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

// Define el componente funcional ProjectCards que recibe props.
function ProjectCards(props) {
  // Retorna el contenido del componente.
  return (
    <Card className="project-card-view"> {/* Crea una tarjeta de proyecto */}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" /> {/* Imagen del proyecto */}
      <Card.Body> {/* Cuerpo de la tarjeta */}
        <Card.Title>{props.title}</Card.Title> {/* Título del proyecto */}
        <Card.Text style={{ textAlign: "justify" }}> {/* Texto descriptivo del proyecto */}
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank"> {/* Botón para el enlace de GitHub */}
          <BsGithub /> &nbsp; GitHub {/* Icono de GitHub seguido de texto */}
        </Button>


        {/* Botón para el enlace de demostración, solo se muestra si demoLink está presente */}
        {props.demoLink && (
          <Button
            variant="primary" /* Estilo del botón */
            href={props.demoLink} /* Enlace a la demostración del proyecto */
            target="_blank" /* Abre el enlace en una nueva pestaña */
            style={{ marginLeft: "10px" }} /* Margen a la izquierda para separar del botón anterior */
          >
            <CgWebsite /> &nbsp; Demo {/* Icono de sitio web seguido de texto */}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
