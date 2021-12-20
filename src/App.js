import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TheNavbar from "./components/TheNavbar";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Doctors from "./pages/Doctors";

function App() {
  return (
    <div className="flex flex-col justify-around">
      <TheNavbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experiences />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
