import React from "react";
import CrearProyectoForm from "../components/CrearProyectoForm";
import ListaUsuarios from "../components/ListaUsuarios";

function Products() {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-4 col-lg-4">
          <h2>Create new proyect</h2>
        </div>
        <div className="col-md-8 col-lg-8 d-flex justify-content-end">
          <button className="btn btn-info rounded-pill me-3">
            search proyect
          </button>
          <CrearProyectoForm />
        </div>

        <div className="col-lg-12 col-md-12 pt-5">
          {/* <Bar options={options} data={data} /> */}
          <ListaUsuarios />
        </div>
      </div>
    </div>
  );
}

export default Products;
