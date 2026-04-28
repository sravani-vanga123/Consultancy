import React, { useRef } from "react";
import ContactSection from "../components/ContactSection";
import ComprehensiveSolutions from "../components/ComprehensiveSolutions";
import WhyChooseUS from "../components/ChooseUS";
import OurClients from "../components/OurClients";
 import heroImage2 from "../assets/hero1.png";
import heroImage1 from "../assets/hero2.png";
import heroImage6 from "../assets/hero6.png";

const Home = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const buttonStyle = {
    background: "beige",
    color: "black",
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
  };

  return (
    <div
      style={{
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
        backgroundColor: " #A020F0  ",
         //background: "linear-gradient(135deg, #A020F0, #EDE8d0)",
      }}
    >
      {/* HERO SECTION */}
      <section
  style={{
    backgroundColor: "#A020F0",
 backgroundImage: `url(${heroImage6})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "80px 15px 60px",
    textAlign: "center",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
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
 {<img
  src={heroImage2}
  alt="Hero"
  style={{
    position: "absolute",
    right: "0",
    top: "0%",
    height: "100%",
    width: "30%",
    objectFit: "cover",
    zIndex: 1,

    borderTopLeftRadius: "150px",
    borderBottomLeftRadius: "150px",
  }}
/> }

  {/* <img
  src={heroImage5}
  alt="Left Hero"
  style={{
    position: "absolute",
    left: "0",
    top: "0%",
    height: "100%",
    width: "30%",
    objectFit: "cover",
    zIndex: 1,

    borderTopRightRadius: "150px",
    borderBottomRightRadius: "150px",
  }}
 />  */}













        {/* CONTENT */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontSize: "clamp(32px, 6vw, 48px)",
              margin: "0 auto",
              lineHeight: "1.3",
              maxWidth: "900px",
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
            }}
          >
            Empowering Global Careers Through Technology, Education & Expertise.
          </p>

          {/* BUTTON */}
          <button onClick={scrollToContact} style={buttonStyle}>
            Let’s Get Started →
          </button>

          {/* STATS */}
          <div
            style={{
              marginTop: "25px",
              background: "beige",
              borderRadius: "12px",
              padding: "10px",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              gap: "10px",
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {[
              { value: "500+", label: "Students Counselled" },
              { value: "20+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((item, i) => (
              <div key={i} style={{ flex: "1 1 120px", textAlign: "center" }}>
                <h2 style={{ color: "black", margin: 0 }}>
                  {item.value}
                </h2>
                <p style={{ margin: "5px 0 0", color: "black" }}>
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

        {/* CONTACT */}
        <section ref={contactRef}>
          <ContactSection />
        </section>
      </div>
    </div>
  );
};

export default Home;