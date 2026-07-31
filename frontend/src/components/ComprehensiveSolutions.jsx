import React from "react";

import {
  FaGraduationCap,
  FaBookOpen,
  FaLaptopCode,
  FaUsers,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

import Card from "./Card";

const solutions = [
  {
    icon: <FaGraduationCap />,
    title: "Study Abroad",
    desc: "We go beyond study abroad—helping you build a successful global career.",
    backgroundcolor: "beige",
  },
  {
    icon: <FaBookOpen />,
    title: "University Admissions",
    desc: "End-to-end guidance from course selection to enrollment.",
    backgroundcolor: "beige",
  },
  {
    icon: <FaLaptopCode />,
    title: "IT Solutions",
    desc: "Secure, scalable, and future-ready IT systems.",
    backgroundcolor: "beige",
  },
  {
    icon: <FaUsers />,
    title: "Recruitment",
    desc: "Connecting talent with the right opportunities.",
    backgroundcolor: "beige",
  },
  {
    icon: <FaChartLine />,
    title: "Career Counselling",
    desc: "Helping you choose the right career path.",
    backgroundcolor: "beige",
  },
  {
    icon: <FaGlobe />,
    title: "Immigration",
    desc: "Smooth and trusted global relocation services.",
    backgroundcolor: "beige",
  },
];

const ComprehensiveSolutions = () => {
  return (
    <section
      style={{
        padding: "10px 20px",
        textAlign: "center",
        color: "black",
      }}
    >
      <h2
        style={{
          color: "white",
          fontWeight: "800",
          marginBottom: "10px",
        }}
      >
        Our Comprehensive Solutions
      </h2>

      <p
        style={{
          color: "white",
          marginTop: "0",
        }}
      >
        From career counseling to IT solutions, we provide end-to-end support
        for your global success.
      </p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          alignItems: "start",
        }}
      >
        {solutions.map((card, i) => (
          <Card
            key={i}
            icon={card.icon}
            title={card.title}
            text={card.desc}
            backgroundcolor={card.backgroundcolor}
          />
        ))}
      </div>
    </section>
  );
};

export default ComprehensiveSolutions;