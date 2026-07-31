import React from "react";
import CyberImage1 from "../assets/cyber.png";
import CyberImage2 from "../assets/cyber2.png";

const CyberSecurityPage = () => {
  const isMobile = window.innerWidth < 768;

  const styles = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0e6ff, #f5e6d3)",
      padding: "40px 20px",
    },

    section: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "60px",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },

    imageContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "column",
      gap: "15px",
      flex: 1,
    },

    image: {
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderRadius: "12px",
    },

    content: {
      flex: 1,
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    },

    title: {
      fontSize: "36px",
      color: "#111",
      marginTop: "-80px", 
      marginBottom: "10px",
    },

    text: {
      margin: "10px 0",
      color: "black",
      lineHeight: "1.6",
    },

    list: {
      listStyle: "none",
      padding: 0,
    },

    listItem: {
      margin: "12px 0",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },

    check: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background: "#7f00ff",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "12px",
    },

    button: {
      marginTop: "25px",
      display: "inline-block",
      padding: "12px 25px",
      background: "linear-gradient(45deg, #7f00ff, #a64bf4)",
      color: "white",
      borderRadius: "6px",
      textDecoration: "none",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.section}>

        {/* LEFT: IMAGES */}
        <div style={styles.imageContainer}>
          <img src={CyberImage1} alt="cyber" style={styles.image} />
          <img src={CyberImage2} alt="cyber2" style={styles.image} />
        </div>

        {/* RIGHT: CONTENT */}
        <div style={styles.content}>
          <h1 style={styles.title}>Cybersecurity</h1>

          <p style={styles.text}>
            Protect your digital assets with comprehensive cybersecurity solutions.
            We identify vulnerabilities, fortify defenses, and ensure regulatory compliance.
          </p>

          <ul style={styles.list}>
            {[
              "Vulnerability Assessment & Penetration Testing",
              "Security Operations Center (SOC) Services",
              "Firewall & Network Security Configuration",
              "Data Encryption & Privacy Compliance (GDPR)",
              "Incident Response & Recovery Planning",
              "Employee Cybersecurity Awareness Training",
              "Identity & Access Management (IAM)",
            ].map((item, i) => (
              <li key={i} style={styles.listItem}>
                <span style={styles.check}>✔</span>
                {item}
              </li>
            ))}
          </ul>

          <a href="#" style={styles.button}>
            GET A QUOTE
          </a>
        </div>

      </div>
    </div>
  );
};

export default CyberSecurityPage;