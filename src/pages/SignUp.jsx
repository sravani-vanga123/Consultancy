import React, { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", { firstName, lastName, email, mobile, password, remember });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "beige",
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          width: "300px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Sign Up</h2>

        {/* Name */}
        <div
          style={{
            display: "flex",
            gap: "10px", // space between boxes
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
          }}
        />

        {/* Mobile Number */}
        <input
          type="number"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* Terms Checkbox */}
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            marginBottom: "15px",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
            style={{ width: "14px", height: "14px" }}
          />
          I agree Terms & Conditions
        </label>

        {/* Signup Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "purple",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "15px",
          }}
        >
          Sign Up
        </button>

        {/* OR Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "15px 0",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#ccc" }}></div>
          <span style={{ margin: "0 10px", fontSize: "14px", color: "#555" }}>
            or
          </span>
          <div style={{ flex: 1, height: "1px", background: "#ccc" }}></div>
        </div>

        {/* Login redirect */}
        <p style={{ textAlign: "center", fontSize: "14px" }}>
          Already have an account?{" "}
          <span style={{ color: "purple", cursor: "pointer" }}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;