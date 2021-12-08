import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import img2 from "../assets/ubilogo_h.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FFFFFF" }}>
        <nav className="navbar navbar-expand-lg bg-dark text-white">
          <div className="container-fluid">
            <div className="d-flex justify-content-start">
              <Link to="#" className="menu-bars navbar-brand">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={img2}
                alt=""
                style={{ width: "200px", height: "60px", marginRight: "570px" }}
              />

              {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
                </li>
              </ul> */}
            </div>
            {/* <div className="d-flex justify-content-end">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div> */}
          </div>
        </nav>

        <div id="sidebar-container">
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
