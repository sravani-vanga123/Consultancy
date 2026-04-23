import React from "react";
import NewZealandImage1 from "../assets/New-Zealand12.png";
import NewZealandImage2 from "../assets/New-Zealand2.png"; // 👈 add second image

const NewZealand = () => {
  const cardsData = [
    {
      title: "Study in New Zealand",
      text:
        "Discover a world-class education in New Zealand—where innovation, research, and natural beauty come together. With globally recognized universities and a supportive learning environment, students gain both academic excellence and a truly enriching life experience.",
    },
    {
      title: "Why Study in New Zealand?",
      points:[
"Globally recognized degrees and quality education",
"Innovative, research-driven learning approach",
"Safe, welcoming, and inclusive environment",
"Balanced lifestyle with exceptional quality of life",


      ],
    },
      
    {
      title: "Opportunities in New Zealand",
      points: [
        "Work part-time during studies and full-time during breaks.",
        "Globally recognized qualifications and strong research focus.",
        "Safe and student-friendly environment.",
        "Practical learning and industry-relevant programs.",
        "Beautiful landscapes and high quality of life.",
        "Post-study work opportunities for international students.",
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
      <h1 style={styles.title}>NEW ZEALAND</h1>

      {/* ✅ TWO IMAGES */}
      <div style={styles.imageContainer}>
        <img src={NewZealandImage1} alt="NZ1" style={styles.image} />
        <img src={NewZealandImage2} alt="NZ2" style={styles.image} />
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

export default NewZealand;