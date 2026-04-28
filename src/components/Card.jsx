import React from "react";

const Card = ({ title, text, points }) => {
  const styles = {
    card: {
      background: "linear-gradient(135deg, #A020F0, #EDE8D0)",
      padding: "18px",
      borderRadius: "12px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
      color: "#1a1a1a", // ✅ better readability
      width: "100%",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      transition: "0.3s",
      cursor: "pointer",
    },
    title: {
      fontSize: "20px",
      marginBottom: "8px",
      fontWeight: "600",
    },
    text: {
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
    <div
      style={styles.card}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-5px)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(0)")
      }
    >
      <h2 style={styles.title}>{title}</h2>

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