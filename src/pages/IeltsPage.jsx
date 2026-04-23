import React from "react";
import ieltsImage from "../assets/ielts.png";

const IeltsPage = () => {
  // 🔹 Styles object
  const styles = {
    container: {
      margin: 0,
      padding: 0,
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      backgroundColor: "beige",

       minHeight: "100vh", 
       padding: "10px",
    },

    title: {
      margin: 0,
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      color: "black",
      textAlign: "center",
    },

    image: {
      width: "100%",
      maxWidth: "1500px",
      height: "300px",
      margin: 0,
      display: "block",
    },

    button: {
      padding: "12px 28px",
      fontSize: "16px",
      backgroundColor: "purple",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      margin: "20px auto 30px auto",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      display: "block",
    },

    content: {
      fontSize: "18px",
      lineHeight: "1.8",
      textAlign: "left",
      maxWidth: "900px",
      margin: "20px auto",
      paddingLeft: "40px",
      paddingRight: "60px",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      color: "black",
    },
  };

  return (
    <div style={styles.container}>
      {/* Heading */}
      <h1 style={styles.title}>IELTS</h1>

      {/* Image */}
      <img
        src={ieltsImage}
        alt="IELTS Coaching"
        style={styles.image}
      />

      {/* Button */}
      <button style={styles.button}>Book Free Demo Classes</button>

      {/* Content */}
      <div style={styles.content}>
        <h2>IELTS</h2>
        <p>
          Moin Consultancy offers specialized IELTS preparation courses designed
          to help you succeed in all four sections: Listening, Reading, Writing,
          and Speaking. Our experienced trainers provide individualized coaching,
          focusing on test-taking strategies, time management, and building your
          language skills. With practice tests, feedback sessions, and
          personalized learning plans, we ensure you’re fully equipped to reach
          your target band score, increasing your chances of studying or working
          abroad. Start your journey to IELTS success with us!
        </p>

        <h2>IELTS Training</h2>
        <p>
          At Moin Consultancy, our IELTS training program is designed to help you
          master the exam and achieve your desired band score. Our skilled
          instructors offer personalized coaching across all test sections—
          Listening, Reading, Writing, and Speaking. We provide targeted practice
          exercises, mock tests, and strategic feedback to enhance your
          performance. With our comprehensive approach and flexible schedules,
          you’ll be well-prepared for both academic and general IELTS exams,
          opening doors to study or work abroad.
        </p>
      </div>
    </div>
  );
};

export default IeltsPage;