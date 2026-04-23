import React from "react";
import businessImage from "../assets/business.png";

const BusinessEnglish = () => {
  const handleDemoClick = () => {
    alert("Thank you! We will contact you to schedule your free demo class.");
  };

  const styles = {
    container: {
      backgroundColor: "#f5f5dc", // beige full width
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      paddingBottom: "60px",
    },

    title: {
      textAlign: "center",
      padding: "20px 0",
      margin: 0,
    },

    image: {
      width: "100%",
      height: "320px",
      objectFit: "cover",
      display: "block",
    },

    content: {
      maxWidth: "900px",
      margin: "40px auto",
      padding: "0 20px",
      lineHeight: "1.8",
      fontSize: "18px",
      color: "#333",
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
      transition: "0.3s",
    },

    section: {
      marginBottom: "30px",
    },
  };

  return (
    <div style={styles.container}>
      
      {/* Heading */}
      <h1 style={styles.title}>Business English</h1>

      {/* Image */}
      <img
        src={businessImage}
        alt="Business English Training"
        style={styles.image}
      />

      {/* Content */}
      <div style={styles.content}>
        
        {/* Description */}
        <div style={styles.section}>
          <h2>Business English</h2>
          <p>
            Business English is crucial for effective communication in the global marketplace.
            Our program focuses on enhancing your language skills to succeed in professional settings.
            We cover essential areas such as formal writing, effective presentations, and persuasive negotiation.
            Our expert instructors use practical exercises and real-world scenarios to build your confidence and proficiency.
            Improve your ability to articulate ideas clearly, manage business correspondence,
            and engage in high-stakes meetings with precision and professionalism.
          </p>
        </div>

        {/* Training Section */}
        <div style={styles.section}>
          <h2>Training in Business English</h2>
          <p>
            Our Business English training program is designed to boost your professional communication skills.
            Focused on enhancing fluency in formal writing, presentations, and negotiations,
            this training equips you with the language tools needed for success in the corporate world.
            Learn from experienced instructors through interactive sessions and practical exercises tailored to real business scenarios.
            Improve your ability to effectively articulate ideas, craft compelling messages,
            and engage confidently in professional interactions.
          </p>
        </div>

        {/* CTA Button */}
        <div style={styles.buttonWrapper}>
          <button onClick={handleDemoClick} style={styles.button}>
            Book Free Demo Class
          </button>
        </div>

      </div>
    </div>
  );
};

export default BusinessEnglish;