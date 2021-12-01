import React from "react";
import img1 from "../assets/totalJuegos.jpg";
import img2 from "../assets/Ubisoft-Logo.png";

const CuadroInicio = () => {
  return (
    /* <section className="container-fluid"> */
    <div className="container-fluid fondo-mitad">
      <div className="row">
        <div className="back-cuadro">
          <div className="col-lg-12  col-sm-12 col-md-12 col-xs-12 d-flex align-items-center my-4">
            <img src={img2} alt="" className="ubisoft-block mx-auto" />
          </div>

          {/* <div className="row">
              <div className="col-lg-3 col-mb-6 d-flex stat my-3">
                <div className="mx-auto">
                  <h6 className="text-muted">Ingresos mensuales </h6>
                  <h3 className="font-weight-bold">$ 50.000</h3>
                  <h6 className="text-success">
                    <i class="icon ion-md-arrow-dropup-circle"></i>50.06%
                  </h6>
                </div>
              </div>
              <div className="col-lg-3 col-mb-6 d-flex stat my-3">
                <div className="mx-auto">
                  <h6 className="text-muted">Ingresos mensuales </h6>
                  <h3 className="font-weight-bold">$ 50.000</h3>
                  <h6 className="text-success">
                    <i class="icon ion-md-arrow-dropup-circle"></i>50.06%
                  </h6>
                </div>
              </div>
              <div className="col-lg-3 col-mb-6 d-flex stat my-3">
                <div className="mx-auto">
                  <h6 className="text-muted">Ingresos mensuales </h6>
                  <h3 className="font-weight-bold">$ 50.000</h3>
                  <h6 className="text-success">
                    <i class="icon ion-md-arrow-dropup-circle"></i>50.06%
                  </h6>
                </div>
              </div>
              <div className="col-lg-3 col-mb-6 d-flex my-3">
                <div className="mx-auto">
                  <h6 className="text-muted">Ingresos mensuales </h6>
                  <h3 className="font-weight-bold">$ 50.000</h3>
                  <h6 className="text-success">
                    <i class="icon ion-md-arrow-dropup-circle"></i>50.06%
                  </h6>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </div>
    /* </section> */
  );
};

export default CuadroInicio;

/* <section className="fondo-mitad">
      <div className="container">
        <div className="card rounded-pill border-light">
          <div className="card-body back-cuadro">
            <div className="col-lg-12  col-sm-12 col-md-12 col-xs-12 d-flex align-items-center">
              <h1 className="mx-auto my-auto">
                <img src={img2} alt="" className="ubisoft-block" />
              </h1>
            </div> */
