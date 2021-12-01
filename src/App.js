import React from "react";
/* import imga from "./assets/unnamed.jpg" */
/* import imga2 from "./assets/usuario.jpeg"; */
/* import Tabla from "./components/Tabla.js" */

import Cuerpo from "./components/Cuerpo";
import NavSuperior from "./components/NavSuperior";
import Titulo from "./components/Titulo.js";
import CuadroInicio from "./components/CuadroInicio.js";

import Sidebar from "./components/Sidebar";
import CuerpoCaja2 from "./components/CuerpoCaja2";
import CuerpoCaja3 from "./components/CuerpoCaja3";

/* import MernVid from "./components/MernVid"; */

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="w-100">
        <NavSuperior />
        <div id="content">
          <Titulo />
          <CuadroInicio />
          <section className="fondo-gris">
            <Cuerpo />
            <CuerpoCaja2 />
            <CuerpoCaja3 />
          </section>
        </div>
      </div>
    </div>

    /* <MernVid /> */
  );
}

/* <div className="container">
      <div className="row ">
        <nav className="navbar fixed-top navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              Ubisoft<img src={imga} alt="/" width="50" height="40" className=""/>
            </a>
          </div>
        </nav>
      </div>
    </div> */

export default App;
