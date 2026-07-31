import React from "react";
import MoinImage from "../assets/moin.png";
import VisionMission from "../components/Aboutvision";

const AboutUs = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
       background:    "linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 50%, #FDF4FF 100%)",
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
        padding: "40px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
       
          zIndex: 1,
        }}
      />

      {/* CENTER CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* TITLE */}
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          ABOUT MOIN CONSULTANCY
        </h1>

        {/* TWO COLUMN */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          {/* LEFT IMAGE */}
          <div
            style={{
              flex: "1 1 350px",
              textAlign: "center",
            }}
          >
            <img
              src={MoinImage}
              alt="Director"
              style={{
                width: "60%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "15px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            />

            <h3 style={{ marginTop: "10px" }}>Shaik Khaja Moin</h3>
            <p style={{ fontWeight: "bold" }}>Director</p>

            <button
              style={{
                backgroundColor: "#D8B4FE",
                color: "#fff",
                border: "none",
                padding: "10px 25px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Contact Director
            </button>
          </div>

          {/* RIGHT TEXT */}
          <div
            style={{
              flex: "2 1 500px",
              color: "black",
              lineHeight: "1.8",
              fontSize: "20px",
            }}
          >
            <p>
              Moin Consultancy is a trusted, ISO 9001:2015 certified organization delivering education, career, and IT solutions designed to empower individuals and businesses for global success. With a strong commitment to quality and results, we provide integrated services that bridge the gap between aspiration, skills, and opportunity.
            </p>
            <p>
              We specialize in Study Abroad, University Admissions (India & Overseas), Immigration, Recruitment, IT Solutions, Software & Cloud Training, Career Counselling, and IELTS Coaching—offering end-to-end support tailored to each client’s goals.
            </p>
            <p>
              Our strength lies in a personalized, transparent, and outcome-driven approach, ensuring every student, professional, or organization receives the right guidance at every stage—from career planning and skill development to admissions, placements, and global mobility.
            </p>
            <p>
              At Moin Consultancy, we don’t just offer services—we build pathways to success, helping you grow with confidence in an increasingly competitive and globalized world.
            </p>
          </div>
        </div>
      </div>

      <VisionMission />
    </div>
  );
};

export default AboutUs;