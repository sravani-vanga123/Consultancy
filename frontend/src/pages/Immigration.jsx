import React from "react";
import ImmigrationImage1 from "../assets/immi2.png";
import ImmigrationImage2 from "../assets/immmi2.png";

const ImmigrationPage = () => {
  const isMobile = window.innerWidth < 768;

  const styles = {
    page: {
      backgroundColor: "#f5f0e6",
      minHeight: "100vh",
      width: "100%",
      margin: 0,
      padding: 0,
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    },

    container: {
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "left",
    },

    mainTitle: {
      textAlign: "center",
      margin: "20px 0",
    },

    imageContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "10px",
      marginBottom: "30px",
    },

    image: {
      width: isMobile ? "100%" : "50%",
      height: "350px",
      objectFit: "cover",
      borderRadius: "12px",
    },

    sectionTitle: {
      marginTop: "25px",
      marginBottom: "10px",
      color: "black",
    },

    paragraph: {
      marginBottom: "15px",
      lineHeight: "1.6",
    },

    listTitle: {
      marginTop: "20px",
      marginBottom: "10px",
    },

    list: {
      paddingLeft: "25px",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>Immigration</h1>

        {/* IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <img
            src={ImmigrationImage1}
            alt="Immigration 1"
            style={styles.image}
          />

          <img
            src={ImmigrationImage2}
            alt="Immigration 2"
            style={styles.image}
          />
        </div>

        <h2 style={styles.sectionTitle}>
          “Your Trusted Partner for Global Mobility”
        </h2>

        <p style={styles.paragraph}>
          At Moin Consultancy, we provide reliable and result-driven immigration
          services to help you move abroad with confidence.
        </p>

        <h3 style={styles.listTitle}>Our Immigration Services</h3>
        <ul style={styles.list}>
          <li>Work Visa & Overseas Career Guidance</li>
          <li>Permanent Residency (PR) Consultation</li>
          <li>Visa Documentation & Processing</li>
          <li>End-to-End Application Support</li>
        </ul>

        <h3 style={styles.listTitle}>Our Process</h3>
        <ul style={styles.list}>
          <li>Profile Evaluation & Consultation</li>
          <li>Documentation & Eligibility Check</li>
          <li>Application Submission & Tracking</li>
          <li>Visa Support & Final Guidance</li>
        </ul>
      </div>
    </div>
  );
};

export default ImmigrationPage;