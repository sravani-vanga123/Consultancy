import React from "react";
import CanadaImage1 from "../assets/canada1.png";
import CanadaImage2 from "../assets/canada2.png"; // 👈 add second image

const Canada = () => {
  const cardsData = [
    {
      title: "Study in Canada",
      text:
        "Discover world-class education in Canada—where academic excellence meets innovation and opportunity. With globally recognized universities, affordable tuition, and a welcoming multicultural environment, Canada offers a pathway to both career success and quality living.",
    },
    {
      title: "Why Study in Canada?",
     points: [
      "High-quality education at competitive costs",
"Safe, inclusive, and multicultural society",
"Industry-focused programs with practical learning",
"Globally recognized degrees and career pathways"

     ],
    },
    {
      title: "Opportunities in Canada",
      points: [
        "Post-Graduation Work Permit (PGWP) for career opportunities.",
        "Pathways to Permanent Residency (PR) for long-term settlement.",
        "Co-op and internship programs for practical experience.",
        "Affordable tuition compared to other countries.",
        "Safe, multicultural, and student-friendly environment.",
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

    // ✅ SAME AS AUSTRALIA & UK
    imageContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "10px", // 👈 exact gap
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
      <h1 style={styles.title}>CANADA</h1>

      {/* ✅ TWO IMAGES */}
      <div style={styles.imageContainer}>
        <img src={CanadaImage1} alt="Canada1" style={styles.image} />
        <img src={CanadaImage2} alt="Canada2" style={styles.image} />
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

export default Canada;