import React from "react";

const Titulo = () => {
  return (
    <section className="py-3 px-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <h1 className="font-weight-bold mb-0">Welcome</h1>
            <p className="lead text-muted">
              Development department of Ubisoft.cor
            </p>
          </div>
          <div className="col-lg-3 d-flex">
            <button className="boton-primary w-100 align-self-center">
              Download reports
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Titulo;
