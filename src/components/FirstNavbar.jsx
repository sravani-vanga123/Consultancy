import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaCamera } from "react-icons/fa";

const FirstNavbar = () => {
  const styles = {
    bar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "beige",
      color: "black",
      padding: "10px 30px",
      fontSize: "14px",
      gap: "10px",
      fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
    },

    left: {
      display: "flex",
      gap: "30px",
      alignItems: "center",
      flexWrap: "wrap",
    },

    item: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
    },

    right: {
      display: "flex",
      gap: "15px",
    },

    iconCircle: {
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      border: "1px solid #A020F0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.bar}>
      <div style={styles.left}>
        <div style={styles.item}>
          <span>📞 Call For Appointment</span>
          <span style={{ paddingLeft: "3ch" }}>+91 9390605958</span>
        </div>

        <div style={styles.item}>
          <span>✉️ Email our experts</span>
          <span style={{ paddingLeft: "3ch"}}>connect@moinconsultancy.com</span>
        </div>
      </div>

      <div style={styles.right}>
        <div style={styles.iconCircle}><FaFacebookF /></div>
        <div style={styles.iconCircle}><FaCamera />
</div>
        <div style={styles.iconCircle}><BiLogoLinkedin /></div>
      </div>
    </div>
  );
};

export default FirstNavbar;