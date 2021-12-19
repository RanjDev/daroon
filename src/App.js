import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TheNavbar from "./components/TheNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <TheNavbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
