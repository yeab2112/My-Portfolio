import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Nave";
import Footer from "./component/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skill from "./Pages/Service"
import Contact from "./Pages/Contact";
import Projects from "./Pages/ProjectS";
import "./styles/global.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
