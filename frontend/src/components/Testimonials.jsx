import React from "react";
import ajayImage from "../assets/ajay.png";
import girlImage from "../assets/girl.png"; 

const Testimonials = () => {
  return (
    <section
      style={{
        display: "flex",
        maxWidth: "1500px",
        margin: "40px auto",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        borderRadius: "12px",
        background: "white",
        flexWrap: "wrap", 
        overflow: "hidden",
        backgroundColor:"lavender",
        marginBottom:"10px",
          fontFamily: "Futura, Trebuchet MS, Arial, sans-serif" ,
      }}
    >
      {/* Left half: image */}
      <div
        style={{
          flex: "1",
          minWidth: "300px",
          height: "100%",
          backgroundColor: "beige",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
           fontFamily: "Futura, Trebuchet MS, Arial, sans-serif" ,
        }}
      >
        <img
          src={girlImage}
          alt="Testimonial profile"
          style={{ width: "80%", borderRadius: "10px" }}
        />
      </div>

      {/* Vertical divider line */}
      <div
        style={{
          width: "2px",
          backgroundColor: "beige",
           fontFamily: "Futura, Trebuchet MS, Arial, sans-serif" ,
        }}
      />

      {/* Right half: text */}
      <div
        style={{
          flex: "1",
          minWidth: "300px",
          padding: "40px",
          background:"beige",
        
           fontFamily: "Futura, Trebuchet MS, Arial, sans-serif" ,
        }}
      >
        <h1
          style={{ color: "black", fontSize: "3rem", marginBottom: "20px", fontFamily: "Futura, Trebuchet MS, Arial, sans-serif" , }}
        >
          Testimonials
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            marginBottom: "25px",
             fontFamily: "Futura, Trebuchet MS, Arial, sans-serif" ,
             background:"beige",
          }}
        >
          "Their guidance gave me clarity on my career goals. They provided actionable steps that helped me transition smoothly into my chosen field."
        </p>

        {/* Horizontal line between paragraph and profile */}
        <hr style={{ border: "1px solid beige", margin: "20px 0" }} />

        {/* Profile */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px",backgroundColor:"beige", fontFamily: "Futura, Trebuchet MS, Arial, sans-serif" , }}>
          <img
            src={ajayImage}
            alt="Ajay Mahendra Reddy"
            style={{ width: "50px", height: "50px", borderRadius: "50%",backgroundColor:"beige" , fontFamily: "Futura, Trebuchet MS, Arial, sans-serif" ,}}
          />
          <div>
            <strong>Ajay Mahendra Reddy, MVGR, Vijayanagaram</strong>
            <br />
            <small>MBA</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;