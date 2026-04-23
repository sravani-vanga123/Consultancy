import React from "react";
import pythonImg from "../assets/python.png"; // make sure this image exists in src/assets

const PythonFullStack = () => {
  return (
    <div style={{ backgroundColor: "beige", minHeight: "100vh" }}>
    <div style={{ textAlign: "center", fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",  margin: "0px auto",}}>
      <h1 style={{ marginBottom: "30px", margin: "0px auto", }}>Python Full Stack</h1>

      {/* Large Image */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
           margin: "0px auto",
        }}
      >
        <img
          src={pythonImg}
          alt="Python Full Stack"
          style={{ width: "1000px", height: "500px", objectFit: "cover" }}
        />
      </div>

      {/* Button */}
      <button
        style={{
          padding: "12px 28px",
          fontSize: "16px",
          backgroundColor: "#4B8BBE", // Python blue
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "50px",
        }}
      >
        Book Free Demo Class
      </button>

      {/* Content */}
      <div
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          textAlign: "left",
          maxWidth: "900px",
          margin: "0 auto",
          paddingLeft: "40px", // smaller left space
          paddingRight: "60px", // larger right space
        }}
      >
        <h2>Python Full Stack Development</h2>
        <p>Python is a versatile, high-level programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python is widely used in web development, data analysis, artificial intelligence, scientific computing, and automation due to its extensive libraries and frameworks. Its easy-to-learn syntax and large community make it a popular choice for both beginners and experienced developers, enabling efficient and effective coding solutions.

</p>
        <p>We provide expert Python development services, harnessing the language’s versatility and simplicity to build powerful solutions. From web applications to data analysis and machine learning, our team utilizes Python’s extensive libraries and frameworks to deliver efficient and scalable results. We focus on creating clean, maintainable code and provide robust solutions tailored to your needs. Whether you’re looking to automate tasks or develop complex systems, our Python expertise ensures high-quality outcomes.</p>
      </div>
    </div>
    </div>
  );
};

export default PythonFullStack;