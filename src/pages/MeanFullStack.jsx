import React from "react";
import meanImg from "../assets/mean.png"; // make sure this file exists

const MeanFullStack = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      }}
    >
      {/* Heading */}
      <h1 style={{ margin: 0, textAlign: "center" }}>MEAN Full Stack</h1>

      {/* Image */}
      <img
        src={meanImg}
        alt="MEAN Full Stack"
        style={{
          width: "100%",       
          maxWidth: "1000px",
          height: "500px",
          margin: 0  ,
          display: "block",
          objectFit: "cover",
        }}
      />

      {/* Content */}
      <div
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          textAlign: "left",
          maxWidth: "900px",
          margin: "20px auto",
          paddingLeft: "40px",
          paddingRight: "60px",
        }}
      >
        {/* Button */}
        <button
          style={{
            padding: "12px 28px",
            fontSize: "16px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginBottom: "50px",
          }}
        >
          Book Free Demo Classes
        </button>

        <h2>MEAN Full Stack Development</h2>
        <p>
          MEAN Full Stack Development is a robust framework for building scalable web applications entirely in JavaScript. It integrates four key technologies: MongoDB for database management, Express.js for backend APIs, Angular for dynamic front-end interfaces, and Node.js for server-side execution. This stack ensures a unified development workflow, making applications faster, maintainable, and highly performant.
        </p>

        <h2>Why Choose MEAN Stack?</h2>
        <p>
          The MEAN stack is popular for its single-language approach (JavaScript) across all layers of development. It simplifies collaboration, reduces complexity, and accelerates project timelines. MEAN is ideal for enterprise applications, e-commerce platforms, real-time dashboards, and dynamic web apps. Its scalability and performance make it a preferred choice for modern businesses.
        </p>

        <h2>Our Training & Services</h2>
        <p>
          We provide expert MEAN Full Stack training and development services, covering beginner to advanced concepts. Our programs include hands-on projects, practical coding exercises, and live demonstrations. You will learn to create responsive Angular interfaces, build secure Node.js/Express APIs, and manage MongoDB databases efficiently.
        </p>

        <p>
          Our trainers provide personalized guidance, project reviews, and interview preparation. By the end of the course, you will be able to build full-featured applications independently, making you ready for roles in top IT companies.
        </p>

        <h2>Career Opportunities</h2>
        <p>
          After completing MEAN Full Stack training, you can explore careers such as Frontend Developer, Backend Developer, Full Stack Developer, or Software Engineer. With growing demand for web applications, MEAN developers are sought after in startups and large enterprises alike.
        </p>
      </div>
    </div>
  );
};

export default MeanFullStack;