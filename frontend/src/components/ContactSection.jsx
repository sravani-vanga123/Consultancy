import React, { useState } from "react";
import axios from "axios";

function ContactSection() {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Loading state
  const [loading, setLoading] = useState(false);

  // Input values update
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Mobile field లో only numbers allow
    if (name === "mobile") {
      const numbersOnly = value.replace(/\D/g, "");

      setFormData({
        ...formData,
        [name]: numbersOnly,
      });

      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mobile validation
    if (formData.mobile.length !== 10) {
      alert(
        "Please enter a valid 10-digit mobile number."
      );

      return;
    }

    setLoading(true);

    try {
      // Send contact data to Render backend
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      );

      console.log(
        "Contact Response:",
        response.data
      );

      alert(
        "Your message has been sent successfully!"
      );

      // Clear form after successful submission
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.error(
        "Contact Error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Message sending failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Section style
  const sectionStyle = {
    padding: "10px 20px",
    boxSizing: "border-box",
  };

  // Container style
  const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto",
  };

  // Heading style
  const headingStyle = {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "30px",
    color: "white",
    fontWeight: "800",
    fontFamily:
      "Futura, Trebuchet MS, Arial, sans-serif",
  };

  // Form card style
  const formStyle = {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow:
      "0px 2px 10px rgba(0,0,0,0.1)",
    boxSizing: "border-box",
  };

  // Label style
  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "14px",
    color: "#333",
    fontFamily:
      "Futura, Trebuchet MS, Arial, sans-serif",
  };

  // Input style
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
    fontFamily:
      "Futura, Trebuchet MS, Arial, sans-serif",
  };

  // Textarea style
  const textareaStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
    resize: "vertical",
    fontSize: "16px",
    background: "#fff",
    boxSizing: "border-box",
    fontFamily:
      "Futura, Trebuchet MS, Arial, sans-serif",
  };

  // Button style
  const buttonStyle = {
    background:
      loading ? "#8a8a8a" : "#A020F0",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor:
      loading ? "not-allowed" : "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    width: "100%",
    transition: "0.3s",
    fontFamily:
      "Futura, Trebuchet MS, Arial, sans-serif",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>

        {/* Heading */}
        <h2 style={headingStyle}>
          Get in touch
        </h2>

        {/* Form Card */}
        <div style={formStyle}>

          <form onSubmit={handleSubmit}>

            {/* Full Name */}
            <label style={labelStyle}>
              Full Name *
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              style={inputStyle}
            />

            {/* Email */}
            <label style={labelStyle}>
              Your Email *
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={inputStyle}
            />

            {/* Mobile */}
            <label style={labelStyle}>
              Your Mobile *
            </label>

            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
              required
              style={inputStyle}
            />

            {/* Message */}
            <label style={labelStyle}>
              Your Message *
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="4"
              required
              style={textareaStyle}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={buttonStyle}
            >
              {loading
                ? "Sending..."
                : "Get in touch"}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;