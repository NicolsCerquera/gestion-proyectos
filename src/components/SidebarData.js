import React from "react";
import {AiFillHome} from "react-icons/ai";
import {FiUsers}  from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome/>,
    cName: "nav-text",
  },
  {
    title: "Usuarios",
    path: "/users",
    icon: <FiUsers/>,
    cName: "nav-text",
  },
  {
    title: "Projectos",
    path: "/projects",
    icon: <AiFillProject/>,
    cName: "nav-text",
  },
  {
    title: "Actividades",
    path: "/activities",
    icon: <BsListTask/>,
    cName: "nav-text",
  },
  {
    title: "Reportes",
    path: "/support",
    icon: <HiDocumentReport/>,
    cName: "nav-text",
  },
];
