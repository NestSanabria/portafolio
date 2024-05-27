import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTAME PRESENTARME
            </h1>
            <p className="home-about-body">
            Soy estudiante de décimo semestre de ingeniería electrónica en la Universidad de Pamplona, apasionado por la innovación y la programación. Con formación sólida en circuitos electrónicos, sistemas de control y automatización, combinada con mi proactividad y capacidad para aprender rápidamente busco oportunidades laborales donde pueda aplicar y ampliar mis habilidades en un entorno profesional, contribuyendo al desarrollo de proyectos innovadores y creciendo profesionalmente.
              <br />
              <br />Tengo conocimientos en lenguajes como 
              <i>
                <b className="purple"> C++, Javascript y Python. </b>
              </i>
              <br />
              <br />
              Mis campos de interés son la construcción de nuevas &nbsp;
              <i>
                <b className="purple">Tecnologías y productos web. </b> 
              </i>
              <br />
              <br />
              Siempre que me es posible, aplico mi pasión por desarrollar productos con
               <i>
                <b className="purple"> React.js y Node.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              No dudes en <span className="purple">contactarte </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/NestSanabria"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nestor-alonso-sanabria-chacon-267080274/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
