import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // Desestructura pathname de la ubicación actual.
  const { pathname } = useLocation();
  
  // Hook useEffect que se ejecuta cada vez que cambia el pathname.
  useEffect(() => {
    // Desplaza la ventana a la parte superior (0,0) cada vez que el pathname cambia.
    window.scrollTo(0, 0);
  }, [pathname]); // Dependencia: se activa cuando pathname cambia.
  
  // Retorna null, ya que este componente no necesita renderizar nada.
  return null;
}

export default ScrollToTop;
