import React, { useState } from "react";
import CrearProyectoFormNuevoModal from "../components/CreateProyectoFromNuevoModal";
import ListaUsuarios from "../components/ListaUsuarios";
import { Button } from "react-bootstrap";

function Products() {
  const [modalProyectos, setModalProyectos] = useState(false);

  const open = () => {
    setModalProyectos(true);
  };
  const close = () => {
    setModalProyectos(false);
  };

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
          <Button variant="warning" onClick={open}>
            Crear nuevo proyecto
          </Button>
        </div>

        <div className="col-lg-12 col-md-12 pt-5">
          <div className="card rounded-0">
            <div className="card-header head-card-bg-rainbow">
              <h6 className="font-weight-bold mb-0">Proyects</h6>
            </div>
            {/* <Bar options={options} data={data} /> */}
            <ListaUsuarios />
          </div>
        </div>
      </div>
      <CrearProyectoFormNuevoModal open={modalProyectos} close={close} />
    </div>
  );
}

export default Products;
