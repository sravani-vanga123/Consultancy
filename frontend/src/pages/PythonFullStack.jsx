import React from "react";
import PythonImage1 from "../assets/python22.png";
import PythonImage2 from "../assets/python2.png";

const PythonFullStack = () => {
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
      overflow: "hidden",
      borderRadius: "12px",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // ensures equal height
    },

    button: {
      padding: "12px 28px",
      fontSize: "16px",
      backgroundColor: "#4B8BBE",
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
        <h1 style={styles.mainTitle}>Python Full Stack</h1>

        {/* IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <div style={styles.imageWrapper}>
            <img
              src={PythonImage1}
              alt="Python Training 1"
              style={styles.image}
            />
          </div>

          <div style={styles.imageWrapper}>
            <img
              src={PythonImage2}
              alt="Python Training 2"
              style={styles.image}
            />
          </div>
        </div>

        {/* BUTTON */}
        <button style={styles.button}>Book Free Demo Class</button>

        <h2 style={styles.sectionTitle}>Python Full Stack Development</h2>
        <p style={styles.paragraph}>
          Python is a versatile, high-level programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is widely used in web development, data analysis, artificial intelligence, scientific computing, and automation due to its extensive libraries and frameworks. Its easy-to-learn syntax and large community make it a popular choice for both beginners and experienced developers, enabling efficient and effective coding solutions.
        </p>

        <p style={styles.paragraph}>
          We provide expert Python development services, harnessing the language’s versatility and simplicity to build powerful solutions. From web applications to data analysis and machine learning, our team utilizes Python’s extensive libraries and frameworks to deliver efficient and scalable results. We focus on creating clean, maintainable code and provide robust solutions tailored to your needs. Whether you’re looking to automate tasks or develop complex systems, our Python expertise ensures high-quality
        </p>

        <h2 style={styles.sectionTitle}>Our Training & Services</h2>
        <p style={styles.paragraph}>
          We provide complete Python Full Stack training with real-time projects,
          covering frontend, backend, and database integration.
        </p>

        <p style={styles.paragraph}>
          Learn Django/Flask, API development, and deployment with hands-on
          experience and expert guidance.
        </p>
      </div>
    </div>
  );
};

export default PythonFullStack;