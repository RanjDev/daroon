import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TheNavbar from "./components/TheNavbar";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";

function App() {
  return (
    <div>
      <TheNavbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experiences />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
    </div>
  );
}

export default App;
