import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import "./Components/Navbar.css"; */
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/users" element={<Users />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
      </Routes>
    </>
  );
}

export default App;
