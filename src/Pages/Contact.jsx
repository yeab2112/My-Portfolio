import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Have a question, a project idea, or just want to say hi?  
        Fill out the form below and I’ll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn primary">
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="contact-info">
        <p>📞 Phone: <a href="tel:+251954693265">0954693265</a></p>
        <p>📧 Email: <a href="mailto:yeabsiraaychiluhim2112@gmail.com">yeabsiraaychiluhim2112@gmail.com</a></p>
        <p>🌍 Location: Addis Ababa, Ethiopia</p>
      </div>

      {/* Quick Contact Buttons */}
      <div className="quick-contact">
        <a
          href="https://t.me/yeabsiraA2112"
          target="_blank"
          rel="noopener noreferrer"
          className="btn telegram"
        >
          📩 Contact via Telegram
        </a>

<a href="sms:+251954693265">📱 Send SMS</a>
        
      </div>
    </div>
  );
}
