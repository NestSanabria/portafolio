// src/components/Projects/Projects.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";

// Define el componente funcional Projects que representa la sección de proyectos.
function Projects() {
  // Retorna el contenido del componente.
  return (
    <Container fluid className="project-section"> {/* Contenedor principal para la sección de proyectos */}
      <Particle /> {/* Renderiza el componente de partículas */}
      <Container> {/* Contenedor adicional para centrar el contenido */}
        <h1 className="project-heading"> {/* Título de la sección */}
          My <strong className="color-text">Completed Projects</strong> {/* Subtítulo destacado */}
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}> {/* Fila para las tarjetas de proyecto */}
          <Col md={6} className="project-card"> {/* Columna para la primera tarjeta, ocupando 6 de 12 espacios en pantallas medianas */}
            <ProjectCard
              imgPath={chatify} /* Ruta de la imagen del proyecto */
              title="Social Network" /* Título del proyecto */
              description={ /* Descripción detallada del proyecto, incluyendo características */
                <div>
                  <p>
                    A basic social networking project designed to facilitate user interaction and connection in an online social environment. Offers key features for managing user experiences:
                  </p>
                  <ul> {/* Lista de características del proyecto */}
                    <li><strong>User Registration and Authentication:</strong> New users can register and securely log in using JWT (JSON Web Tokens) for authentication.</li>
                    <li><strong>Follower Management:</strong> Users can follow others and be followed, creating a personalized network that encourages interaction.</li>
                    <li><strong>Post Creation:</strong> Users can create and share posts to engage with their network.</li>
                    <li><strong>Content Viewing:</strong> Users can explore posts from those they follow, staying updated on their friends' activities.</li>
                    <li><strong>Profile Update:</strong> Users have the ability to update their profile, including adding a profile picture for enhanced personalization.</li>
                    <li><strong>Responsive Design:</strong> The interface adapts to various screen sizes for an optimal user experience.</li>
                  </ul>
                </div>
              }
              ghLink="https://github.com/NestSanabria/social-network-frontend" /* Enlace al repositorio de GitHub */
              demoLink="https://social-network-frontend-one.vercel.app/" /* Enlace a la demostración del proyecto */
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}


export default Projects;
