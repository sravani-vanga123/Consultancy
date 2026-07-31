import React from "react";
import AustraliaImage1 from "../assets/australia2.PNG";
import AustraliaImage2 from "../assets/australia1.PNG";

const AustraliaPage = () => {
  const cardsData = [
    {
      title: "Study in Australia",
      text:
        " Experience world-class education in Australia—where academic excellence meets lifestyle. With globally recognized universities, innovative learning, and a vibrant multicultural environment, Australia offers a truly enriching student journey.",
    },
    {
      title: "Why Study in Australia?",
    points:[

      "Globally ranked universities and programs",
"Industry-focused, practical learning approach",
"Safe, welcoming, and student-friendly environment",
"Exceptional quality of life and global exposure"

    ],
    },
    {
      title: "Opportunities in Australia",
      points: [
        "Post-Study Work Visa (PSWV) opportunities for global career growth.",
        "Pathways to Permanent Residency (PR) for long-term settlement.",
        "Practical, hands-on learning across diverse fields.",
        "Health coverage through OSHC for international students.",
        "Access to iconic natural landscapes.",
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

    imageContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "10px", // ✅ 10px gap
      maxWidth: "1200px",
      margin: "0 auto 30px",
    },

    image: {
      width: isMobile ? "100%" : "50%", // ✅ equal width
      height: "350px",
      objectFit: "cover",
      display: "block",
      objectPosition: "center",
      borderRadius: "10px", // optional UI
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
      <h1 style={styles.title}>AUSTRALIA</h1>

      {/* IMAGES */}
      <div style={styles.imageContainer}>
        <img src={AustraliaImage1} alt="Australia1" style={styles.image} />
        <img src={AustraliaImage2} alt="Australia2" style={styles.image} />
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

export default AustraliaPage;