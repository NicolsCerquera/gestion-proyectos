import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import "./Components/Navbar.css"; */
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Users from "./pages/Users";
import Login from "./components/Login.js";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
      </Routes>

      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/users" element={<Users />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
      </Routes>
    </>
  );
}

export default App;
