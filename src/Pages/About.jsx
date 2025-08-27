import React from "react";
import "../styles/about.css";
import yeabsira from "../Assete/yeabsira.jpg"; // profile picture

export default function About() {
  return (
    <div className="about-container">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        {/* Profile Image */}
        <div className="about-image">
          <img src={yeabsira} alt="Yeabsira Aychiluhim" />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <p>
            Hello 👋, my name is <span className="highlight">Yeabsira Aychiluhim</span>.  
            I am a passionate <b>Full Stack Developer</b> who enjoys creating modern,
            scalable, and user-friendly applications. With strong skills in the 
            <b> MERN Stack (MongoDB, Express, React, Node.js)</b>, I specialize in 
            building e-commerce platforms, dashboards, and seamless user experiences.
          </p>

          <p>
            Beyond coding, I love problem-solving, exploring new technologies, 
            and continuously improving my craft. My recent projects include 
            <b> payment integrations (Chapa)</b>, <b> responsive admin dashboards</b>, 
            and <b>advanced order management systems</b>.
          </p>

          {/* Skills Section */}
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>⚡ React.js & Tailwind CSS</li>
              <li>⚡ Node.js & Express</li>
              <li>⚡ MongoDB & Mongoose</li>
              <li>⚡ REST API Development</li>
              <li>⚡ Payment Integration (Chapa)</li>
              <li>⚡ Responsive UI/UX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
