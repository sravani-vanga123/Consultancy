import React from "react";
import IeltsImage1 from "../assets/ielts1.PNG";
import IeltsImage2 from "../assets/ielts22.png";

const IeltsPage = () => {
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

    button: {
      padding: "12px 28px",
      fontSize: "16px",
      backgroundColor: "purple",
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
        <h1 style={styles.mainTitle}>IELTS</h1>

        {/* IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <img
            src={IeltsImage1}
            alt="IELTS Training 1"
            style={styles.image}
          />
          <img
            src={IeltsImage2}
            alt="IELTS Training 2"
            style={styles.image}
          />
        </div>

        {/* CTA BUTTON */}
        <button style={styles.button}>Book Free Demo Classes</button>

        <h2 style={styles.sectionTitle}>IELTS Coaching</h2>
        <p style={styles.paragraph}>
         Moin Consultancy offers specialized IELTS preparation courses designed to help you succeed in all four sections: Listening, Reading, Writing, and Speaking. Our experienced trainers provide individualized coaching, focusing on test-taking strategies, time management, and building your language skills. With practice tests, feedback sessions, and personalized learning plans, we ensure you’re fully equipped to reach your target band score, increasing your chances of studying or working abroad. Start your journey to IELTS success with us!
        </p>

        
        <h2 style={styles.sectionTitle}>IELTS Training</h2>
        <p style={styles.paragraph}>
          At Moin Consultancy, our IELTS training program is designed to help you master the exam and achieve your desired band score. Our skilled instructors offer personalized coaching across all test sections— Listening, Reading, Writing, and Speaking. We provide targeted practice exercises, mock tests, and strategic feedback to enhance your performance. With our comprehensive approach and flexible schedules, you’ll be well-prepared for both academic and general IELTS exams, opening doors to study or work abroad.
        </p>

      </div>
    </div>
  );
};

export default IeltsPage;