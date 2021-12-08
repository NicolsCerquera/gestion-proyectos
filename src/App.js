import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import "./Components/Navbar.css"; */
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Users from "./pages/Users";
import CrearProyectoForm from "./components/CrearProyectoForm";
import Fases from "./pages/Fases";
import Actividades from "./pages/Actividades";
/* import Login from "./components/Login.js"; */

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/users" element={<Users />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/fases" element={<Fases />}></Route>
        <Route exact path="/actividades" element={<Actividades />}></Route>
      </Routes>
    </>
  );
}

export default App;
