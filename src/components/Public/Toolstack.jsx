import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from "react-icons/di";
import { SiVisualstudiocode, SiGithub, SiBootstrap, SiXampp, SiMongodb, SiTensorflow } from 'react-icons/si';

function Toolstack() {
  // Retorna el contenido del componente Toolstack.
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}> {/* Crea una fila centrada con espacio en la parte inferior */}
      {/* Techstack Icons */} {/* Sección para los iconos de tecnologías */}
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de C++ */}
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de JavaScript */}
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de Node.js */}
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de React */}
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de MongoDB */}
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de Git */}
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de Python */}
        <DiPython />
      </Col>
      
      {/* Toolstack Icons */} {/* Sección para los iconos de herramientas */}
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de Visual Studio Code */}
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de GitHub */}
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de Bootstrap */}
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de XAMPP */}
        <SiXampp /> {/* Icono de XAMPP */}
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de MongoDB Compass */}
        <SiMongodb /> {/* Icono de Compass */}
      </Col>
      <Col xs={4} md={2} className="tech-icons"> {/* Columna para el icono de TensorFlow */}
        <SiTensorflow /> {/* Icono de TensorFlow */}
      </Col>
    </Row>
  );
}

export default Toolstack;
