import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis trabajos <strong className="purple">más </strong> recientes
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="GALERÍA"
              description="Galería de fotos"
              ghLink="https://github.com/NestSanabria/gallery_project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Eventos - Hooks"
              description="Manejo de eventos"
              ghLink="https://github.com/NestSanabria/hooks-practices"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
