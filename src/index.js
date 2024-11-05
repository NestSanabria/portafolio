import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Importa la función para medir el rendimiento.
import reportWebVitals from './reportWebVitals';

// Crea el elemento raíz en el DOM donde se renderizará la aplicación.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro del modo estricto de React para detectar problemas potenciales.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si deseas comenzar a medir el rendimiento en tu aplicación, puedes pasar una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o enviar a un endpoint de análisis. Aprende más en: https://bit.ly/CRA-vitals
reportWebVitals();