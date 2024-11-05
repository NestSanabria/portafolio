import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Preloader";
import Navbar from "./components/NavBar";
import Home from "./components/Home/Home";
import About from "./components/Public/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Documents/ResumeNew";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./Assets/css/about.css";
import "./Assets/css/footer.css";
import "./Assets/css/home.css";
import "./Assets/css/navbar.css";
import "./Assets/css/preloader.css";
import "./Assets/css/projects.css";
import "./Assets/css/resume.css";
import "./Assets/css/scrollbar.css";
import "./Assets/css/style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Estado para manejar la carga inicial.
  const [load, updateLoad] = useState(true);

  // useEffect para simular un tiempo de carga.
  useEffect(() => {
    const timer = setTimeout(() => {
      // Actualiza el estado para indicar que la carga ha finalizado.
      updateLoad(false);
    }, 1200); // Duración de la carga: 1200 ms.

    // Limpia el timer cuando el componente se desmonta.
    return () => clearTimeout(timer);
  }, []);

  // Renderiza el componente.
  return (
    // Envuelve toda la aplicación en el Router para habilitar el enrutamiento.
    <Router>
      {/* Muestra el preloader mientras load es true. */}
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* Renderiza la barra de navegación */}
        <Navbar />
        {/* Desplaza hacia arriba cuando la ruta cambia */}
        <ScrollToTop />
        {/* Define las rutas de la aplicación */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          {/* Redirige cualquier ruta no definida a la página de inicio */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* Renderiza el pie de página */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
