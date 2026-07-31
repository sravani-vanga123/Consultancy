import React from "react";
import MernImage1 from "../assets/m-1.png";
import MernImage2 from "../assets/mern5.png";

const MernFullStack = () => {
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
      objectFit: "cover", // 👈 zoom-out effect (you asked earlier)
      backgroundColor: "#eee",
      borderRadius: "12px",
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
        <h1 style={styles.mainTitle}>MERN Full Stack</h1>

        {/* IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <img
            src={MernImage1}
            alt="MERN Training 1"
            style={styles.image}
          />
          <img
            src={MernImage2}
            alt="MERN Training 2"
            style={styles.image}
          />
        </div>

        {/* CTA BUTTON */}
        <button style={styles.button}>Book Free Demo Classes</button>

        <h2 style={styles.sectionTitle}>MERN Full Stack Development</h2>
        <p style={styles.paragraph}>
         MERN Full Stack Development is a comprehensive framework for building dynamic and scalable web applications using JavaScript. It combines four powerful technologies: MongoDB, Express.js, React, and Node.js. MongoDB serves as a flexible NoSQL database for storing data, Express.js handles backend logic and APIs, React is used to create fast and interactive user interfaces, and Node.js enables server-side execution using JavaScript. This unified stack allows developers to work seamlessly across frontend and backend, making development faster and more efficient.
        </p>

       

        <h2 style={styles.sectionTitle}>Why Choose MERN Stack?</h2>
        <p style={styles.paragraph}>
          The MERN stack is highly popular because it uses a single programming language—JavaScript—throughout the entire development process. This reduces complexity and improves productivity. It is ideal for developing modern applications such as e-commerce platforms, social media apps, dashboards, and enterprise solutions. MERN applications are known for their performance, scalability, and responsiveness, making them suitable for real-world business needs.
        </p>

        <h2 style={styles.sectionTitle}>Our Training & Services</h2>
        <p style={styles.paragraph}>
         We provide expert MERN Full Stack training and development services, covering everything from basic concepts to advanced application building. Our program includes hands-on practice with real-time projects, ensuring you gain practical experience. You will learn how to design responsive user interfaces with React, build secure APIs using Node.js and Express, and manage databases effectively with MongoDB.
        </p>

        <p style={styles.paragraph}>
         Our experienced trainers guide you through each step with personalized support, mock projects, and interview preparation. By the end of the course, you will be able to build complete web applications independently and be ready for job opportunities in full stack development.
        </p>

        <h2 style={styles.sectionTitle}>Career Opportunities</h2>
        <p style={styles.paragraph}>
          After completing MERN Full Stack training, you can explore roles such as Frontend Developer, Backend Developer, Full Stack Developer, or Software Engineer. With the growing demand for web applications, MERN developers are highly sought after in startups as well as large IT companies.
         
        </p>
      </div>
    </div>
  );
};

export default MernFullStack;