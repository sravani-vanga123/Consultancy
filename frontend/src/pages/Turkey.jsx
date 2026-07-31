import React from "react";
import TurkeyImage1 from "../assets/Turkey1.PNG";
import TurkeyImage2 from "../assets/Turkey2.PNG"; // 👈 add second image

const Turkey = () => {
  const cardsData = [
    {
      title: "Study in Turkey",
      text:
        "Turkey offers quality education with globally recognized universities, diverse programs, and affordable tuition. With scholarship opportunities, modern facilities, and a strategic location bridging Europe and Asia, students gain global exposure. A rich cultural heritage and vibrant lifestyle make it an enriching study destination.",
    },
    {
      title: "Why Study in Turkey?",
      points:[
        "Internationally recognized universities and programs",
"Affordable tuition with generous scholarships",
"Gateway between Europe and Asia",
"Rich cultural heritage with modern lifestyle"

      ],
    },
    {
      title: "Opportunities in Turkey",
      points: [
        "Cost-effective education with multiple scholarship options.",
        "Blend of Eastern and Western cultures.",
        "Strategic location for global exposure.",
        "Strong focus on innovation and industry collaboration.",
        "Innovation-driven universities with strong industry links.",
      ],
    },
  ];

  const isMobile = window.innerWidth < 768;

  const styles = {
    page: {
      margin: 0,
      padding: "20px",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      background: "linear-gradient(135deg, #faf7ff, #f7efe5)",
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
      <h1 style={styles.title}>TURKEY</h1>

      {/* ✅ TWO IMAGES ON TOP */}
      <div style={styles.imageContainer}>
        <img src={TurkeyImage1} alt="Turkey1" style={styles.image} />
        <img src={TurkeyImage2} alt="Turkey2" style={styles.image} />
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

export default Turkey;