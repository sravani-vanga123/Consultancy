import React from "react";
import { Link } from "react-router-dom";

// Import images
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";

const Footer = () => {
  const lavender = "#F3E8FF";

  const footerStyle = {
    color: "white", 
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
     fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    backgroundColor:" #A020F0",
  };

  const sectionsContainer = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: "20px",
  };

  const sectionStyle = {
    flex: "1 1 200px",
    margin: "10px",
    minWidth: "200px",
  };

  const inputStyle = {
    padding: "10px 20px",
    borderRadius: "30px",
    border: "1px solid  #f0c0ff",
    width: "100%",
    maxWidth: "250px",
    fontSize: "16px",
  };

  const headingStyle = {
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "18px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
    marginBottom: "8px",
    cursor: "pointer",
  };

  const bottomLogosStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "20px",
    flexWrap: "wrap",
  };

  const bottomLogoStyle = {
    width: "120px",
    objectFit: "contain",
  };

  return (
    <>
      <footer style={footerStyle}>
        <div style={sectionsContainer}>
          <div style={sectionStyle}>
            <div style={headingStyle}>Company</div>
            <a href="/company-profile" style={linkStyle}>Company Profile</a>
            <a href="/about" style={linkStyle}>About</a>
             <Link to="/career" style={linkStyle}>
              Career
            </Link>
            <a href="/contact" style={linkStyle}>Contact</a>
          </div>

          <div style={sectionStyle}>
            <div style={headingStyle}>Contact:</div>
            <p>
              <strong>ADDRESS:</strong><br />
              9-7-054, Near Sri Sai Junior College,<br />
              Bezawada gardens,<br />
              Yanam-533464
            </p>
            <p><strong>EMAIL:</strong> connect@moinconsultancy.com</p>
            <p><strong>PHONE:</strong> +919390605958</p>
          </div>

          <div style={sectionStyle}>
            <div style={headingStyle}>Newsletter</div>
            <p>Join our subscribers list to get the instant latest news and special offers.</p>
            <input type="email" placeholder="Your Email" style={inputStyle}/>
          </div>
        </div>

        <div style={bottomLogosStyle}>
          <img src={img1} alt="Logo1" style={bottomLogoStyle}/>
          <img src={img2} alt="Logo2" style={bottomLogoStyle}/>
          <img src={img3} alt="Logo3" style={bottomLogoStyle}/>
          <img src={img4} alt="Logo4" style={bottomLogoStyle}/>
        </div>
      </footer>

      <p style={{ textAlign: "center", marginTop: "10px", color: "black",  fontFamily: "Futura, Trebuchet MS, Arial, sans-serif", backgroundColor:"beige"}}>
        Powered By Moisa Technologies (OPC) Private Limited.
      </p>
    </>
  );
};

export default Footer;