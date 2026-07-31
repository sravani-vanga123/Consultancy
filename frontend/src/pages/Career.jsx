import React from "react";
import CareerImage from "../assets/career1.Png";
import personImage from "../assets/person.png";

const Career = () => {
  const styles = {
    container: {
      backgroundColor: "beige",
      padding: 0, // remove top/bottom padding
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    },
    heading: {
      margin: 0, // remove top/bottom margin
      textAlign: "center",
    },
    mainImageWrapper: {
      display: "flex",
      justifyContent: "center",
      margin: 0, // remove spacing below heading
    },
    mainImage: {
      width: "1500px",
      height: "400px",
      objectFit: "cover",
      margin: 0, // remove extra margin
      display: "block", // remove inline spacing
    },
    content: {
      fontSize: "18px",
      lineHeight: "1.8",
      textAlign: "left",
      maxWidth: "900px",
      margin: "20px auto", // keep small spacing from image
      paddingLeft: "40px",
      paddingRight: "60px",
    },
    subHeadingCenter: {
      fontSize: "18px",
      lineHeight: "1.8",
      maxWidth: "900px",
      margin: "0 auto",
      paddingLeft: "40px",
      paddingRight: "60px",
      textAlign: "center",
    },
    flexContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      alignItems: "flex-start",
    },
    leftImageWrapper: {
      flex: "1 1 350px",
      textAlign: "center",
      minWidth: "300px",
    },
    leftImage: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
      borderRadius: "15px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    },
    rightContent: {
      flex: "2 1 500px",
      color: "#333",
      lineHeight: "2",
      fontSize: "18px",
      maxWidth: "700px",
      paddingLeft: "40px",
    },
    button: {
      backgroundColor: "blue",
      color: "black",
      border: "none",
      padding: "10px 25px",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "10px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      {/* Heading directly below navbar */}
      <h1 style={styles.heading}>Career</h1>

      {/* Large Image directly below heading */}
      <div style={styles.mainImageWrapper}>
        <img src={CareerImage} alt="Career" style={styles.mainImage} />
      </div>

      {/* Content */}
      <div style={styles.content}>
        <h2>Shape Your Career</h2>
        <p>
          Explore dynamic career opportunities with us at Moin Consultancy. We
          specialize in empowering individuals through expert training and global
          recruitment services.
        </p>
      </div>

      {/* Subheading */}
      <div style={styles.subHeadingCenter}>
        <h2>We Are Hiring</h2>
      </div>

      {/* Flex Section - Image + Job Description */}
      <div style={styles.flexContainer}>
        {/* Left Column - Image */}
        <div style={styles.leftImageWrapper}>
          <img src={personImage} alt="person" style={styles.leftImage} />
        </div>

        {/* Right Column - Job Description */}
        <div style={styles.rightContent}>
          <h3>Business Development Executive</h3>
          <p style={{ marginBottom: 20 }}>
            We are seeking a Business Development Executive with a minimum of 2
            years of experience. The ideal candidate should have excellent
            interpersonal skills, strong communication abilities, and a strategic
            mindset. Proficiency in relationship building, negotiation, and the
            ability to identify and seize business opportunities is essential for
            this role.
          </p>
          <button style={styles.button}>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Career;