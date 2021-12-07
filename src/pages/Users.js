import React from "react";
import ListaUsuarios from "../components/ListaUsuarios";

function Users() {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col-md-4 col-lg-4">
          <h2>Create new user</h2>
        </div>
        <div className="col-md-8 col-lg-8 d-flex justify-content-end">
          <button className="btn btn-info rounded-pill me-3">
            search user
          </button>
          <button className="btn btn-success rounded-pill">
            Create new user
          </button>
        </div>

        <div className="col-lg-12 col-md-12 pt-5">
          <div className="card rounded-0">
            <div className="card-header head-card-bg-rainbow">
              <h6 className="font-weight-bold mb-0">
                Recopilacion de Usuarios
              </h6>
            </div>

            <div className="card-body mt-19 col-lg-12">
              {/* <Bar options={options} data={data} /> */}
              <ListaUsuarios />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
