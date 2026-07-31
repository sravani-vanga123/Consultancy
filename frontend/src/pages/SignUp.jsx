import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
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

      // Clear form after successful signup
      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setRemember(false);
    } catch (error) {
      console.log("Signup Error:", error);

      alert(
        error.response?.data?.message ||
          "Signup failed. Please try again."
      );
    }
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
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
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
          }}
        />

        {/* Mobile */}
        <input
          type="tel"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          maxLength="10"
          pattern="[0-9]{10}"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
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
          }}
        >
          Already have an account?{" "}
          <span
            style={{
              color: "purple",
              cursor: "pointer",
              fontWeight: "bold",
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