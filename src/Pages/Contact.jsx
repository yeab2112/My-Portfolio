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
          <i className="fas fa-check-circle" style={styles.icon}></i>
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {submitStatus === "error" && (
        <div style={styles.errorMessage}>
          <i className="fas fa-exclamation-circle" style={styles.icon}></i>
          Failed to send message. Please try again or contact me directly.
          {errorDetails && <div style={styles.errorDetails}>Error: {errorDetails}</div>}
          <div style={styles.troubleshoot}>
            <p style={styles.troubleshootTitle}><strong>Troubleshooting tips:</strong></p>
            <ul style={styles.troubleshootList}>
              <li>Make sure you've started a chat with the bot on Telegram</li>
              <li>Verify the chat ID is correct</li>
              <li>Check that the bot has permission to send messages</li>
              <li>Ensure your bot token is valid</li>
            </ul>
            <p style={styles.alternativeContact}>
              Alternatively, you can contact me directly at{" "}
              <a href="mailto:yeabsiraaychiluhim2112@gmail.com" style={styles.link}>
                yeabsiraaychiluhim2112@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}

      <div style={styles.content}>
        {/* Contact Form */}
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              <i className="fas fa-user" style={styles.inputIcon}></i>
              Full Name
            </label>
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
            <label htmlFor="email" style={styles.label}>
              <i className="fas fa-envelope" style={styles.inputIcon}></i>
              Email Address
            </label>
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
            <label htmlFor="message" style={styles.label}>
              <i className="fas fa-comment" style={styles.inputIcon}></i>
              Message
            </label>
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
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin" style={styles.buttonIcon}></i>
                Sending...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane" style={styles.buttonIcon}></i>
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Contact Info */}
        <div style={styles.contactInfo}>
          <h3 style={styles.infoTitle}>Contact Information</h3>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>
              <i className="fas fa-phone"></i>
            </span>
            <a href="tel:+251954693265" style={styles.contactLink}>+251 954693265</a>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>
              <i className="fas fa-envelope"></i>
            </span>
            <a href="mailto:yeabsiraaychiluhim2112@gmail.com" style={styles.contactLink}>
              yeabsiraaychiluhim2112@gmail.com
            </a>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
          
          <div style={styles.telegramInfo}>
            <h4 style={styles.telegramTitle}>
              <i className="fab fa-telegram" style={styles.telegramIcon}></i>
              Telegram Integration
            </h4>
            <p style={styles.telegramText}>
              This form sends messages directly to my Telegram. If you're having issues, 
              make sure the bot is properly configured with the correct Chat ID.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "2rem auto",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#2c3e50",
    fontWeight: "700",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "1.1rem",
    color: "#7f8c8d",
    marginBottom: "3rem",
    lineHeight: "1.6",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  content: {
    display: "flex",
    gap: "3rem",
    flexWrap: "wrap",
  },
  form: {
    flex: 1,
    minWidth: "300px",
    background: "#f8f9fa",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
  },
  formGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
    fontWeight: "600",
    color: "#2c3e50",
    fontSize: "1rem",
  },
  inputIcon: {
    marginRight: "0.5rem",
    color: "#3498db",
    width: "16px",
  },
  input: {
    width: "100%",
    padding: "12px 12px 12px 40px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1rem",
    transition: "all 0.3s",
    boxSizing: "border-box",
    background: "#fff",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "1rem",
    transition: "all 0.3s",
    boxSizing: "border-box",
    fontFamily: "inherit",
    minHeight: "150px",
    background: "#fff",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "14px 24px",
    background: "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s",
    boxShadow: "0 4px 6px rgba(52, 152, 219, 0.3)",
  },
  buttonSubmitting: {
    background: "linear-gradient(135deg, #2980b9 0%, #256a9e 100%)",
    cursor: "not-allowed",
  },
  buttonIcon: {
    marginRight: "0.5rem",
  },
  contactInfo: {
    flex: 1,
    minWidth: "250px",
    background: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    border: "1px solid #eee",
  },
  infoTitle: {
    marginTop: 0,
    marginBottom: "1.5rem",
    color: "#2c3e50",
    fontSize: "1.5rem",
    fontWeight: "600",
    paddingBottom: "0.5rem",
    borderBottom: "2px solid #3498db",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.2rem",
    padding: "0.8rem",
    borderRadius: "8px",
    transition: "background 0.3s",
  },
  contactIcon: {
    marginRight: "12px",
    fontSize: "1.2rem",
    color: "#3498db",
    width: "24px",
    textAlign: "center",
  },
  contactLink: {
    color: "#3498db",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  successMessage: {
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "1.5rem",
    textAlign: "center",
    fontWeight: "500",
    backgroundColor: "#d4edda",
    color: "#155724",
    border: "1px solid #c3e6cb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  errorMessage: {
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "1.5rem",
    textAlign: "center",
    fontWeight: "500",
    backgroundColor: "#f8d7da",
    color: "#721c24",
    border: "1px solid #f5c6cb",
  },
  icon: {
    marginRight: "0.5rem",
  },
  errorDetails: {
    marginTop: "10px",
    fontSize: "0.9rem",
    fontFamily: "monospace",
    padding: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: "4px",
  },
  troubleshoot: {
    marginTop: "15px",
    textAlign: "left",
    fontSize: "0.9rem",
  },
  troubleshootTitle: {
    marginBottom: "0.5rem",
    fontWeight: "600",
  },
  troubleshootList: {
    paddingLeft: "1.5rem",
    marginBottom: "1rem",
  },
  alternativeContact: {
    marginTop: "1rem",
    paddingTop: "1rem",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
    fontWeight: "600",
  },
  telegramInfo: {
    marginTop: "2rem",
    padding: "1rem",
    backgroundColor: "#e8f4fd",
    borderRadius: "8px",
    borderLeft: "4px solid #3498db",
  },
  telegramTitle: {
    display: "flex",
    alignItems: "center",
    marginTop: 0,
    marginBottom: "0.5rem",
    color: "#2c3e50",
    fontSize: "1.1rem",
  },
  telegramIcon: {
    marginRight: "0.5rem",
    color: "#3498db",
    fontSize: "1.2rem",
  },
  telegramText: {
    margin: 0,
    fontSize: "0.9rem",
    lineHeight: "1.5",
    color: "#4a6572",
  },
};