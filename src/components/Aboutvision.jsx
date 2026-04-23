import React from "react";
import VisionImage from "../assets/misssion.png"; // replace with your image


const styles = {
  section: {
    
    padding: "80px 20px",
    color: "black",
     fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    gap: "40px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  left: {
    flex: "1",
    minWidth: "300px",
  },

  right: {
    flex: "1",
    minWidth: "300px",
  },

  heading: {
    fontSize: "42px",
    marginBottom: "30px",
    fontWeight: "bold",
  },

  card: {
    display: "flex",
    gap: "15px",
    marginBottom: "25px",
    alignItems: "flex-start",
  },

  icon: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "#7c3aed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    flexShrink: 0,
  },

  title: {
    fontSize: "20px",
    marginBottom: "8px",
    
  },

  text: {
    fontSize: "20px",
    lineHeight: "1.6",
    color: "black",

  },

  image: {
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover",
  },
};

const VisionMission = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* LEFT CONTENT */}
        <div style={styles.left}>
          <h1 style={styles.heading}>Our Vision and Mission</h1>

          <div style={styles.card}>
            <div style={styles.icon}>✔</div>
            <div>
              <h3 style={styles.title}>Vision</h3>
              <p style={styles.text}>
                To be a leading education consultancy that inspires and empowers
                students to achieve their fullest potential by guiding them toward
                fulfilling careers and equipping them with global opportunities.
              </p>
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>✔</div>
            <div>
              <h3 style={styles.title}>Mission</h3>
              <p style={styles.text}>
                Our mission is to provide personalized guidance, transparent
                processes, and end-to-end support to students aspiring to study
                abroad, ensuring success at every step of their journey.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div style={styles.right}>
          <img src={VisionImage} alt="vision" style={styles.image} />
        </div>

      </div>
    </section>
  );
};

export default VisionMission;