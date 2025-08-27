import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbare.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">Yeabsira<span className="dot">.</span></Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/skills">Service</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
