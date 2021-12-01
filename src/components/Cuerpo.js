import React from "react";
import { options, data } from "../components/Chartex.js";
/* import { Bar } from "react-chartjs-2"; */

const Cuerpo = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 my-5">
          <div className="card rounded-0">
            <div className="card-header head-card-bg">
              <h6 className="font-weight-bold mb-0"></h6>
            </div>

            <div className="card-body mt-19 col-lg-12">
              <table className="col-lg-12 table">
                <thead className="table-dark">
                  <tr>
                    <th className="col">Proyectos</th>
                    <th className="col">Descripcion</th>
                    <th className="col">fecha Inicio / Fin</th>
                    <th className="col">Funcionalidades</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Assasin's Creed</th>
                    <td>
                      El subalterno encargado debera diseñar los barcos y el
                      sistema de navegacion de el mismo, para la fase final
                      debera hacer que los barcos disparen.
                    </td>
                    <td>20/12/2021 20/3/2022</td>
                    <td>Iniciar Finalizar</td>
                  </tr>
                  <tr>
                    <th>Watch dogs</th>
                    <td>
                      El subalterno debera crear los autos de el juego con sus
                      diferentes tipos y un sistema de conduccion ideal para
                      carreras
                    </td>
                    <td>20/12/2021 20/3/2022</td>
                    <td>Iniciar Finalizar</td>
                  </tr>
                  <tr>
                    <th>Ranbow Six</th>
                    <td>
                      El subalterno debera agregar el sistema de luchas para que
                      los avatares obtengan una animacion de asesinatos.
                    </td>
                    <td>20/12/2021 20/3/2022</td>
                    <td>Iniciar Finalizar</td>
                  </tr>
                </tbody>
              </table>
              {/* <Bar options={options} data={data} /> */}
            </div>
          </div>
        </div>

        {/* <div className="col-lg-4 my-3">
            <div className="card rounded-0">
              <div className="card-header bg-light light">
                <h6 className="font-weight-bold mb-0">hola</h6>
              </div>
              <div className="card-body pt-2">
                <div className="d-flex border-bottom py-2">
                  <div className="d-flex me-3">
                    <h2 className="align-self-center mb-0">
                      <i class="icon ion-md-pricetag"></i>
                    </h2>
                  </div>
                  <div className="align-self-center">
                    <h6 className="d-inline-block mb-0">$250</h6>
                    <span className="badge bg-success ms-2">10% descuento</span>
                    <small className="d-block text-muted">
                      Curso diseño web
                    </small>
                  </div>
                </div>

                <div className="d-flex border-bottom py-2">
                  <div className="d-flex me-3">
                    <h2 className="align-self-center mb-0">
                      <i class="icon ion-md-pricetag"></i>
                    </h2>
                  </div>
                  <div className="align-self-center">
                    <h6 className="d-inline-block mb-0">$250</h6>
                    <span className="badge bg-success ms-2">10% descuento</span>
                    <small className="d-block text-muted">
                      Curso diseño web
                    </small>
                  </div>
                </div>

                <div className="d-flex border-bottom py-2">
                  <div className="d-flex me-3">
                    <h2 className="align-self-center mb-0">
                      <i class="icon ion-md-pricetag"></i>
                    </h2>
                  </div>
                  <div className="align-self-center">
                    <h6 className="d-inline-block mb-0">$250</h6>
                    <span className="badge bg-success ms-2">10% descuento</span>
                    <small className="d-block text-muted">
                      Curso diseño web
                    </small>
                  </div>
                </div>

                <div className="d-flex border-bottom py-2">
                  <div className="d-flex me-3">
                    <h2 className="align-self-center mb-0">
                      <i class="icon ion-md-pricetag"></i>
                    </h2>
                  </div>
                  <div className="align-self-center">
                    <h6 className="d-inline-block mb-0">$250</h6>
                    <span className="badge bg-success ms-2">10% descuento</span>
                    <small className="d-block text-muted">
                      Curso diseño web
                    </small>
                  </div>
                </div>

                <div className="d-flex border-bottom py-2 mb-3">
                  <div className="d-flex me-3">
                    <h2 className="align-self-center mb-0">
                      <i class="icon ion-md-pricetag"></i>
                    </h2>
                  </div>
                  <div className="align-self-center">
                    <h6 className="d-inline-block mb-0">$250</h6>
                    <span className="badge bg-success ms-2">10% descuento</span>
                    <small className="d-block text-muted">
                      Curso diseño web
                    </small>
                  </div>
                </div>

                <button className="btn btn-primary w-100">Ver todo</button>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default Cuerpo;
