import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // ✅ Your Telegram credentials
  const BOT_TOKEN = "8492384030:AAHsJ0fsa_s2w9Vt5_uzAKvSU1JonTgZz-I"; 
  const CHAT_ID = "7155450605";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const text = `📩 New Contact Message:
👤 Name: ${formData.name}
📧 Email: ${formData.email}
💬 Message: ${formData.message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Telegram API error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Failed to send message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Have a question, a project idea, or just want to say hi?  
        Fill out the form below and I'll get back to you as soon as possible.
      </p>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="status-message success">
          ✅ Message sent successfully! I'll get back to you soon.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="status-message error">
          ❌ Failed to send message. Please try again or contact me directly via email.
        </div>
      )}

      <div className="contact-content">
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`btn primary ${isSubmitting ? "submitting" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <span className="icon">📞</span>
            <a href="tel:+251954693265">+251 954693265</a>
          </div>
          <div className="contact-item">
            <span className="icon">📧</span>
            <a href="mailto:yeabsiraaychiluhim2112@gmail.com">
              yeabsiraaychiluhim2112@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="icon">🌍</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </div>
  );
}