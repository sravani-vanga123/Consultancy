import React from "react";
import OnlineTrainingImg1 from "../assets/online.png";
import OnlineTrainingImg2 from "../assets/online2.png";

const OnlineTrainingPage = () => {
  const isMobile = window.innerWidth < 768;

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
        <h1 style={styles.title}>Online Training</h1>

        {/* ✅ FIXED IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <div style={styles.imageWrapper}>
            <img
              src={OnlineTrainingImg1}
              alt="Online Training 1"
              style={styles.image}
            />
          </div>

          <div style={styles.imageWrapper}>
            <img
              src={OnlineTrainingImg2}
              alt="Online Training 2"
              style={styles.image}
            />
          </div>
        </div>

        {/* Button */}
        <button style={styles.button}>
          Book Free Demo Class
        </button>

        {/* Content */}
        <div style={styles.content}>
          <h2 style={styles.sectionTitle}>Online Training</h2>

          <p>
            Online training is a modern learning method that allows students to
            access courses and materials through the internet. It offers
            flexibility, convenience, and the ability to learn from anywhere at any time.
          </p>

          <p>
            Learners can attend live classes, watch recorded sessions, and complete
            assignments at their own pace, making it ideal for students and working professionals.
          </p>

          <h2 style={styles.sectionTitle}>We Offer Online Training</h2>

          <p>
            Our programs include expert-led sessions, real-time projects, and practical
            exercises. You gain industry-ready skills with complete guidance and support.
          </p>

          <p>
            With flexible schedules and personalized mentoring, we help you achieve
            your learning and career goals effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlineTrainingPage;