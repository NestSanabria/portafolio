import React from "react";

function Preloader(props) {
  // Retorna un div que actúa como un preloader.
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Preloader;
