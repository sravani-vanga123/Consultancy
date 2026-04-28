import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "I was overwhelmed with career options, but their counseling helped me focus and make the right choices. The guidance I received was thorough and insightful.",
    name: "R. Nagendra Vara Prasad",
    role: "M Tech, Petroleum Engineer, BTU - Manipur",
  },
  {
    text: "Their guidance gave me clarity on my career goals. They provided actionable steps that helped me transition smoothly into my chosen field.",
    name: "Ajay Mahendra Reddy",
    role: "MBA, MVGR, Vijayanagaram",
  },
  {
    text: "I felt lost in my career search, but their counselors provided me with a clear roadmap. I now have a direction and feel more confident about my future.",
    name: "C. Vishnu Sanjay Varma",
    role: "B Tech, CSE, BTU- Manipur",
  },
];

const OurClients = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <section
      style={{
        padding: "10px 20px",
        textAlign: "center",
       
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      }}
    >
      <h2 style={{ color: "white", fontWeight: "800", marginTop:"0px",
        gap:"0px" }}>Our Clients Say</h2>
      <p style={{color:"white"}}>Real experiences from people who trusted our services.</p>
    

      {/* SLIDER AREA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0px",
          marginTop: "40px",
        }}
      >
        {/* LEFT ARROW */}
        <FaChevronLeft
          size={25}
          onClick={prev}
          style={{
            cursor: "pointer",
            background: "#fff",
            padding: "10px",
            borderRadius: "50%",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />

        {/* CARD */}
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            backgroundColor:"beige",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "left",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            transition: "0.5s",
          }}
        >
          <FaQuoteLeft style={{ fontSize: "40px", color: "#c4a7e7" }} />

          <p style={{ fontSize: "20px", fontStyle: "italic", color: "black" }}>
            "{testimonials[index].text}"
          </p>

          <div style={{ margin: "15px 0", color: "gold" }}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>

          <h3 style={{ color: "black", marginBottom: "5px" }}>
            {testimonials[index].name}
          </h3>

          <p style={{ color: "black" }}>
            {testimonials[index].role}
          </p>
        </div>

        {/* RIGHT ARROW */}
        <FaChevronRight
          size={25}
          onClick={next}
          style={{
            cursor: "pointer",
            background: "#fff",
            padding: "10px",
            borderRadius: "50%",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
      </div>

      {/* DOTS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "25px",
        }}
      >
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: index === i ? "30px" : "10px",
              height: "10px",
              borderRadius: "20px",
              background: index === i ? "black" : "black",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default OurClients;