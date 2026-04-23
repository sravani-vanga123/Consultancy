import React from "react";
import UAEImage1 from "../assets/UAE11.PNG";
import UAEImage2 from "../assets/UAE1.PNG"; 

const UAE = () => {
  const cardsData = [
    {
      title: "Study in UAE",
      text:
        "Studying in the UAE offers world-class education in a rapidly growing economy. With internationally accredited universities, modern facilities, and a multicultural environment, students gain valuable global exposure and career opportunities.",
    },
    {
      title: "Why Study in UAE?",
      points:[
       "Globally accredited universities and modern campuses",
"Strong focus on technology, business, and innovation",
"Multicultural environment with global exposure",
"Strategic location for international career growth"

      ],
    },
    {
      title: "Opportunities in UAE",
      points: [
        "Over 77,000 international students study in the UAE.",
        "Multiple free zones support education and career growth.",
        "High standard of living with modern infrastructure.",
        "Post-study work visa opportunities available.",
      ],
    },
  ];

  const isMobile = window.innerWidth < 768;

  const styles = {
    page: {
      margin: 0,
      padding: "20px",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    background: "#e8dccb",
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
      <h1 style={styles.title}>UAE</h1>

      {/* ✅ TWO IMAGES ON TOP */}
      <div style={styles.imageContainer}>
        <img src={UAEImage1} alt="UAE1" style={styles.image} />
        <img src={UAEImage2} alt="UAE2" style={styles.image} />
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

export default UAE;