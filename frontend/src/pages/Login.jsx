import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log("Login Response:", response.data);

      // Save token
      if (remember) {
        localStorage.setItem(
          "token",
          response.data.token
        );
      } else {
        sessionStorage.setItem(
          "token",
          response.data.token
        );
      }

      alert("Login successful!");

      // Example:
      // window.location.href = "/dashboard";

    } catch (error) {
      console.log("Login Error:", error);

      alert(
        error.response?.data?.message ||
          "Login failed. Please try again."
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
        fontFamily:
          "Futura, Trebuchet MS, Arial, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow:
            "0 5px 15px rgba(0,0,0,0.1)",
          width: "320px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Login
        </h2>

        <h4>Email Address</h4>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
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

        <h4>Password</h4>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
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

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) =>
                setRemember(
                  e.target.checked
                )
              }
            />

            Remember me
          </label>

          <span
            style={{
              color: "purple",
              fontSize: "13px",
              cursor: "pointer",
            }}
          >
            Forgot password?
          </span>
        </div>

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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;