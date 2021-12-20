import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import TheNavbar from "./components/TheNavbar";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Doctors from "./pages/Doctors";
import AppointmentPage from "./pages/AppointmentPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <TheNavbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experiences />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/appointment/:id" element={<AppointmentPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
<<<<<<< HEAD
        <Route path="/profile/:id" element={<UserProfile />}></Route>
=======
        <Route path="/profile" element={<UserProfile />}></Route>
>>>>>>> a88f8ebdf561272c16b4b358edd798b96118939c
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
