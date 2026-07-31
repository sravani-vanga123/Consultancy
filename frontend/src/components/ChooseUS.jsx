import React from "react";
import {
  FaAward,
  FaUserFriends,
  FaHeadset,
  FaGlobe,
} from "react-icons/fa";

import Card from "./Card";

const reasons = [
  {
    icon: <FaAward />,
    title: "Expertise & Experience",
    desc: "We bring years of experience and industry expertise to the table, ensuring that you receive top-quality services. Our team consists of professionals who are passionate about their work and stay updated with the latest trends and technologies.",
    backgroundcolor: "beige",
  },
  {
    icon: <FaUserFriends />,
    title: "Personalized Solutions",
    desc: "We understand that every client is different. That's why we provide personalized solutions that align with your goals and requirements. We take the time to understand your specific needs and create strategies that deliver results.",
    backgroundcolor: "beige",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our dedicated support team is available round the clock to assist you with any queries or concerns you may have.",
    backgroundcolor: "beige",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    desc: "Access to top educational institutions and technology partners worldwide, ensuring you get the best opportunities available.",
    backgroundcolor: "beige",
  },
];

const WhyChooseUS = () => {
  return (
    <section
      style={{
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "white",
          fontWeight: "800",
          marginTop: "0",
        }}
      >
        Why Choose Us
      </h2>

      <p style={{ color: "white" }}>
        We are committed to delivering exceptional services tailored to meet
        your unique needs.
      </p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {reasons.map((item, i) => (
          <Card
            key={i}
            icon={item.icon}
            title={item.title}
            text={item.desc}
            backgroundcolor={item.backgroundcolor}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUS;