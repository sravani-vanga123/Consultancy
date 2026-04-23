import React from "react";

// Import images
import counsellingImage from "../assets/counselling.png";
import processImage from "../assets/process.png"
 import moveAbroad from "../assets/moveAbroad.png";

const Processsection = [
  {
    title: "web development",
    description:
      "We build fast, responsive, and secure websites that strengthen your digital presence and support business growth."
  },
  {
    title: "Cyber Security",
    description:
      "We protect your business with advanced cybersecurity solutions, ensuring data security, threat prevention, and reliable system protection for safe and uninterrupted operations."
  },
  {
    title: "Cloud Services",
    description:
    "We provide scalable and secure cloud solutions that enhance flexibility, optimize performance, and support seamless business operations in a digital environment."
  },
 
  ];

const ProcessSection = () => {
  const cardWidth = 280;
  const cardHeight = 350;

  return (
    <section
      style={{
        maxWidth: "2000px",
        margin: "0px auto",
        display: "flex",
        gap: "80px",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "60px 20px",
        background: "beige",
        borderRadius: "12px",
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      }}
    >
      {Processsection.map(({ title, description, image }, index) => (
        <div
          key={index}
          style={{
            background: "beige",
            borderRadius: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            padding: "20px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transition: "transform 0.3s, box-shadow 0.3s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
          }}
        >
          <img
            src={image}
            alt={title}
            style={{ width: "100px", height: "100px", marginBottom: "15px" }}
          />
          <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>{title}</h3>
          <p style={{ fontSize: "14px", color: "#555", flexGrow: 1 }}>
            {description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ProcessSection;