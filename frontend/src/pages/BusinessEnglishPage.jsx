import React from "react";
import businessImage1 from "../assets/business.png";
import businessImage2 from "../assets/business2.png";

const BusinessEnglish = () => {
  const isMobile = window.innerWidth < 768;

  const handleDemoClick = () => {
    alert("Thank you! We will contact you to schedule your free demo class.");
  };

  const styles = {
    page: {
      backgroundColor: "#f5f0e6",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    },

    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      textAlign: "left",
    },

    title: {
      textAlign: "center",
      margin: "20px 0",
    },

    imageContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "10px",
      marginBottom: "30px",
    },

    imageWrapper: {
      width: isMobile ? "100%" : "50%",
      height: "350px",
      overflow: "hidden",
      borderRadius: "12px",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    content: {
      maxWidth: "1200px",
      margin: "0 auto",
      fontSize: "18px",
      lineHeight: "1.8",
    },

    section: {
      marginBottom: "25px",
    },

    buttonWrapper: {
      textAlign: "center",
      marginTop: "30px",
    },

    button: {
      padding: "12px 28px",
      backgroundColor: "#A020F0",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Business English</h1>

        {/* 🔥 IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <div style={styles.imageWrapper}>
            <img
              src={businessImage1}
              alt="Business English 1"
              style={styles.image}
            />
          </div>

          <div style={styles.imageWrapper}>
            <img
              src={businessImage2}
              alt="Business English 2"
              style={styles.image}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div style={styles.content}>
          <div style={styles.section}>
            <h2>Business English</h2>
            <p>
              Business English is crucial for effective communication in the global marketplace. Our program focuses on enhancing your language skills to succeed in professional settings. We cover essential areas such as formal writing, effective presentations, and persuasive negotiation. Our expert instructors use practical exercises and real-world scenarios to build your confidence and proficiency. Improve your ability to articulate ideas clearly, manage business correspondence, and engage in high-stakes meetings with precision and professionalism.
            </p>

            
          </div>

          <div style={styles.section}>
            <h2>Training in Business English</h2>
            <p>
              Our Business English training program is designed to boost your professional communication skills. Focused on enhancing fluency in formal writing, presentations, and negotiations, this training equips you with the language tools needed for success in the corporate world. Learn from experienced instructors through interactive sessions and practical exercises tailored to real business scenarios. Improve your ability to effectively articulate ideas, craft compelling messages, and engage confidently in professional interactions.
            </p>

          
          </div>

          {/* BUTTON */}
          <div style={styles.buttonWrapper}>
            <button onClick={handleDemoClick} style={styles.button}>
              Book Free Demo Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessEnglish;