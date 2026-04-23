import React from "react";
import USAImage1 from "../assets/USA1.png";
import USAImage2 from "../assets/USA61.png";

const USA = () => {
  const cardsData = [
    {
      title: "Study in USA",
      text:
        "The USA is a global leader in education, offering top-ranked universities, innovative learning, and diverse programs. With advanced research facilities and a multicultural environment, students gain the skills and exposure needed for a successful global career.",
    },
    {
      title: "Why Study in USA?",
      points:[
        "Access to world-class universities and programs",
"Strong focus on innovation and practical learning",
"Global exposure with a multicultural student community",
"Excellent career and networking opportunities"
      ]
       
    },
    {
      title: "Opportunities in USA",
      points: [
        "Contributes to 30%+ of global research output.",
        "Hosts 1.2 million+ international students.",
        "Wide range of scholarships and financial aid.",
              "Equipped with advanced technology and modern facilities.",
      ],
    },
    


  ];

  const isMobile = window.innerWidth < 768;

  const styles = {
    page: {
      margin: 0,
      padding: "20px",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      background: "#E6D6FF",
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
      gap: "10px", // 👈 consistent
      maxWidth: "1200px",
      margin: "0 auto 30px",
    },

    
    image: {
      width: isMobile ? "100%" : "50%", // 👈 equal size
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
      <h1 style={styles.title}>USA</h1>

      {/* IMAGES */}
      <div style={styles.imageContainer}>
        <img src={USAImage1} alt="USA1" style={styles.image} />
        <img src={USAImage2} alt="USA2" style={styles.image} />
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

export default USA;