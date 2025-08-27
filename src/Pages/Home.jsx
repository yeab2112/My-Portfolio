import React from "react";
import "../styles/home.css";
import yeabsira from "../Assete/yeabsira.jpg";
import YEABSIRA2017CV from "../Assete/YEABSIRA2017CV.pdf"; 

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Yeabsira</span>
          </h1>
          <p className="tagline">
            Full Stack Developer | MERN Stack Enthusiast | Problem Solver
          </p>
          <p className="description">
            I build modern, scalable, and responsive web applications.  
            With strong skills in React, Node.js, MongoDB, and Express,  
            I focus on clean design and efficient solutions.
          </p>
          <div className="buttons">
            <a href="https://ecommerce-client-lake.vercel.app" className="btn primary">View Projects</a>
            {/* Download CV button */}
            <a href={YEABSIRA2017CV} download className="btn secondary">Download CV</a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={yeabsira}
            alt="Yeabsira Profile"
          />
        </div>
      </section>
    </div>
  );
}
