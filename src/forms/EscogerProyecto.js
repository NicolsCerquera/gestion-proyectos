import React from "react";

function EscogerProyecto() {
  function consultar() {
    fetch("http://localhost:3000/proyectos/consultar").then();
  }
  return (
    <>
      <form action="">
        <select name="idioma" required>
          <option value="" selected>
            Elige una opcion
          </option>
          <option value="en">Ingles</option>
          <option value="fr">Frances</option>
          <option value="it">Italiano</option>
          <option value="pt">portugues</option>
          <option value="es">Español</option>
        </select>
      </form>
    </>
  );
}

export default EscogerProyecto;
