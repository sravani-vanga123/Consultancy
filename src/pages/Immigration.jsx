import React from "react";
import DistanceEducationImage from "../assets/immi.png";

const ImmigrationPage = () => {
  return (
    <div
      style={{
        backgroundColor: "beige", 
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
  <h1
  style={{
    textAlign: "center",
    backgroundColor: "beige", // ✅ add this
    margin: 0,                // optional (removes gap)
    padding: "10px"           
  }}
>
  Immigration
</h1>

      <div
        style={{
          textAlign: "left",
          fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
        }}
      >
        <img
          src={DistanceEducationImage}
          alt="Immigration"
          style={{
            width: "100%",
            maxWidth: "1000px",
            height: "500px",
            objectFit: "cover",
            display: "block",
            margin: "0 auto",
          }}
        />

        <h1>Your Trusted Partner for Global Mobility</h1>

        <p>
          At Moin Consultancy, we provide reliable and result-driven immigration
          services to help you move abroad with confidence.
        </p>

        <h2>🚀 Our Immigration Services</h2>
        <ul>
          <li>Work Visa & Overseas Career Guidance</li>
          <li>Permanent Residency (PR) Consultation</li>
          <li>Visa Documentation & Processing</li>
          <li>End-to-End Application Support</li>
        </ul>

        <h2>⚙️ Our Process</h2>
        <ul>
          <li>Profile Evaluation & Consultation</li>
          <li>Documentation & Eligibility Check</li>
          <li>Application Submission & Tracking</li>
          <li>Visa Support & Final Guidance</li>
        </ul>
      </div>
    </div>
  );
};

export default ImmigrationPage;