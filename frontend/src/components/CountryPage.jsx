import React from "react";

const CountryPage = ({ title, images = [], cardsData = [], background = "#E6D6FF" }) => {
  const isMobile = window.innerWidth < 768;

  const styles = {
    page: {
      margin: 0,
      padding: "20px",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      background: background,
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
      width: isMobile ? "100%" : "50%",
      height: "350px",
      objectFit: "cover",
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

    list: {
      paddingLeft: "18px",
      marginTop: "8px",
      fontSize: "18px",
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>{title}</h1>

      {/* IMAGES */}
      <div style={styles.imageContainer}>
        {images.map((img, i) => (
          <img key={i} src={img} alt="country" style={styles.image} />
        ))}
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

export default CountryPage;