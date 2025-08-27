import React from "react";
import "../styles/service.css";

export default function Services() {
  const services = [
    {
      title: "Full Stack Web Development",
      description:
        "Building responsive and scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).",
      icon: "💻",
    },
    {
      title: "API Development & Integration",
      description:
        "Designing and implementing RESTful APIs and integrating third-party services such as payment gateways (Chapa).",
      icon: "🔗",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating clean and user-friendly interfaces with a focus on modern design and smooth user experiences.",
      icon: "🎨",
    },
    {
      title: "Database Management",
      description:
        "Designing, optimizing, and managing databases with MongoDB for performance and scalability.",
      icon: "🗄️",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="section-title">Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
