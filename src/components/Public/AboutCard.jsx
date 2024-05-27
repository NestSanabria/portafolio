import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos! Yo soy <span className="purple">Néstor Sanabria </span>
            de <span className="purple"> Villavicencio, Colombia</span>
            <br />
            Actualmente busco trabajo como programador fullstack
            <br />
            Tengo un título profesional en ingeniería electrónica y me encuentro cursando un Bootcamp de TalentoTech en programación fullstack
            <br />
            <br />
            Además de codificar, ¡hay otras actividades que me encanta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Escuchar música
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar y conocer lugares
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Sé el cambio que quieres ver en el mundo"{" "}
          </p>
          <footer className="blockquote-footer">Mahatma Gandhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
