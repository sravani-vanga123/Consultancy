import React from "react";
import { FaAward, FaUserFriends, FaHeadset, FaGlobe } from "react-icons/fa";

const reasons = [
  {
    icon: <FaAward />,
    title: "Expertise & Experience",
    desc: "We bring years of experience and industry expertise to the table, ensuring that you receive top-quality services. Our team consists of professionals who are passionate about their work and stay updated with the latest trends and technologies.",
 backgroundcolor: "linear-gradient(135deg, #A020F0, #EDE8d0)",
},
  {
    icon: <FaUserFriends />,
    title: "Personalized Solutions",
    desc: "We understand that every client is different. That's why we provide personalized solutions that align with your goals and requirements. We take the time to understand your specific needs and create strategies that deliver results.",
    backgroundcolor: "linear-gradient(135deg, #A020F0, #EDE8d0)",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our dedicated support team is available round the clock to assist you with any queries or concerns you may have.",
backgroundcolor: "linear-gradient(135deg, #A020F0, #EDE8d0)",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    desc: "Access to top educational institutions and technology partners worldwide, ensuring you get the best opportunities available.",
backgroundcolor: "linear-gradient(135deg, #A020F0, #EDE8d0)",
  },
];

const WhyChooseUS = () => {
  return (
    <section
      style={{
        padding: "10px 20px",
        background: "beige",
        textAlign: "center",
       
      }}
    >
      <h2 style={{ color: "#A020F0", fontWeight: "800", marginTop:"0px",
        gap:"0px" }}>Why Choose Us</h2>
      <p>
        We are committed to delivering exceptional services tailored to meet your
        unique needs.
      </p>

      <div
        style={{
          maxWidth: "1200px",
          margin: "30px auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {reasons.map((item, i) => (
          <div
            key={i}
            style={{
              background: item.backgroundcolor,
              color: "#fff",
              padding: "30px",
              borderRadius: "20px",
              marginTop:"10px",
              transition: "0.3s",
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* ICON */}
            <div
              style={{
                width: "60px",
                height: "60px",
                background: "rgba(255, 255, 255, 0.2)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "15px",
                fontSize: "26px",
                margin: "0 auto 20px",
                backdropFilter: "blur(5px)",
              }}
            >
              {item.icon}
            </div>

            <h3 style={{ margin: "0 0 10px", color: "#fff" }}>{item.title}</h3>

            <p style={{ color: "#f1f5f9", lineHeight: "1.6" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUS;