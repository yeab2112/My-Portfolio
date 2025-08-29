import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Your Telegram credentials
  const BOT_TOKEN ="8492384030:AAHsJ0fsa_s2w9Vt5_uzAKvSU1JonTgZz-I"; 
  const CHAT_ID = "7155450605"; // ✅ Your personal chat ID from userinfobot

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `📩 New Contact Message:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
💬 Message: ${formData.message}`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });

      alert("✅ Message sent to Telegram!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (error) {
      alert("❌ Failed to send message. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Have a question, a project idea, or just want to say hi?  
        Fill out the form below and I’ll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn primary">Send Message</button>
      </form>

      {/* Contact Info */}
      <div className="contact-info">
        <p>📞 Phone: <a href="tel:+251954693265">0954693265</a></p>
        <p>📧 Email: <a href="mailto:yeabsiraaychiluhim2112@gmail.com">yeabsiraaychiluhim2112@gmail.com</a></p>
        <p>🌍 Location: Addis Ababa, Ethiopia</p>
      </div>
    </div>
  );
}
