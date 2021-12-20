import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TheNavbar from "./components/TheNavbar";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";

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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
