import React from "react";
import ReactDOM from "react-dom";
import "../src/assets/index2.css";
import App from "./App";
import * as bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
/* import { Doughnut } from 'react-chartjs-2'; */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
