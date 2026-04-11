import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";   // 👈 ADD THIS

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* ✅ MAIN PAGE (SCROLL WEBSITE) */}
        <Route path="/" element={<Home />} />

        {/* ✅ REDIRECT ROUTES → SCROLL SECTIONS */}
        <Route path="/about" element={<Navigate to="/#about" />} />
        <Route path="/skills" element={<Navigate to="/#skills" />} />
        <Route path="/projects" element={<Navigate to="/#projects" />} />
        <Route path="/contact" element={<Navigate to="/#contact" />} />
      </Routes>

      <Footer /> {/* 👈 YEH SABSE IMPORTANT */}
    </>
  );
}

export default App;