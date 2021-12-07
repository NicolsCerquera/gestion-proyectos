import React from "react";
import DoughnutChart from "../charts/DoughnutChart";

const ListaFases = () => {
  return (
    <>
      <div className="card rounded-0 ">
        <div className="card-header head-card-bg-rainbow ">
          <h6 className="font-weight-bold mb-0">Recopilacion de Usuarios</h6>
        </div>
        {/* <Bar options={options} data={data} /> */}
        {/* --------------------------------------------------------- */}
        <div className="card-group">
          <div className="card-body ">
            {/* <div className="card-title">Titulo</div> */}
            <DoughnutChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaFases;
