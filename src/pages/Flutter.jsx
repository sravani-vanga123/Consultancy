import React from "react";
import flutterImg from "../assets/flutter.png";

const FlutterPage = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
        backgroundColor: "beige",
        minHeight: "100vh",
      }}
    >
      {/* Heading */}
      <h1 style={{ textAlign: "center", margin: 0, paddingTop: "0px" }}>
        Flutter Development
      </h1>

      {/* Image */}
      <img
        src={flutterImg}
        alt="Flutter Development"
        style={{
          width: "100%",
          maxWidth: "1000px",
          height: "500px",
          margin: "0px auto",
          display: "block",
          objectFit: "cover",
        }}
      />

      {/* Button */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <button
          style={{
            padding: "12px 28px",
            fontSize: "16px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Book Free Demo Class
        </button>
      </div>

      {/* Content */}
      <div
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          textAlign: "left",
          maxWidth: "900px",
          margin: "0 auto 50px auto",
          paddingLeft: "40px",
          paddingRight: "60px",
        }}
      >
        <h2>Flutter Development</h2>
        <p>
          Flutter is an open-source UI software development kit created by Google
          for building natively compiled applications for mobile, web, and
          desktop from a single codebase. It uses the Dart programming language
          and provides a rich set of pre-designed widgets for creating visually
          appealing and high-performance apps. With hot reload, developers can
          see changes instantly, accelerating the development process.
        </p>

        <h2>Why Choose Flutter?</h2>
        <p>
          Flutter allows developers to create beautiful, responsive apps across
          multiple platforms using a single codebase. Its fast development
          cycle, expressive UI, and high performance make it ideal for startups
          and enterprises alike. Whether you want to build mobile, web, or
          desktop apps, Flutter provides flexibility and efficiency unmatched by
          other frameworks.
        </p>

        <h2>Our Training & Services</h2>
        <p>
          We provide comprehensive Flutter training and development services.
          Our program covers the Dart language, widget architecture, state
          management, and deployment. You will work on real-time projects,
          learning to build responsive interfaces, integrate APIs, and create
          scalable applications.
        </p>

        <h2>Career Opportunities</h2>
        <p>
          After completing Flutter training, you can pursue roles like Flutter
          Developer, Mobile App Developer, UI/UX Developer, or Full Stack
          Developer with Flutter expertise. With the rising demand for
          cross-platform apps, skilled Flutter developers are highly sought
          after in tech companies and startups worldwide.
        </p>
      </div>
    </div>
  );
};

export default FlutterPage;