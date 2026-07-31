import React from "react";
import IrelandImage1 from "../assets/Ireland1.png";
import IrelandImage2 from "../assets/Ireland2.png";

const Ireland = () => {
  const cardsData = [
    {
      title: "Study in Ireland",
      text:
        "Step into Europe’s innovation hub with Ireland—where world-class education meets global career opportunities. With internationally recognized universities and strong industry connections, Ireland offers a dynamic and future-focused learning experience."
    },
    {
      title: "Why Study in Ireland?",
      points:[
"Globally recognized universities and programs",
"Strong focus on innovation and research",
"Friendly, inclusive, and vibrant environment",
"Direct access to leading global industries"
      ],
    },
    {
      title: "Opportunities in Ireland",
      points: [
        "Home to world-class universities with strong global rankings.",
        "Post-study work opportunities for international students.",
        "Part-time work allowed during studies.",
        "Strong tech and pharma industry connections.",
        "Rich culture, literature, and scenic landscapes.",
      ],
    },
  ];

  const isMobile = window.innerWidth < 768;

  const styles = {
    page: {
      margin: 0,
      padding: "20px",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      background: "linear-gradient(135deg, #f0e6ff, #f5e6d3)",
      minHeight: "100vh",
    },

    title: {
      textAlign: "center",
      fontSize: isMobile ? "22px" : "32px",
      marginBottom: "20px",
      color: "black",
    },

    // ✅ FIXED
    imageContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "10px", // 👈 consistent gap
      maxWidth: "1200px",
      margin: "0 auto 30px",
    },

    // ✅ FIXED
    image: {
      width: isMobile ? "100%" : "50%", // 👈 equal width
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
      <h1 style={styles.title}>IRELAND</h1>

      {/* IMAGES */}
      <div style={styles.imageContainer}>
        <img src={IrelandImage1} alt="Ireland1" style={styles.image} />
        <img src={IrelandImage2} alt="Ireland2" style={styles.image} />
      </div>

      {/* CARDS */}
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

export default Ireland;