import React from "react";
import DigitalMarketingImg from "../assets/digital-marketing.png";

const DigitalMarketing = () => {
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
        Digital Marketing Course
      </h1>

      {/* Banner Image */}
      <img
        src={DigitalMarketingImg}
        alt="Digital Marketing"
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
        <h2>Digital Marketing</h2>
        <p>
          Digital marketing encompasses strategies and tools to promote brands, products, and services across online platforms. It includes Search Engine Optimization (SEO), Content Marketing, Social Media Marketing, Email Campaigns, and Pay-Per-Click (PPC) advertising. By leveraging data-driven insights and targeted campaigns, businesses can enhance brand visibility, engage audiences, and drive conversions.
        </p>

        <h2>Why Choose Digital Marketing?</h2>
        <p>
          Digital marketing is essential for businesses to thrive in today's online-driven world. It allows brands to reach global audiences, track performance with analytics, and optimize campaigns in real time. Skills in digital marketing open doors to a dynamic, high-demand career in SEO, social media, content creation, advertising, and more.
        </p>

        <h2>Our Training & Services</h2>
        <p>
          Our comprehensive digital marketing course covers SEO, social media management, content creation, email marketing, PPC campaigns, and analytics. You will learn practical techniques to plan, execute, and measure successful digital campaigns. Hands-on projects provide real-world experience to apply your skills effectively.
        </p>

        <h2>Career Opportunities</h2>
        <p>
          Completing our Digital Marketing course prepares you for roles such as Digital Marketing Specialist, SEO Analyst, Social Media Manager, Content Strategist, or PPC Campaign Manager. With businesses increasingly investing in online marketing, skilled digital marketers are in high demand worldwide.
        </p>
      </div>
    </div>
  );
};

export default DigitalMarketing;