import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Get In Touch</h2>
      <p style={styles.subtitle}>
        Have a question, project idea, or just want to say hi?  
        You can reach me directly through the following options:
      </p>

      <div style={styles.contactInfo}>
        <h3 style={styles.infoTitle}>Contact Information</h3>

        <div style={styles.contactItem}>
          <span style={styles.contactIcon}>📞</span>
          <a href="tel:+251954693265" style={styles.contactLink}>
            +251 954693265
          </a>
        </div>

        <div style={styles.contactItem}>
          <span style={styles.contactIcon}>📧</span>
          <a
            href="mailto:yeabsiraaychiluhim2112@gmail.com"
            style={styles.contactLink}
          >
            yeabsiraaychiluhim2112@gmail.com
          </a>
        </div>

        <div style={styles.contactItem}>
          <span style={styles.contactIcon}>📢</span>
          <a
            href="https://t.me/yeabsiraA2112"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.contactLink, ...styles.telegramButton }}
          >
            @yeabsiraA2112
          </a>
        </div>

        <div style={styles.contactItem}>
          <span style={styles.contactIcon}>🌍</span>
          <span>Addis Ababa, Ethiopia</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "2rem auto",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#2c3e50",
    fontWeight: "700",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "1rem",
    color: "#7f8c8d",
    marginBottom: "2rem",
    lineHeight: "1.6",
  },
  contactInfo: {
    background: "#f8f9fa",
    padding: "2rem",
    borderRadius: "12px",
    border: "1px solid #eee",
  },
  infoTitle: {
    marginTop: 0,
    marginBottom: "1.5rem",
    color: "#2c3e50",
    fontSize: "1.3rem",
    fontWeight: "600",
    borderBottom: "2px solid #3498db",
    paddingBottom: "0.5rem",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.2rem",
  },
  contactIcon: {
    marginRight: "12px",
    fontSize: "1.2rem",
    width: "24px",
    textAlign: "center",
  },
  contactLink: {
    color: "#3498db",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s",
  },
  telegramButton: {
    background: "#0088cc",
    color: "white",
    padding: "8px 16px",
    borderRadius: "6px",
    textDecoration: "none",
    display: "inline-block",
  },
};

export default Contact;
