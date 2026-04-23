import React from "react";

const Card = ({ title, description, icon }) => {
  return (
    <div
      style={{
        background: "#A020F0",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
        flex: "1 1 200px",
        transition: "0.3s",
      }}
    >
      <div style={{ fontSize: "30px", marginBottom: "10px" }}>
        {icon}
      </div>

      <h3 style={{ margin: "10px 0", color: "#A020F0" }}>
        {title}
      </h3>

      <p style={{ fontSize: "14px", color: "#555" }}>
        {description}
      </p>
    </div>
  );
};

export default Card;