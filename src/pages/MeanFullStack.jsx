import React from "react";
import MeanImage1 from "../assets/mean.png";
import MeanImage2 from "../assets/mean-stack-development.png";

const MeanFullStack = () => {
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
      overflow: "hidden", // 👈 ensures equal height
      borderRadius: "12px",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover", // 👈 ensures both images same size
    },

    button: {
      padding: "12px 28px",
      fontSize: "16px",
      backgroundColor: "#28a745",
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
        <h1 style={styles.mainTitle}>MEAN Full Stack</h1>

        {/* IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <div style={styles.imageWrapper}>
            <img
              src={MeanImage1}
              alt="MEAN Training 1"
              style={styles.image}
            />
          </div>

          <div style={styles.imageWrapper}>
            <img
              src={MeanImage2}
              alt="MEAN Training 2"
              style={styles.image}
            />
          </div>
        </div>

        {/* BUTTON */}
        <button style={styles.button}>Book Free Demo Classes</button>

        <h2 style={styles.sectionTitle}>MEAN Full Stack Development</h2>
        <p style={styles.paragraph}>
         MEAN Full Stack Development is a robust framework for building scalable web applications entirely in JavaScript. It integrates four key technologies: MongoDB for database management, Express.js for backend APIs, Angular for dynamic front-end interfaces, and Node.js for server-side execution. This stack ensures a unified development workflow, making applications faster, maintainable, and highly performant.
        </p>

        <h2 style={styles.sectionTitle}>Why Choose MEAN Stack?</h2>
        <p style={styles.paragraph}>
         The MEAN stack is popular for its single-language approach (JavaScript) across all layers of development. It simplifies collaboration, reduces complexity, and accelerates project timelines. MEAN is ideal for enterprise applications, e-commerce platforms, real-time dashboards, and dynamic web apps. Its scalability and performance make it a preferred choice for modern businesses.
        </p>

        <h2 style={styles.sectionTitle}>Our Training & Services</h2>
        <p style={styles.paragraph}>
         We provide expert MEAN Full Stack training and development services, covering beginner to advanced concepts. Our programs include hands-on projects, practical coding exercises, and live demonstrations. You will learn to create responsive Angular interfaces, build secure Node.js/Express APIs, and manage MongoDB databases efficiently.
        </p>

        <p style={styles.paragraph}>
         Our trainers provide personalized guidance, project reviews, and interview preparation. By the end of the course, you will be able to build full-featured applications independently, making you ready for roles in top IT companies.
        </p>

        <h2 style={styles.sectionTitle}>Career Opportunities</h2>
        <p style={styles.paragraph}>
          After completing MEAN Full Stack training, you can explore careers such as Frontend Developer, Backend Developer, Full Stack Developer, or Software Engineer. With growing demand for web applications, MEAN developers are sought after in startups and large enterprises alike.
          </p>
      </div>
    </div>
  );
};

export default MeanFullStack;