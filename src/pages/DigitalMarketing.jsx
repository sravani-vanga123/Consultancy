import React from "react";
import DigitalImage1 from "../assets/digital11.png";
import DigitalImage2 from "../assets/digitalm.png";

const DigitalMarketing = () => {
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
        <h1 style={styles.mainTitle}>Digital Marketing Course</h1>

        {/* IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <div style={styles.imageWrapper}>
            <img
              src={DigitalImage1}
              alt="Digital Marketing 1"
              style={styles.image}
            />
          </div>

          <div style={styles.imageWrapper}>
            <img
              src={DigitalImage2}
              alt="Digital Marketing 2"
              style={styles.image}
            />
          </div>
        </div>

        {/* BUTTON */}
        <button style={styles.button}>Book Free Demo Class</button>

        <h2 style={styles.sectionTitle}>Digital Marketing</h2>
        <p style={styles.paragraph}>
         Digital marketing encompasses strategies and tools to promote brands, products, and services across online platforms. It includes Search Engine Optimization (SEO), Content Marketing, Social Media Marketing, Email Campaigns, and Pay-Per-Click (PPC) advertising. By leveraging data-driven insights and targeted campaigns, businesses can enhance brand visibility, engage audiences, and drive conversions.
         </p>

        <h2 style={styles.sectionTitle}>Why Choose Digital Marketing?</h2>
        <p style={styles.paragraph}>
        Digital marketing is essential for businesses to thrive in today's online-driven world. It allows brands to reach global audiences, track performance with analytics, and optimize campaigns in real time. Skills in digital marketing open doors to a dynamic, high-demand career in SEO, social media, content creation, advertising, and more.
        </p>

        <h2 style={styles.sectionTitle}>Our Training & Services</h2>
        <p style={styles.paragraph}>
      Our comprehensive digital marketing course covers SEO, social media management, content creation, email marketing, PPC campaigns, and analytics. You will learn practical techniques to plan, execute, and measure successful digital campaigns. Hands-on projects provide real-world experience to apply your skills effectively. </p>
        <h2 style={styles.sectionTitle}>Career Opportunities</h2>
        <p style={styles.paragraph}>
        Completing our Digital Marketing course prepares you for roles such as Digital Marketing Specialist, SEO Analyst, Social Media Manager, Content Strategist, or PPC Campaign Manager. With businesses increasingly investing in online marketing, skilled digital marketers are in high demand worldwide. </p>
      </div>
    </div>
  );
};

export default DigitalMarketing;