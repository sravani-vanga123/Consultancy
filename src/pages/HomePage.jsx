import React, { useRef } from "react";
import ContactSection from "../components/ContactSection";
import ComprehensiveSolutions from "../components/ComprehensiveSolutions";
import WhyChooseUS from "../components/ChooseUS";
import OurClients from "../components/OurClients";


import heroImage10 from "../assets/hero10.png";

const Home = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

const buttonStyle = {
  background: "rgba(0, 0, 0, 0.6)",
  color: "white",
  border: "none",
  padding: "10px",
  borderRadius: "8px",
  fontSize: "clamp(14px, 3vw, 16px)",
  cursor: "pointer",
  marginTop: "20px",
  fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
  width: "100%",
  maxWidth: "250px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
};
  return (
    <div
      style={{
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
        backgroundColor: "#50C878",
        position: "relative",
        
      }}
    >
      {/* HERO SECTION */}
   <section
  style={{
    position: "relative",
    padding: "80px 15px 60px",
    textAlign: "center",
    color: "#fff",
    overflow: "hidden",

    backgroundImage: `url(${heroImage10})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

         <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.01)",
          }}
        />

        {/* CONTENT */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 48px)",
              margin: "0 auto",
              lineHeight: "1.3",
              maxWidth: "950px",
            }}
          >
            "Step Beyond Borders, Future Beyond Limits!"
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 3.5vw, 16px)",
              margin: "10px auto",
              maxWidth: "800px",
              lineHeight: "1.6",
            }}
          >
          Empowering Global Careers Through Technology, Education & Expertise.
          </p>

          <button onClick={scrollToContact} style={buttonStyle}>
            Let’s Get Started →
          </button>

        {/* STATS */}
<div
  style={{
    marginTop: "25px",
    background: "rgba(0, 0, 0, 0.6)",
    borderRadius: "12px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "10px",
    maxWidth: "480px",
    marginLeft: "auto",
    marginRight: "auto",
    color: "black",
  }}
>
            {[
              { value: "500+", label: "Students Counselled" },
              { value: "20+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((item, i) => (
              <div key={i} style={{ flex: "1 1 120px", textAlign: "center" }}>
                <h2 style={{ color: "white", margin: 0 }}>{item.value}</h2>
                <p style={{ margin: "5px 0 0px", color: "white" }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "20px 10px",
        }}
      >
        <ComprehensiveSolutions />
        <WhyChooseUS />
        <OurClients />

        <section ref={contactRef}>
          <ContactSection />
        </section>
      </div>
    </div>
  );
};

export default Home;