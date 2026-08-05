import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check Terms and Conditions
    if (!remember) {
      alert("Please accept Terms & Conditions");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          firstName,
          lastName,
          email,
          mobile,
          password,
        }
      );

      console.log("Signup Response:", response.data);

      alert("Signup successful!");

      // Clear form
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setRemember(false);

      // Signup successful → Open Login page
      navigate("/login");
    } catch (error) {
      console.log("Signup Error:", error);

      alert(
        error.response?.data?.message ||
          "Signup failed. Please try again."
      );
    }
  };

  // Already have an account → Open Login page
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "beige",
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          width: "350px",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginTop: 0,
            marginBottom: "25px",
            color: "#333",
          }}
        >
          Sign Up
        </h2>

        {/* First Name and Last Name */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "15px",
          }}
        >
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={{
              width: "50%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
            }}
          />

          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{
              width: "50%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
            }}
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            outline: "none",
          }}
        />

        {/* Mobile */}
        <input
          type="tel"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setMobile(value);
          }}
          required
          maxLength="10"
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit mobile number"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            outline: "none",
          }}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength="6"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
            outline: "none",
          }}
        />

        {/* Terms and Conditions */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            required
            style={{
              width: "15px",
              height: "15px",
              cursor: "pointer",
              flexShrink: 0,
            }}
          />

          I agree to the Terms & Conditions
        </label>

        {/* Signup Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "11px",
            background: "purple",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </button>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "20px 0",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#cccccc",
            }}
          />

          <span
            style={{
              margin: "0 10px",
              color: "#555",
            }}
          >
            or
          </span>

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#cccccc",
            }}
          />
        </div>

        {/* Login */}
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            margin: 0,
            color: "#444",
          }}
        >
          Already have an account?{" "}
          
          <span
            onClick={handleLoginClick}
            style={{
              color: "purple",
              cursor: "pointer",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;