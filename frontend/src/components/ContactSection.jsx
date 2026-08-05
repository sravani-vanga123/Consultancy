import React, { useState } from "react";
import axios from "axios";

function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Input values update
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      console.log("Contact Response:", response.data);

      alert("Your message has been sent successfully!");

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact Error:", error);

      alert(
        error.response?.data?.message ||
          "Message sending failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

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
    marginTop: "20px",
    color: "white",
    fontWeight: "800",
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
    boxSizing: "border-box",
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
    boxSizing: "border-box",
  };

  const buttonStyle = {
    background: loading ? "#8a8a8a" : "#A020F0",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: loading ? "not-allowed" : "pointer",
    fontSize: "16px",
    width: "100%",
    fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Get in touch</h2>

        <div style={formStyle}>
          <form onSubmit={handleSubmit}>
            
            {/* Full Name */}
            <label style={labelStyle}>Full Name *</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              style={inputStyle}
            />

            {/* Email */}
            <label style={labelStyle}>Your Email *</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              style={inputStyle}
            />

            {/* Mobile */}
            <label style={labelStyle}>Your Mobile *</label>

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              maxLength="10"
              placeholder="Enter 10-digit mobile number"
              style={inputStyle}
            />

            {/* Message */}
            <label style={labelStyle}>Your Message *</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Write your message"
              style={textareaStyle}
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={buttonStyle}
            >
              {loading ? "Sending..." : "Get in touch"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;