import React from "react";
import RecruitmentImage1 from "../assets/Recruitment5.png";
import RecruitmentImage2 from "../assets/Recruitment2.png";

const RecruitmentPage = () => {
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

    sectionTitle: {
      marginTop: "25px",
      marginBottom: "10px",
      color: "black",
    },

    paragraph: {
      marginBottom: "15px",
      lineHeight: "1.6",
    },

    listTitle: {
      marginTop: "20px",
      marginBottom: "10px",
    },

    list: {
      paddingLeft: "25px",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>Recruitment</h1>

        {/* IMAGE SECTION */}
        <div style={styles.imageContainer}>
          <img
          src={RecruitmentImage1}
            alt="Recruitment 1"
            style={styles.image}
          />
          <img
            src={RecruitmentImage2}
            alt="Recruitment 2"
            style={styles.image}
          />
        </div>


        <h2 style={styles.sectionTitle}>
         Connecting Talent. Powering Businesses.
        </h2>

        <p style={styles.paragraph}>
         We provide strategic recruitment solutions that help organizations hire the right talent and professionals find the right opportunities. Our approach combines industry expertise, smart screening, and efficient processes to deliver quality-driven hiring outcomes.

We understand that the right people drive success—so we focus on identifying candidates who not only meet technical requirements but also align with your company’s culture and long-term goals.
        </p>

        
        <h2 style={styles.sectionTitle}>
        Our Recruitment Services
        </h2>
            <p style={styles.paragraph}>
              <ul>
              <li>IT & Non-IT Recruitment</li>
<li>Domestic & International Hiring</li>
<li>Permanent & Contract Staffing</li>
<li>Bulk & Project-Based Hiring</li>
<li>Executive Search & Talent Acquisition</li>
</ul>
            </p>

        

      

        
      </div>
    </div>
  );
};

export default RecruitmentPage;