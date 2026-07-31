import React from "react";
import DistanceEducationImage1 from "../assets/distance2.png";
import DistanceEducationImage2 from "../assets/distance3.png";

const DistanceEducationPage = () => {
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
      textAlign: "left",
      maxWidth: "1200px",
      margin: "0 auto",
    },

    mainTitle: {
      textAlign: "center",
      margin: "20px 0",
    },

    imageContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "10px",
      maxWidth: "1200px",
      margin: "0 auto 30px",
    },

    image: {
      width: isMobile ? "100%" : "50%",
      height: "350px",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "10px",
    },

    sectionTitle: {
      marginTop: "25px",
      marginBottom: "10px",
      color: "black",
    },

    listTitle: {
      marginTop: "15px",
      marginBottom: "5px",
      color: "black",
    },

    list: {
      paddingLeft: "25px",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>Distance Education</h1>

        {/* IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <img
            src={DistanceEducationImage1}
            alt="Distance Education 1"
            style={styles.image}
          />

          <img
            src={DistanceEducationImage2}
            alt="Distance Education 2"
            style={styles.image}
          />
        </div>

        <h2 style={styles.sectionTitle}>
          “Study From Anywhere. Build Your Future Everywhere.”
        </h2>

        <p>
          Moin Consultancy offers trusted distance education programs in Andhra Pradesh,
          helping students and working professionals earn recognized degrees without
          compromising their current responsibilities.
        </p>

        <p>
          Whether you want to continue your education, upgrade your skills, or switch careers —
          our flexible learning solutions are designed to fit your life.
        </p>

        <h2 style={styles.sectionTitle}>COURSES WE OFFER</h2>

        <h3 style={styles.listTitle}>Undergraduate Programs</h3>
        <ul style={styles.list}>
          <li>B.A (Bachelor of Arts)</li>
          <li>B.Com (Bachelor of Commerce)</li>
          <li>BBA (Bachelor of Business Administration)</li>
          <li>B.Tech (Credit Transfer Program)</li>
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