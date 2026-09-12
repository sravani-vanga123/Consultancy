import React from "react";
import directorImage from "../assets/moin.png";
import HrImage from "../assets/Hr2.png";
import BoyImage from "../assets/Boy1.png"

function ourTeam() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        textAlign: "center",
       padding: "50px",
       color:"#A202F0",  
    fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      }}
    >
      <div>
       
        <img
          src={directorImage}
          alt="Director"
          style={{ width: "200px", marginTop: "10px",height:"300px" }}
        />
         <h2>Moin</h2>
        <h3>Director</h3>
      </div>

      <div>
         <img
          src={HrImage}
          alt="Director"
          style={{ width: "200px", marginTop: "10px" }}
        />
       
        <h2>S Aafreen</h2>
         <h3>HR Manager</h3>
      </div>

      <div>
        <img
          src={BoyImage}
          alt="Director"
          style={{ width: "200px", marginTop: "10px" }}
        />
        <h2> SK Naim</h2>
        <h3>Marketing Head</h3>
      </div>
    </div>
  );
}

export default ourTeam;