import React from "react";
import EuropeImage1 from "../assets/Europe1.png";
import EuropeImage2 from "../assets/Europe2.png"; // 👈 add second image

const Europe = () => {
  const cardsData = [
    {
      title: "Study in Europe",
      text:"Explore a world of academic excellence in Europe—where innovation, heritage, and opportunity come together. With globally respected universities, diverse programs, and vibrant cultures, Europe offers a truly transformative education experience."
        
    },
    {
      title: "Why Study in Europe?",
      points: [
        "Prestigious universities with global recognition",
"Strong focus on research and innovation",
"Diverse, multicultural learning environment",
"Affordable education with scholarship options",

      ],
     
    },
    {
      title: "Opportunities in Europe",
      points: [
        "Wide range of courses across multiple disciplines and languages.",
        "Affordable tuition fees and strong scholarship options.",
        "Exposure to diverse cultures, languages, and history.",
        "Top universities with strong research and industry connections.",
        "Opportunities to travel and explore multiple countries easily.",
      ],
    },
  ];

  const isMobile = window.innerWidth < 768;

  const styles = {
    page: {
      margin: 0,
      padding: "20px",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      background: "linear-gradient(135deg, #e6d9f5, #efe2d1)",
      minHeight: "100vh",
    },

    title: {
      textAlign: "center",
      fontSize: isMobile ? "22px" : "32px",
      marginBottom: "20px",
      color: "black",
    },

    // ✅ SAME IMAGE LAYOUT
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

    cardsContainer: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  card: {
    background: "linear-gradient(135deg, #A020F0, #EDE8D0)",
    padding: "18px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    color: "white",
    width: "100%",
  },

  cardTitle: {
    fontSize: "20px",   
    marginBottom: "8px",
    fontWeight: "600",
  },

  cardText: {
    fontSize: "18px",   
    lineHeight: "1.5",
  },

  points: {
    fontSize: "18px",  
  },

  list: {
    paddingLeft: "18px",
    marginTop: "8px",
     fontSize: "18px",
  },
};


  return (
    <div style={styles.page}>
      <h1 style={styles.title}>EUROPE</h1>

      {/* ✅ TWO IMAGES ON TOP */}
      <div style={styles.imageContainer}>
        <img src={EuropeImage1} alt="Europe1" style={styles.image} />
        <img src={EuropeImage2} alt="Europe2" style={styles.image} />
      </div>

      {/* ✅ CARDS BELOW */}
      <div style={styles.cardsContainer}>
        {cardsData.map((card, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.cardTitle}>{card.title}</h2>

            {card.text && <p style={styles.cardText}>{card.text}</p>}

            {card.points && (
              <ul style={styles.list}>
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Europe;