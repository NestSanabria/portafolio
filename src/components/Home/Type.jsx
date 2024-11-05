// src/components/Home/Type.jsx
import React from "react";

// Define un array de objetos que contiene textos e iconos relacionados con las habilidades o roles.
const items = [
  { text: "Electronic Engineer", icon: "⚙️" }, // Objeto para Ingeniero Electrónico con su icono.
  { text: "FullStack Developer", icon: "👨‍💻" }, // Objeto para Desarrollador FullStack con su icono.
  { text: "Freelancer", icon: "💼" }, // Objeto para Freelancer con su icono.
];

// Define el componente funcional Type.
function Type() {
  // Retorna el contenido del componente.
  return (
    <div className="type-container"> {/* Contenedor principal para los elementos de tipo */}
      {/* Mapea sobre el array de items y genera un elemento para cada uno */}
      {items.map((item, index) => (
        <div className="type-item" key={index}> {/* Contenedor para cada item, utilizando el índice como clave */}
          <span className="type-icon">{item.icon}</span> {/* Muestra el icono asociado al item */}
          <h2 className="type-text">{item.text}</h2> {/* Muestra el texto asociado al item */}
        </div>
      ))}
    </div>
  );
}

export default Type;