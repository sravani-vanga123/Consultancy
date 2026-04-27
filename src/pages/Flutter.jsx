import React from "react";

import FlutterImage1 from "../assets/flutter2.png";
import FlutterImage2 from "../assets/flutter.png";

const FlutterPage = () => {
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

    imageWrapper: {
      width: isMobile ? "100%" : "50%",
      height: "350px",
      overflow: "hidden", // ensures equal height
      borderRadius: "12px",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // keeps both images same size
    },

    button: {
      padding: "12px 28px",
      fontSize: "16px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      margin: "10px auto 30px",
      display: "block",
    },

    sectionTitle: {
      marginTop: "25px",
      marginBottom: "10px",
      color: "black",
    },

    paragraph: {
      marginBottom: "15px",
      lineHeight: "1.7",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>Flutter Development</h1>

        {/* IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <div style={styles.imageWrapper}>
            <img
              src={FlutterImage1}
              alt="Flutter Training 1"
              style={styles.image}
            />
          </div>

          <div style={styles.imageWrapper}>
            <img
              src={FlutterImage2}
              alt="Flutter Training 2"
              style={styles.image}
            />
          </div>
        </div>

        {/* BUTTON */}
        <button style={styles.button}>Book Free Demo Class</button>

        <h2 style={styles.sectionTitle}>Flutter Development</h2>
        <p style={styles.paragraph}>
        Flutter is an open-source UI software development kit created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase. It uses the Dart programming language and provides a rich set of pre-designed widgets for creating visually appealing and high-performance apps. With hot reload, developers can see changes instantly, accelerating the development process.
        </p>

        <h2 style={styles.sectionTitle}>Why Choose Flutter?</h2>
        <p style={styles.paragraph}>
          Flutter allows developers to create beautiful, responsive apps across multiple platforms using a single codebase. Its fast development cycle, expressive UI, and high performance make it ideal for startups and enterprises alike. Whether you want to build mobile, web, or desktop apps, Flutter provides flexibility and efficiency unmatched by other frameworks.
        </p>

        <h2 style={styles.sectionTitle}>Our Training & Services</h2>
        <p style={styles.paragraph}>
          We provide comprehensive Flutter training and development services. Our program covers the Dart language, widget architecture, state management, and deployment. You will work on real-time projects, learning to build responsive interfaces, integrate APIs, and create scalable applications.
        </p>

        <h2 style={styles.sectionTitle}>Career Opportunities</h2>
        <p style={styles.paragraph}>
        After completing Flutter training, you can pursue roles like Flutter Developer, Mobile App Developer, UI/UX Developer, or Full Stack Developer with Flutter expertise. With the rising demand for cross-platform apps, skilled Flutter developers are highly sought after in tech companies and startups worldwide.
        </p>
      </div>
    </div>
  );
};

export default FlutterPage;