import React from "react";

// Import images
import StudyAbroadImg from "../assets/study-Abroad1.png";
import CareerCounsellingImg from "../assets/career-councelling1.png";
import InternshipImg from "../assets/intern.png";
import RecruitmentImg from "../assets/r.png";
import ImmigrationImg from "../assets/immi.png";

const services = [
  {
    title: "Study Abroad",
    description:
      "Unlock global opportunities with our expert guidance and seamless international student placement services.",
    image: StudyAbroadImg,
  },
  {
    title: "Career Counselling",
    description:
      "Expert advice and personalized strategies to help you navigate your career choices and achieve long-term success.",
    image: CareerCounsellingImg,
  },
  {
    title: "Immigration Guidance",
    description:
      "Step-by-step assistance for PR, work visas, and immigration programs with complete transparency and expert support.",
    image: ImmigrationImg,
  },
  {
    title: "IT Services & Training",
    description:
      "Industry-focused training in software, cloud, and real-time projects to build job-ready skills.",
    image: InternshipImg,
  },
  {
    title: "Recruitment & Placement",
    description:
      "Connecting companies with the right talent and helping candidates secure the best opportunities.",
    image: RecruitmentImg,
  },
];

const Services = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #e6d9f5, #f3e8d9)",
        margin: 0,
        padding: 0,
        display: "flex",
        flexDirection: "column",
         fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      }}
    >
      {/* MAIN CONTENT */}
      <div style={{ flex: 1 }}>
        {/* HERO SECTION */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "60px 40px 30px",
            textAlign: "left",
           
          }}
        >
         <h1
  style={{
    fontSize: "28px",
    fontWeight: "700",
    color: "black",
    margin: "0 0 10px 0", 
    padding: "0",        
  }}
>
   Moin Consultancy Services
</h1>

          <p
            style={{
              fontSize: "18px",
              color: "black",
              lineHeight: "1.7",
              marginBottom: "10px",
            }}
          >
            Moin Consultancy is a trusted partner for students, professionals,
            and organizations seeking global opportunities. We specialize in
            education, career guidance, IT training, and recruitment solutions.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "black",
              lineHeight: "1.6",
            }}
          >
            With personalized support and transparent processes, we help you
            achieve your goals—from university admissions to global careers.
          </p>
        </div>

        {/* CORE SERVICES */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0px 40px",
          }}
        >
         <h5
  style={{
    color: "black",
    fontSize: "22px",
    marginBottom: "15px",
    marginTop: "0", 
  }}
>
   Our Core Services
</h5>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px",
            }}
          >
            {[
              " Study Abroad & Global Pathways",
              " University Admissions (India & Overseas)",
              " Software & Corporate Training",
              " Career Counselling & Skill Development",
              " Recruitment & Placement Support",
              " Immigration Assistance",
              " IT Solutions & Consulting",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  fontSize: "14px",
                  color: "black",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div
          style={{
            maxWidth: "1100px",
            margin: "40px auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "30px",
          }}
        >
          {services.map(({ title, description, image }, index) => (
            <div
              key={index}
              style={{
                 background: "linear-gradient(135deg, #A020F0, #EDE8d0)",
                borderRadius: "18px",
                padding: "25px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                color: "white",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(108,43,217,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0,0,0,0.08)";
              }}
            >
              <img
                src={image}
                alt={title}
                style={{
                  width: "60px",
                  height: "60px",
                  marginBottom: "15px",
                }}
              />

              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "10px",
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>

     
      <div style={{ height: "20px" }} />
    </div>
  );
};

export default Services;