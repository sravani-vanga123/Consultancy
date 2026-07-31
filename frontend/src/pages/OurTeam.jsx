import React from "react";
import directorImage from "../assets/director1.png";

function TeamSection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        textAlign: "center",
       padding: "50px",
      background: "linear-gradient(135deg, #faf7ff, #f7efe5)",
    fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      }}
    >
      <div>
       
        <img
          src={directorImage}
          alt="Director"
          style={{ width: "200px", marginTop: "10px" }}
        />
         <h2>Moin</h2>
        <h3>Director</h3>
      </div>

      <div>
       
        <h2>S Aafreen</h2>
         <h3>HR Manager</h3>
      </div>

      <div>
        
        <h2> SK Naim</h2>
        <h3>Marketing Head</h3>
      </div>
    </div>
  );
}

export default TeamSection;