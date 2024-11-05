// src/components/public/About.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import myImg from "../../Assets/FotoPerfil.jpg";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  // Retorna el contenido del componente.
  return (
    <Container fluid className="about-section"> {/* Contenedor principal para la sección "Acerca de" */}
      <Particle /> {/* Renderiza el componente de partículas */}
      <Container> {/* Contenedor adicional para centrar el contenido */}
        {/* Sección de Introducción Personal */}
        <Row>
          <Col md={8} className="home-about-description"> {/* Columna para la descripción personal */}
            <h1 className="color-text" style={{ fontSize: "2.6em" }}> About Me</h1> {/* Título de la sección */}
            <div className="home-about-body"> {/* Contenedor para el cuerpo de la descripción */}
              <p>
                I am an Electronics Engineer graduated from the University of Pamplona, with a solid knowledge in industrial controls, instrumentation, and embedded systems. 
                I have skills in designing, implementing, and optimizing control systems for industrial processes, as well as programming PLCs and integrating automation systems.
              </p>

              <p>
                I have experience in web development, utilizing technologies such as Node.js and React, along with managing databases like MongoDB. This expertise allows me to approach IoT projects comprehensively, combining electronics with digital solutions.
              </p>
              
              <p>
                Moreover, I have a strong background in artificial intelligence, particularly in generative neural networks, which enhances my ability to create innovative solutions and optimize processes across various applications.
              </p>

              <p>
                I am a proactive person, focused on continuous improvement and innovation. My analytical thinking and problem-solving skills allow me to tackle complex challenges and find effective solutions.
              </p>
              <p>
                🌱 I am committed to professional ethics and sustainable development. My goal is to contribute to technological advancement and efficiency in industrial processes, always maintaining a constant learning attitude and a desire to drive growth in the industry.
              </p>
              <p>
                🔗 I am open to new collaboration and learning opportunities in the exciting world of electronic engineering and web development.
              </p>

              <br></br>
              <br></br>

              <Row style={{ marginTop: "20px" }}> {/* Fila para habilidades suaves y profesionales */}
                <Col md={6}> {/* Columna para habilidades suaves */}
                  <h3 className="color-text">📚 Soft Skills:</h3> {/* Título de habilidades suaves */}
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}> {/* Lista de habilidades suaves */}
                    <li>Teamwork</li>
                    <li>Effective Communication</li>
                    <li>Adaptability</li>
                    <li>Creativity</li>
                    <li>Leadership</li>
                    <li>Innovation</li>
                    <li>Autonomy</li>
                    <li>Continuous Learning</li>
                    <li>Time Management</li>
                    <li>Decision Making</li>
                    <li>Results Orientation</li>
                    <li>Negotiation</li>
                    <li>Conflict Resolution</li>
                    <li>Attention to Detail</li>
                    <li>Self-discipline</li>
                  </ul>
                </Col>
                
                <Col md={6}> {/* Columna para habilidades profesionales */}
                  <h3 className="color-text"><span style={{ color: "white", marginRight: "8px" }}>🛠</span>Professional Skills:</h3> {/* Título de habilidades profesionales */}
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}> {/* Lista de habilidades profesionales */}
                    <li>Industrial Automation</li>
                    <li>Power Electronics</li>
                    <li>Circuit Design</li>
                    <li>Control Systems</li>
                    <li>Industrial Communication Protocols</li>
                    <li>System Implementation</li>
                    <li>Predictive, Preventive, and Corrective Maintenance of Electronic Equipment</li>
                    <li>PLC Programming</li>
                    <li>HMI Systems Implementation</li>
                    <li>Control of Electric Motors (VFD, Servomotors)</li>
                    <li>Embedded Systems Development with Microcontrollers (PIC, Arduino, ESP32)</li>
                    <li>Signal Analysis and Digital Control Systems</li>
                    <li>Supervision and Control of Energy Systems (UPS, Inverters, Photovoltaic Systems)</li>
                    <li>Industrial Networks</li>
                    <li>Programming Languages: JavaScript, Python, CSS, HTML, C++</li>
                    <li>Web Design</li>
                    <li>Fullstack Programming</li>
                    <li>Databases: MongoDB</li>
                    <li>Technologies: React, Node.js</li>
                    <li>Artificial Intelligence</li>
                  </ul>
                </Col>
              </Row>
              <br></br>
              <br></br>
            </div>
          </Col>
          <Col md={4} className="myAvtar"> {/* Columna para la imagen de perfil */}
            <Tilt> {/* Aplica un efecto de inclinación a la imagen */}
              <img src={myImg} className="img-fluid" alt="avatar" /> {/* Imagen de perfil */}
            </Tilt>
          </Col>
        </Row>

        {/* Sección de Información Adicional */}
        <Row style={{ justifyContent: "center", padding: "10px" }}> {/* Fila centrada para información adicional */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard /> {/* Renderiza el componente de tarjeta de presentación */}
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img" /* Columna para la imagen relacionada */
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading"> {/* Título para herramientas utilizadas */}
          <strong className="color-text">Tools</strong> Used
        </h1>
        <Toolstack /> {/* Renderiza el componente que muestra las herramientas */}

        {/* Sección de Redes Sociales */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/néstor-alonso-sanabria-chacón/" /* Enlace a LinkedIn */
                  target="_blank" /* Abre el enlace en una nueva pestaña */
                  rel="noreferrer" /* Evita advertencias de seguridad */
                  className="icon-colour home-social-icons" /* Clases para estilo */
                >
                  <FaLinkedinIn /> {/* Icono de LinkedIn */}
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="color-text">contact</span> me {/* Texto de contacto */}
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
