import React from "react";
import CrearFasesForm from "../components/CrearFasesForm";
/* import CrearProyectoForm from "../components/CrearProyectoForm"; */
import ListaUsuarios from "../components/ListaUsuarios";

function Fases() {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-4 col-lg-4">
          <h2>Crear nueva fase</h2>
        </div>
        <div className="col-md-8 col-lg-8 d-flex justify-content-end">
          <button className="btn btn-info rounded-pill me-3">
            search proyect
          </button>
          <CrearFasesForm />
        </div>

        <div className="col-lg-12 col-md-12 pt-5">
          {/* <Bar options={options} data={data} /> */}
          <ListaUsuarios />
        </div>
      </div>
    </div>
  );
}

export default Fases;
