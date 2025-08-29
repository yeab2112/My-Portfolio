import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorDetails, setErrorDetails] = useState("");

  // Telegram credentials
  const BOT_TOKEN = "8492384030:AAHsJ0fsa_s2w9Vt5_uzAKvSU1JonTgZz-I";
  const CHAT_ID = "7155450605";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorDetails("");

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
          parse_mode: "HTML"
        }),
      });

      const data = await response.json();
      
      if (data.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorDetails(data.description || "Unknown error");
        throw new Error(data.description || "Failed to send message");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Telegram API error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Get In Touch</h2>
      <p style={styles.subtitle}>
        Have a question, a project idea, or just want to say hi?  
        Fill out the form below and I'll get back to you as soon as possible.
      </p>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div style={styles.successMessage}>
          ✅ Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div style={styles.errorMessage}>
          ❌ Failed to send message. Please try again or contact me directly.
          {errorDetails && <div style={styles.errorDetails}>Error: {errorDetails}</div>}
          <div style={styles.troubleshoot}>
            <p><strong>Troubleshooting tips:</strong></p>
            <ul>
              <li>Ensure the Telegram bot is properly configured</li>
              <li>Verify the chat ID is correct</li>
              <li>Check that the bot has permission to send messages</li>
            </ul>
          </div>
        </div>
      )}

      <div style={styles.content}>
        {/* Contact Form */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              disabled={isSubmitting}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              disabled={isSubmitting}
              style={styles.textarea}
            ></textarea>
          </div>

          <button 
            type="submit" 
            style={isSubmitting ? {...styles.button, ...styles.buttonSubmitting} : styles.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Contact Info */}
        <div style={styles.contactInfo}>
          <h3 style={styles.infoTitle}>Contact Information</h3>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📞</span>
            <a href="tel:+251954693265" style={styles.link}>+251 954693265</a>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📧</span>
            <a href="mailto:yeabsiraaychiluhim2112@gmail.com" style={styles.link}>
              yeabsiraaychiluhim2112@gmail.com
            </a>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>🌍</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#2c3e50",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "1.1rem",
    color: "#7f8c8d",
    marginBottom: "3rem",
    lineHeight: "1.6",
  },
  content: {
    display: "flex",
    gap: "3rem",
    flexWrap: "wrap",
  },
  form: {
    flex: 1,
    minWidth: "300px",
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
  },
  formGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontWeight: "600",
    color: "#2c3e50",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "1rem",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "1rem",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "12px 24px",
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  buttonSubmitting: {
    background: "#2980b9",
    cursor: "not-allowed",
  },
  contactInfo: {
    flex: 1,
    minWidth: "250px",
    background: "#f8f9fa",
    padding: "2rem",
    borderRadius: "12px",
  },
  infoTitle: {
    marginTop: 0,
    marginBottom: "1.5rem",
    color: "#2c3e50",
    fontSize: "1.5rem",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.2rem",
  },
  icon: {
    marginRight: "12px",
    fontSize: "1.2rem",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
  },
  successMessage: {
    padding: "12px 16px",
    borderRadius: "6px",
    marginBottom: "1.5rem",
    textAlign: "center",
    fontWeight: "500",
    backgroundColor: "#d4edda",
    color: "#155724",
    border: "1px solid #c3e6cb",
  },
  errorMessage: {
    padding: "12px 16px",
    borderRadius: "6px",
    marginBottom: "1.5rem",
    textAlign: "center",
    fontWeight: "500",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    border: "1px solid #f5c6cb",
  },
  errorDetails: {
    marginTop: "8px",
    fontSize: "0.9rem",
    fontFamily: "monospace",
  },
  troubleshoot: {
    marginTop: "12px",
    textAlign: "left",
    fontSize: "0.9rem",
  },
};