import React from "react";
import CloudImage1 from "../assets/cloud2.png";
import CloudImage2 from "../assets/cloud5.png";

const CloudServicesPage = () => {
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
      flexDirection: "column",
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
      marginTop: "-60px",
      marginBottom: "10px",
    },

    text: {
      margin: "0px 0",
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

        {/* LEFT: IMAGES (same WebDevelopment style) */}
        <div style={styles.imageContainer}>
          <img src={CloudImage1} alt="cloud1" style={styles.image} />
          <img src={CloudImage2} alt="cloud2" style={styles.image} />
        </div>

        {/* RIGHT: CONTENT */}
        <div style={styles.content}>
          <h1 style={styles.title}>Cloud Solutions</h1>

          <p style={styles.text}>
            Scale effortlessly with enterprise-grade cloud infrastructure.
            We design, migrate, and manage secure and cost-efficient cloud systems.
          </p>

          <ul style={styles.list}>
            {[
              "Cloud Migration & Strategy Consulting",
              "AWS, Azure & Google Cloud Architecture",
              "Serverless Application Development",
              "Cloud Storage & Backup Solutions",
              "DevOps & CI/CD Pipeline Setup",
              "Cloud Cost Optimization & Monitoring",
              "Managed Cloud Services & 24/7 Support",
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

export default CloudServicesPage;