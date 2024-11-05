import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    // Renderiza el componente Particles.
    <Particles
      id="tsparticles" // Asigna un ID único al componente para su identificación.
      params={{
        particles: {
          number: {
            value: 160, // Número total de partículas.
            density: {
              enable: true, // Habilita la densidad de partículas.
              value_area: 1500, // Área de densidad para el cálculo.
            },
          },
          line_linked: {
            enable: false, // Desactiva las líneas que conectan las partículas.
            opacity: 0.03, // Opacidad de las líneas (si estuvieran habilitadas).
          },
          move: {
            direction: "right", // Dirección del movimiento de las partículas.
            speed: 0.05, // Velocidad del movimiento de las partículas.
          },
          size: {
            value: 1, // Tamaño de las partículas.
          },
          opacity: {
            anim: {
              enable: true, // Habilita la animación de opacidad.
              speed: 1, // Velocidad de la animación de opacidad.
              opacity_min: 0.05, // Opacidad mínima durante la animación.
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true, // Habilita la interactividad al hacer clic.
              mode: "push", // Modo de interactividad (agregar partículas).
            },
          },
          modes: {
            push: {
              particles_nb: 1, // Número de partículas a agregar al hacer clic.
            },
          },
        },
        retina_detect: true, // Detecta y ajusta la visualización para pantallas Retina.
      }}
    />
  );
}

export default Particle;
