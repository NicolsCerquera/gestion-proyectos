import React from "react";
import imga2 from "../assets/usuario.jpeg";

const NavSuperior = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light lightbg border-bottom">
      <div className="container-fluid">
        <form className="d-flex position-relative d-inline-block">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search..."
            aria-label="Search..."
          />
          <button className="btn btn-search position-absolute" type="submit">
            <i class="icon ion-md-search"></i>
          </button>
        </form>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse col justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={imga2}
                  className="rounded-circle usuario-avatar"
                  alt="et"
                />
                Sergio Nicolas Cerquera Meneses
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Mi perfil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    suscripcion
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Cerrar sesion
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavSuperior;
