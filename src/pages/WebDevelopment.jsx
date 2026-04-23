import React from "react";

const styles = {
  page: {
  minHeight: "100vh",
   background: "linear-gradient(135deg, #f0e6ff, #f5e6d3)",
},
  section: {
    display: "flex",
    padding: "80px",
    gap: "60px",
    alignItems: "center",
    backgroundcolor: "red",
    flexWrap: "wrap",
  },
  small: {
    letterSpacing: "3px",
    opacity: 0.7,
  },

  heading: {
    fontSize: "36px",
    margin: "10px 0",
  },

  tag: {
    border: "1px solid rgba(255,255,255,0.4)",
    padding: "6px 12px",
    marginRight: "10px",
    borderRadius: "6px",
    fontSize: "13px",
  },

  globe: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    fontSize: "40px",
    opacity: 0.6,
  },

  content: {
    maxWidth: "600px",
     fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
  },

title: {
  fontSize: "30px",
  color: "black",
  fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
  margin: 0,         
},

  text: {
    margin: "20px 0",
    color: "#666",
    lineHeight: "1.6",
     fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
  },

  list: {
    listStyle: "none",
    padding: 0,
     fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
  },

  listItem: {
    margin: "12px 0",
    display: "flex",
    alignItems: "center",
    gap: "10px",
     fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
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
     fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
  },

  button: {
    marginTop: "25px",
    display: "inline-block",
    padding: "12px 25px",
    background: "linear-gradient(45deg, #7f00ff, #a64bf4)",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
     fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
  },
};

const WebDevelopmentPage = () => {
  return (
    <div style={styles.page}> 

      <div style={styles.section}>
        
        <div style={styles.content}>
          <h1 style={styles.title}>Web Design & Development</h1>

          <p style={styles.text}>
            We craft visually stunning, high-performance websites that captivate audiences
            and drive business results. Every pixel is intentional — from concept to launch.
          </p>

          <ul style={styles.list}>
            {[
              "Custom UI/UX Design & Prototyping",
              "Responsive Website Development",
              "E-Commerce Solutions",
              "CMS Development",
              "Full-Stack Applications",
              "SEO Optimization",
              "Maintenance & Support",
            ].map((item, index) => (
              <li key={index} style={styles.listItem}>
                <span style={styles.check}>✔</span> {item}
              </li>
            ))}
          </ul>

          <a href="#" style={styles.button}>GET A QUOTE</a>
        </div>

      </div>

    </div>
  );
};
export default WebDevelopmentPage;