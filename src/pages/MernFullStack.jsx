import React from "react";
import mImg from "../assets/m-1.png";

const MernFullStack = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      }}
    >
      {/* Heading directly below navbar */}
      <h1 style={{ margin: 0, textAlign: "center" }}>MERN Full Stack</h1>

      {/* Image directly below heading */}
      <img
        src={mImg}
        alt="MERN Full Stack"
        style={{
          width: "100%",       // responsive width
          maxWidth: "1000px",  // max width
          height: "500px",
          margin: 0,           // remove extra spacing
          display: "block",    // remove inline spacing
        }}
      />

      {/* Content Section */}
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
         <button style={{ padding: "12px 28px", fontSize: "16px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", marginBottom: "50px", fontFamily: "Futura, Trebuchet MS, Arial, sans-serif", }} > Book Free Demo Classes </button>
        <h2>MERN Full Stack Development</h2>
        <p>
          MERN Full Stack Development is a comprehensive framework for building
          dynamic and scalable web applications using JavaScript. It combines
          four powerful technologies: MongoDB, Express.js, React, and Node.js.
          MongoDB serves as a flexible NoSQL database for storing data,
          Express.js handles backend logic and APIs, React is used to create
          fast and interactive user interfaces, and Node.js enables server-side
          execution using JavaScript. This unified stack allows developers to
          work seamlessly across frontend and backend, making development
          faster and more efficient.
        </p>

        <h2>Why Choose MERN Stack?</h2>
        <p>
          The MERN stack is highly popular because it uses a single programming
          language—JavaScript—throughout the entire development process. This
          reduces complexity and improves productivity. It is ideal for
          developing modern applications such as e-commerce platforms, social
          media apps, dashboards, and enterprise solutions. MERN applications
          are known for their performance, scalability, and responsiveness,
          making them suitable for real-world business needs.
        </p>

        <h2>Our Training & Services</h2>
        <p>
          We provide expert MERN Full Stack training and development services,
          covering everything from basic concepts to advanced application
          building. Our program includes hands-on practice with real-time
          projects, ensuring you gain practical experience. You will learn how
          to design responsive user interfaces with React, build secure APIs
          using Node.js and Express, and manage databases effectively with
          MongoDB.
        </p>

        <p>
          Our experienced trainers guide you through each step with
          personalized support, mock projects, and interview preparation. By
          the end of the course, you will be able to build complete web
          applications independently and be ready for job opportunities in
          full stack development.
        </p>

        <h2>Career Opportunities</h2>
        <p>
          After completing MERN Full Stack training, you can explore roles such
          as Frontend Developer, Backend Developer, Full Stack Developer, or
          Software Engineer. With the growing demand for web applications,
          MERN developers are highly sought after in startups as well as large
          IT companies.
        </p>
      </div>
    </div>
  );
};

export default MernFullStack;