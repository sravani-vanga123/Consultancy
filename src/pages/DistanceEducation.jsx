import React from "react";
import DistanceEducationImage from "../assets/Distance-Education.png";

const DistanceEducationPage = () => {
  // First-level styles
  const styles = {
    page: {
      backgroundColor: "beige",
      minHeight: "100vh",
      padding: 0,
      margin: 0,
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    },
    container: {
      padding: "0px",
      textAlign: "left",
    },
    mainTitle: {
      textAlign: "center",
      margin: 0,
      padding: "0px",
    },
    heroImage: {
      width: "100%",
      maxWidth: "1500px",
      height: "300px",
      objectFit: "cover",
      display: "block",
      margin: "0 auto",
    },
    sectionTitle: {
      marginTop: "20px",
      marginBottom: "10px",
    },
    listTitle: {
      marginTop: "15px",
      marginBottom: "5px",
    },
    list: {
      paddingLeft: "40px",
    
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>Distance Education</h1>
        <img
          src={DistanceEducationImage}
          alt="DistanceEducation"
          style={styles.heroImage}
        />

        <h2 style={styles.sectionTitle}>
          “Study From Anywhere. Build Your Future Everywhere.”
        </h2>

        <p>
          Moin Consultancy offers trusted distance education programs in
          Andhra Pradesh, helping students and working professionals earn
          recognized degrees without compromising their current responsibilities.
        </p>
        <p>
          Whether you want to continue your education, upgrade your skills, or
          switch careers — our flexible learning solutions are designed to fit
          your life.
        </p>

        <h2 style={styles.sectionTitle}>COURSES WE OFFER</h2>

        <h3 style={styles.listTitle}>Undergraduate Programs</h3>
        <ul style={styles.list}>
          <li>B.A (Bachelor of Arts)</li>
          <li>B.Com (Bachelor of Commerce)</li>
          <li>BBA (Bachelor of Business Administration)</li>
          <li>B.TECH (Credit Transfer Program)</li>
        </ul>

        <h3 style={styles.listTitle}>Postgraduate Programs</h3>
        <ul style={styles.list}>
          <li>M.A (Master of Arts)</li>
          <li>M.Com (Master of Commerce)</li>
          <li>MBA (Master of Business Administration)</li>
        </ul>

        <h3 style={styles.listTitle}>Professional & Skill-Based Courses</h3>
        <ul style={styles.list}>
          <li>Digital Marketing</li>
          <li>Computer Applications</li>
          <li>Certification Programs</li>
        </ul>
      </div>
    </div>
  );
};

export default DistanceEducationPage;