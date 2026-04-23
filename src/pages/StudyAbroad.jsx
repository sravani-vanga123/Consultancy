import React, { useState, useEffect } from "react";
import abroadImg from "../assets/abroad.png";
import GlobalnetworksImage from "../assets/global.png";
import cultureImage from "../assets/culture.png";
import communicationImage from "../assets/communication.png";
import LeadershipImage from "../assets/leader.png";
import LanguageImage from "../assets/language.png";
import CareerImage from "../assets/career.png";

// Country images
import USAImage from "../assets/USA.png";
import UKImage from "../assets/UK.png";
import EuropeImage from "../assets/Europe.png";
import NewZealandImage from "../assets/New-zealand.png";
import canadaImage from "../assets/canada.png";
import IrelandImage from "../assets/ireland.png";
import AustrliaImage from "../assets/Australia.png";
import UAEImage from "../assets/UAE.png";
import TurkeyImage from "../assets/Turkey.png";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faFileAlt,
  faTicketAlt,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";

function StudyAbroad() {
  // ✅ Responsive logic
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1024;


  const styles = {
    container: {
      backgroundColor: "beige",
      minHeight: "100vh",
      fontFamily: "Futura, Trebuchet MS, Arial",
      padding: "10px"
    },

    section: {
      marginTop: "20px"
    },

    header: {
      textAlign: "center"
    },

    heading: {
      fontSize: isMobile ? "24px" : "32px"
    },

    banner: {
      width: "100%",
      height: isMobile ? "250px" : isTablet ? "350px" : "500px",
      objectFit: "cover",
      borderRadius: "10px"
    },

    sectionTitle: {
      textAlign: "center",
      marginTop: "20px"
    },

    row: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      marginTop: "30px"
    },

    card: {
      width: isMobile ? "90%" : isTablet ? "45%" : "350px",
      textAlign: "center",
      padding: "15px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      background: "linear-gradient(135deg, #A020F0, #EDE8d0)"
    },

    cardImg: {
      width: "100%",
      height: "120px",
      objectFit: "cover",
      borderRadius: "10px"
    },

    countriesGrid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "repeat(2, 1fr)"
        : isTablet
        ? "repeat(3, 1fr)"
        : "repeat(4, 1fr)",
      gap: "20px",
      justifyItems: "center",
      marginTop: "30px"
    },

    countryCard: {
      textAlign: "center"
    },

    countryImg: {
      width: isMobile ? "120px" : "140px",
      height: isMobile ? "80px" : "90px",
      borderRadius: "10px"
    },

    stepsContainer: {
      textAlign: "center"
    },

    stepsRow: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
      marginTop: "30px"
    },

    stepCircle: {
      width: isMobile ? "70px" : "90px",
      height: isMobile ? "70px" : "90px",
      borderRadius: "50%",
      border: "2px solid black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 15px",
      fontSize: isMobile ? "20px" : "30px"
    }
  };

  // ✅ Data
  const rows = [
    [
      { img: GlobalnetworksImage, title: "Global Networks", text: "Global networks expand reach, facilitating cross-border partnerships and knowledge exchange." },
      { img: cultureImage, title: "Culture", text: "Culture shapes values, behaviors, and traditions, influencing societal interactions profoundly." },
      { img: communicationImage, title: "Communication", text: "Effective communication fosters understanding, collaboration, and successful relationship-building" }
    ],
    [
      { img: LeadershipImage, title: "Leadership", text: "Leadership drives success by inspiring, guiding, and motivating teams effectively." },
      { img: LanguageImage, title: "Language", text: "Language skills open doors to global communication and career opportunities." },
      { img: CareerImage, title: "Career Outlook", text: "Discover diverse career opportunities and pathways for future success." }
    ]
  ];

  const countries = [
    { img: USAImage, name: "USA" },
    { img: UKImage, name: "UK" },
    { img: EuropeImage, name: "Europe" },
    { img: NewZealandImage, name: "New Zealand" },
    { img: canadaImage, name: "Canada" },
    { img: IrelandImage, name: "Ireland" },
    { img: AustrliaImage, name: "Australia" },
    { img: UAEImage, name: "UAE" },
    { img: TurkeyImage, name: "Turkey" }
  ];

  return (
    <div style={styles.container}>

      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.heading}>Study Abroad</h1>
        <img src={abroadImg} alt="Study Abroad" style={styles.banner} />
      </div>

      {/* Why Study Abroad */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Study Abroad?</h2>

        {rows.map((row, rowIndex) => (
          <div key={rowIndex} style={styles.row}>
            {row.map((card, idx) => (
              <div key={idx} style={styles.card}>
                <img src={card.img} alt={card.title} style={styles.cardImg} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Countries */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Top Countries</h2>

        <div style={styles.countriesGrid}>
          {countries.map((country, idx) => (
            <div key={idx} style={styles.countryCard}>
              <img src={country.img} alt={country.name} style={styles.countryImg} />
              <h4>{country.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div style={styles.section}>
        <div style={styles.stepsContainer}>
          <h2>HOW WE WORK</h2>
          <h1>Streamlined Steps for Your Study Abroad Journey</h1>

          <div style={styles.stepsRow}>
            {[
              { icon: faUsers, step: "Step01", title: "Education Consultation" },
              { icon: faFileAlt, step: "Step02", title: "Study Plan" },
              { icon: faTicketAlt, step: "Step03", title: "Application Support" },
              { icon: faHandshake, step: "Step04", title: "Pre-Departure Prep" }
            ].map((item, idx) => (
              <div key={idx}>
                <div style={styles.stepCircle}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3>{item.step}</h3>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default StudyAbroad;