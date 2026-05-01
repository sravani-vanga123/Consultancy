import React from "react";
import {
  FaGraduationCap,
  FaBookOpen,
  FaLaptopCode,
  FaUsers,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

const solutions = [
  {
    icon: <FaGraduationCap />,
    title: "Study Abroad",
    desc: "We go beyond study abroad—helping you build a successful global career.",
   backgroundcolor:"beige"
  },
  {
    icon: <FaBookOpen />,
    title: "University Admissions",
    desc: "End-to-end guidance from course selection to enrollment.",
     backgroundcolor:"beige"
  },
  {
    icon: <FaLaptopCode />,
    title: "IT Solutions",
    desc: "Secure, scalable, and future-ready IT systems.",
    backgroundcolor:"beige"
  },
  {
    icon: <FaUsers />,
    title: "Recruitment",
    desc: "Connecting talent with the right opportunities.",
    backgroundcolor:"beige"
  
  },
  {
    icon: <FaChartLine />,
    title: "Career Counselling",
    desc: "Helping you choose the right career path.",
     backgroundcolor:"beige"
    
  },
  {
    icon: <FaGlobe />,
    title: "Immigration",
    desc: "Smooth and trusted global relocation services.",
    backgroundcolor:"beige"
   
  },
];

const ComprehensiveSolutions = () => {
  return (
    <section
      style={{
        padding: "10px 20px",
     
        textAlign: "center",
        color: "black"
      }}
    >
      <h2 style={{ color: "white", fontWeight: "800" }}>
  Our Comprehensive Solutions
</h2>
      <p style={{color:"white"}}>
        From career counseling to IT solutions, we provide end-to-end support
        for your global success.
      </p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {solutions.map((card, i) => (
          <div
            key={i}
            style={{
              background: "beige",
              marginTop:"10px",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #ddd",
              transition: "0.3s",
               background: card.backgroundcolor,
               color:card.color
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
    
            <div
              style={{
                width: "60px",
                height: "60px",
                background: "beige",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "15px",
                fontSize: "26px",
                margin: "0 auto 20px",
              }}
            >
              {card.icon}
            </div>

            <h3 style={{ margin: "0 0 10px", color: "black" }}>
              {card.title}
            </h3>

            <p style={{ color: "black", lineHeight: "1.6" }}>
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComprehensiveSolutions;