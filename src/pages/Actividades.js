import React from "react";
import ListaActividades from "../components/ListaActividades";

function Actividades() {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-4 col-lg-4">
          <h2>Actividades</h2>
        </div>
        <div className="col-md-8 col-lg-8 d-flex justify-content-end">
          <button className="btn btn-info rounded-pill me-3">
            search user
          </button>
        </div>

        <div className="col-lg-12 col-md-12 pt-5">
          <ListaActividades />
        </div>
      </div>
    </div>
  );
}

export default Actividades;
