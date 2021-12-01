import React from "react";

const Sidebar = () => {
  return (
    <div id="sidebar-container" className="primary">
      <div className="logo">
        <h4 className="text-light font-weight-bold ">User Dashboard</h4>
      </div>
      <div className="menu primary">
        <a href="/" className="d-block p-3 text-light lead trans">
          <i class="icon ion-md-apps marge"></i>Tablero
        </a>
        <a href="/" className="d-block p-3 text-light lead trans">
          <i class="icon ion-md-people marge"></i>Usuarios
        </a>
        <a href="/" className="d-block p-3 text-light lead trans">
          <i class="icon ion-md-analytics marge"></i>Estadisticas
        </a>
        <a href="/" className="d-block p-3 text-light lead trans">
          <i class="icon ion-md-paper marge"></i>Perfil
        </a>
        <a href="/" className="d-block p-3 text-light lead trans">
          <i class="icon ion-md-construct marge"></i>Configuracion
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
