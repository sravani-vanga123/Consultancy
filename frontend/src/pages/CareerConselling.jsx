import React from "react";
import CareerImage1 from "../assets/career1.png";
import CareerImage2 from "../assets/career2.png";

const CareerCounsellingPage = () => {
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
        <h1 style={styles.mainTitle}>Career Counselling</h1>

        {/* IMAGE SECTION (2 IMAGES) */}
        <div style={styles.imageContainer}>
          <img
            src={CareerImage1}
            alt="Career Counselling 1"
            style={styles.image}
          />

          <img
            src={CareerImage2}
            alt="Career Counselling 2"
            style={styles.image}
          />
        </div>

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