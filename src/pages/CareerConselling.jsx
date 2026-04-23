import React from "react";
import CarreercounsellingImage from "../assets/Career-Councelling1.png";

const CareerCounsellingPage = () => {
  // First-level styles (same structure as Distance Education page)
  const styles = {
    page: {
      backgroundColor: "beige",
      minHeight: "100vh",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      padding: 0,
      margin: 0,
    },
    container: {
      padding: "0px",
      textAlign: "left",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    mainTitle: {
      textAlign: "center",
      margin: 0,
      padding: "0px 0 0px 0",
    },
    heroImage: {
      width: "100%",
      maxWidth: "1000px",
      height: "500px",
      objectFit: "cover",
      display: "block",
      margin: "0 auto 30px auto",
    },
    sectionTitle: {
      textAlign: "left",
      marginTop: "30px",
      marginBottom: "20px",
    },
    paragraph: {
      marginBottom: "15px",
      lineHeight: "1.6",
      padding: "0 20px",
    },
    listTitle: {
      marginTop: "20px",
      marginBottom: "10px",
      padding: "0 20px",
    },
    list: {
      paddingLeft: "40px",
      marginBottom: "0px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>Career Counselling</h1>

        <img
          src={CarreercounsellingImage}
          alt="Career Counselling"
          style={styles.heroImage}
        />

        <h2 style={styles.sectionTitle}>
          “Why So Many Students Feel Stuck Today”
        </h2>

        <p style={styles.paragraph}>
          In today’s fast-changing world, career choices are more complex than
          ever. Students are expected to decide their future at a young age —
          often without proper guidance or self-awareness. This leads to
          confusion, stress, and sometimes even regret later in life.
        </p>

        <h3 style={styles.listTitle}>Common Challenges Students Face</h3>
        <ul style={styles.list}>
          <li>Many students follow trends instead of passion</li>
          <li>Lack of awareness about emerging career opportunities</li>
          <li>Fear of failure or making the wrong decision</li>
          <li>Limited exposure to real-world career paths</li>
        </ul>
      </div>
    </div>
  );
};

export default CareerCounsellingPage;