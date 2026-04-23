import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const ApplyNow = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div style={{ fontFamily: "Futura, Trebuchet MS, Arial, sans-serif" }}>

      {/* Footer Section */}
      <section id="contact">

      </section>
    </div>
  );
};

export default ApplyNow;