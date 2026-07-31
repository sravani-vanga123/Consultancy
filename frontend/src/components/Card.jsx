import React from "react";

const Card = ({ icon, title, text, points }) => {
  const styles = {
    card: {
      background:
        "linear-gradient(135deg, #EDE8D0 0%, #F7F4E8 50%, #E8E3C8 100%)",

      padding: "35px",

      borderRadius: "30px",

      // Height changes automatically according to content
      height: "auto",

      boxSizing: "border-box",

      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",

      color: "#1a1a1a",

      width: "100%",

      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",

      transition: "transform 0.3s ease, box-shadow 0.3s ease",

      cursor: "pointer",

      textAlign: "center",

      display: "flex",

      flexDirection: "column",

      alignItems: "center",
    },

    iconBox: {
      width: "70px",

      height: "70px",

      background: "rgba(255, 255, 255, 0.25)",

      display: "flex",

      alignItems: "center",

      justifyContent: "center",

      borderRadius: "20px",

      fontSize: "30px",

      color: "#111",

      marginBottom: "25px",

      flexShrink: 0,
    },

    title: {
      fontSize: "25px",

      margin: "0 0 18px",

      fontWeight: "700",

      color: "#1a1a1a",

      letterSpacing: "1px",
    },

    text: {
      fontSize: "18px",

      lineHeight: "1.7",

      color: "#222",

      margin: "0",
    },

    list: {
      textAlign: "left",

      paddingLeft: "20px",

      marginTop: "10px",

      marginBottom: "0",

      fontSize: "18px",

      lineHeight: "1.7",

      width: "100%",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";

        e.currentTarget.style.boxShadow =
          "0 15px 35px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";

        e.currentTarget.style.boxShadow =
          "0 8px 25px rgba(0, 0, 0, 0.08)";
      }}
    >
      {icon && <div style={styles.iconBox}>{icon}</div>}

      {title && <h3 style={styles.title}>{title}</h3>}

      {text && <p style={styles.text}>{text}</p>}

      {points && (
        <ul style={styles.list}>
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;