import React, { useRef } from "react";
import ContactSection from "../components/ContactSection";
import BannerImage from "../assets/Banner2.png";
import ComprehensiveSolutions from "../components/ComprehensiveSolutions";
import WhyChooseUS from "../components/ChooseUS";
import OurClients from "../components/OurClients";

const Home = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const buttonStyle = {
    background: "#A020F0",
    color: "#fff",
    border: "none",
    padding: "10px 10px",
    borderRadius: "8px",
    fontSize: "clamp(14px, 3vw, 16px)",
    cursor: "pointer",
  marginTop:"20px",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    width: "100%",
    maxWidth: "250px",
  };

  return (
    <div
      style={{
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
        backgroundColor: "beige",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "60px 15px 40px",
          textAlign: "center",
          color: "#fff",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontSize: "clamp(48px, 10vw, 6px)",
              margin: "0 auto",
              lineHeight: "1.3",
              maxWidth: "900px",
              padding: "0 10px",
            }}
          >
            Step Beyond Borders,
            <br />
            Future Beyond Limits!
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 3.5vw, 16px)",
              margin: "10px auto",
              maxWidth: "600px",
              lineHeight: "1.6",
              padding: "0 0px",
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
              marginTop: "45px",
  marginBottom: "5px",
              background: "#A020F0",
              borderRadius: "12px",
              padding: "10px 10px",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "10px",
              maxWidth: "900px",
              marginInline: "auto",
            }}
          >
            {[
              { value: "500+", label: "Students Counselled" },
              { value: "20+", label: " Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  flex: "1 1 120px",
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    color: "white",
                    fontSize: "clamp(20px,5vw,26px)",
                    margin: 0,
                  }}
                >
                  {item.value}
                </h2>
                <p
                  style={{
                    margin: "5px 0 0",
                    fontSize: "clamp(12px,3vw,14px)",
                    color: "#eee",
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL SECTIONS */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0px",
          marginTop: "30px",
          padding: "0 10px",
        }}
      >
        <ComprehensiveSolutions />
        <WhyChooseUS />
        <OurClients />

        {/* CONTACT */}
        <section ref={contactRef}>
          <ContactSection />
          
        </section>
      
<section
  style={{
    marginBottom: "20px",
  }}
/>
      </div>
    </div>
  );
};

export default Home;