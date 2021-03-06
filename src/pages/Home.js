import React from "react";
import EscogerProyecto from "../forms/EscogerProyecto";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <EscogerProyecto />
            <h2>.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 my-5">
            <div className="card rounded-0">
              <div className="card-header head-card-bg">
                <h6 className="font-weight-bold mb-0">Fases</h6>
              </div>

              <div className="card-body mt-19 col-lg-12">
                {/* <Bar options={options} data={data} /> */}
              </div>
            </div>
          </div>

          <div className="col-lg-12 my-5">
            <div className="card rounded-0">
              <div className="card-header head-card-bg-rainbow">
                <h6 className="font-weight-bold mb-0">Proyectos</h6>
              </div>

              <div className="card-body mt-19 col-lg-12">
                {/* <Bar options={options} data={data} /> */}
              </div>
            </div>
          </div>

          <div className="col-lg-12 my-5">
            <div className="card rounded-0">
              <div className="card-header head-card-bg-rainbow">
                <h6 className="font-weight-bold mb-0">
                  Recopilacion de Usuarios
                </h6>
              </div>

              <div className="card-body mt-19 col-lg-12">
                {/* <Bar options={options} data={data} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
