import React from "react";
import logo from "../assets/image1.jpg.png";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "FDE588",
        fontFamily: "'Futura ExtraBold', 'Montserrat', sans-serif",
      }}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        style={{
          height: "80px",
          width: "150px",
        }}
      />

      {/* Menu */}
      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </div>
  );
};


const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Navbar;