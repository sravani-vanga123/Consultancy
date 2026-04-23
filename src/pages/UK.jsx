import React from "react";
import UKImage1 from "../assets/UK11.PNG";
import UKImage2 from "../assets/Uk2.PNG";

const UK = () => {
  const cardsData = [
    {
      title: "Study in UK",
      text:
        "Experience world-class education in the UK—home to globally prestigious universities and timeless academic excellence. With innovative learning, strong research focus, and a vibrant multicultural environment, the UK shapes future global leaders.",
    },
    {
      title: "Why Study in UK?",
     points:[
      "    Globally respected universities and degrees",
"Strong academic and research excellence",
"Inclusive, multicultural student environment",
"Wide range of modern, career-focused programs",

     ],
    },  
    {
      title: "Opportunities in UK",
      points: [
        "Two-year post-study work visa for graduates.",
        "Access to diverse job opportunities after graduation.",
        "Internship and placement support from universities.",
        "Part-time work opportunities during studies.",
      ],
    },
   
  ];

  const isMobile = window.innerWidth < 768;

  const styles = {
    page: {
      margin: 0,
      padding: "20px",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      background: "#B984DB",
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
      gap: "10px", 
      maxWidth: "1200px",
      margin: "0 auto 30px",
    },

   
    image: {
      width: isMobile ? "100%" : "50%", // equal size
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
      <h1 style={styles.title}>UK</h1>

      {/* ✅ IMAGES WRAPPED IN CONTAINER */}
      <div style={styles.imageContainer}>
        <img src={UKImage1} alt="Uk1" style={styles.image} />
        <img src={UKImage2} alt="Uk2" style={styles.image} />
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

export default UK;