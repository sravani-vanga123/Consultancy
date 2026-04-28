import React from "react";

function ContactSection() {

  const sectionStyle = {
   
    padding: "10px 20px",
  };

  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto", 
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "30px",
    marginTop:"20px",
  color: "white",
       fontWeight: "800"
  };

  const formStyle = {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "14px",
    fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
    fontSize: "16px",
    background: "#fff",
  };

  const textareaStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
    resize: "none",
    fontSize: "16px",
    background: "#fff",
    fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
  };

  const buttonStyle = {
    background: "#A020F0",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
    fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        
        <h2 style={headingStyle}>Get in touch</h2>

        <div style={formStyle}>
          <form>
            <label style={labelStyle}>Full Name</label>
            <input type="text" style={inputStyle} />

            <label style={labelStyle}>Your Email *</label>
            <input type="email" style={inputStyle} />

            <label style={labelStyle}>Your Mobile</label>
            <input type="text" style={inputStyle} />

            <label style={labelStyle}>Your Message</label>
            <textarea rows="4" style={textareaStyle}></textarea>

            <button style={buttonStyle}>Get in touch</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;