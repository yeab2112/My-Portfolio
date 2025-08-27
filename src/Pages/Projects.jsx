import React from "react";
import "../styles/project.css";

export default function Projects() {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {/* E-commerce Platform */}
        <div className="project-card">
          <h3>E-commerce Platform</h3>
          <p>
            A full-featured MERN stack application with product catalog, 
            shopping cart, checkout, and <b>Chapa payment integration</b>. 
            Includes an admin dashboard for product & order management.
          </p>
          <a href="https://ecommerce-client-lake.vercel.app" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="btn-link">
            🔗 Live Demo
          </a>
        </div>

        {/* Doctor Appointment System */}
        <div className="project-card">
          <h3>Doctor Appointment System</h3>
          <p>
            A web-based platform that allows patients to book appointments 
            with doctors, manage schedules, and receive notifications. 
            Built using <b>React, Node.js, Express, and MongoDB</b>.
          </p>
          <a href="#" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="btn-link">
            🔗 Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
