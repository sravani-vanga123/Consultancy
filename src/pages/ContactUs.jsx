import React from "react";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div>
     
      <div
        style={{
          background: "#e9e4ff",
          height: "200px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        >
          <path
            fill="#ffffff"
            d="M0,224L80,197.3C160,171,320,117,480,117.3C640,117,800,171,960,197.3C1120,224,1280,224,1360,224L1440,224V320H0Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div style={{ padding: "40px" }}>
        <h2>Contact Us</h2>
      </div>

    </div>
  );
};

export default ContactUs;