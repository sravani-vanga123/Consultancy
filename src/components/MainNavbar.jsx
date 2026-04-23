import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image.png";
import australia from "../assets/Australia.png";
import Europe  from "../assets/Europe.png";
import Ireland from "../assets/Ireland.png";
import NewZealand from "../assets/New-Zealand.png";
import USA from "../assets/USA.png";
import Canada from "../assets/Canada.png";
import Turkey from "../assets/Turkey.png";
import UK from "../assets/UK.png";
import UAE from "../assets/UAE.png";

// Menu items
const menuItems = [
  { title: "HOME", link: "/" },
  {
    title: "ABOUT US",
    link: "/about",
    submenu: [
      { title: "Our Team", link: "/about/our-team" },
     
    ],
  },

  {
    title: "SERVICES",
    link: "/services",
    submenu: [
      {
        title: "Coaching",
        link: "/services/coaching",
        submenu: [
          { title: "IELTS", link: "/services/coaching/ielts" },
          {
            title: "ONLINE TRAINING",
            link: "/services/coaching/online-training",
            submenu: [
              { title: "MERN FULL STACK", link: "/services/coaching/online-training/mern-full-stack" },
              { title: "MEAN FULL STACK", link: "/services/coaching/online-training/mean-full-stack" },
              { title: "FLUTTER", link: "/services/coaching/online-training/flutter" },
              { title: "PYTHON FULL STACK", link: "/services/coaching/online-training/python-full-stack" },
              { title: "DIGITAL MARKETING", link: "/services/coaching/online-training/digital-marketing" },
            ],
          },
          { title: "BUSINESS ENGLISH", link: "/services/coaching/business-english" },
        ],
      },
     
      { title: "Career Counselling", link: "/services/career-counselling" },
      { title: "Distance Education", link: "/services/distance-education" },
       {
        title: "IT Solutions",
        link: "/services/IT-solutions",
        submenu: [
          { title: "Web development", link: "/services/IT/web-development" },
          { title: "Cloud Services", link: "/services/IT/cloud-services" },
          { title: "Cyber Security", link: "/services/IT/cyber-security" },
        ],
      },
      { title: "Recruitment", link: "/services/recruitment" },
      { title: "Immigration", link: "/services/immigration" },
    ],
  },
  {
    title: "STUDY ABROAD",
    link: "/study-abroad",
    submenu: [
      { title: "Australia", link: "/study-abroad/australia",flag: australia },
      { title: "Ireland", link: "/study-abroad/ireland",flag:Ireland },
      { title: "USA", link: "/study-abroad/usa",flag:USA },
      { title: "Canada", link: "/study-abroad/canada",flag:Canada },
      { title: "New Zealand", link: "/study-abroad/newzealand",flag:NewZealand },
      { title: "UK", link: "/study-abroad/uk" ,flag:UK },
      { title: "Europe", link: "/study-abroad/europe" , flag:Europe },
      { title: "Turkey", link: "/study-abroad/turkey",flag:Turkey },
      { title: "UAE", link: "/study-abroad/UAE",flag:UAE },
    ],
  },
  { title: "Blogs", link: "/Blogs" },
  { title: "CONTACT US", link: "/contact" },
  { title: "LOGIN", link: "/login" },
  { title: "SIGNUP", link: "/signup" },
];

// DropdownMenu component
const DropdownMenu = ({ items, parentTitle }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const isGrid =
    items.length >= 6 ||
    parentTitle === "SERVICES" ||
    parentTitle === "STUDY ABROAD";

  // Custom 3-column split for STUDY ABROAD
  let columns = [[], [], []];
  if (parentTitle === "STUDY ABROAD") {
    items.forEach((item, idx) => {
      columns[idx % 3].push(item);
    });
  }

  return (
    <ul
      style={{
        listStyle: "none",
        position: "absolute",
        top: "100%",
        left: 0,
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
        padding: parentTitle === "STUDY ABROAD" ? "20px 25px" : isGrid ? "20px" : "10px",
        minWidth: parentTitle === "STUDY ABROAD" ? "650px" : isGrid ? "500px" : "200px",
        background: "#fff",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        borderRadius: "8px",
        zIndex: 1000,
        display: isGrid ? "grid" : "block",
        gridTemplateColumns: parentTitle === "STUDY ABROAD" ? "repeat(3, 1fr)" : isGrid ? "repeat(3, 1fr)" : "none",
        gap: parentTitle === "STUDY ABROAD" ? "25px" : isGrid ? "15px" : "0",
      }}
    >
      {parentTitle === "STUDY ABROAD"
        ? columns.map((col, colIndex) => (
            <li key={colIndex} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {col.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontWeight: 600,
                    fontSize: "14px",
                    padding: "4px 0",
                    transition: "0.2s",
                    
                  }}
                >
                   {/* FLAG IMAGE */}
                  <img
                    src={item.flag}
                    alt={item.title}
                    style={{
                      width: "20px",
                      height: "14px",
                      objectFit: "cover",
                      borderRadius: "2px",
                      boxShadow: "0 0 2px rgba(0,0,0,0.2)",
                       marginRight: "8px",
                    }}
                  />
                  {item.title}
                   
                </Link>
              ))}
            </li>
          ))
        : items.map((item, index) => (
            <li
              key={index}
              style={{ padding: "6px 8px", position: "relative" }}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",}}>
                <Link
                  to={item.link}
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    fontSize: "13px",
                    fontWeight: 800,
                    fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
                  }}
                >
                  {item.title}
                </Link>
                {item.submenu && <span>▼</span>}
              </div>
              {item.submenu && openIndex === index && (
                <div style={{ position: "absolute", left: "100%", top: 0 }}>
                  <DropdownMenu items={item.submenu} parentTitle={item.title} />
                </div>
              )}
            </li>
          ))}
    </ul>
  );
};

// MainNavbar component
const MainNavbar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <nav
      style={{
        background: "#A020F0",
        height: "80px", 
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        position: "sticky",
        top: 55,
        zIndex: 999,
        fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "stretch",
          height: "100%",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "90%", 
            objectFit: "contain", 
          }}
        />
      </Link>

      {/* Menu items */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "30px",
          margin: 0,
          padding: 0,
          flex: "1 1 auto",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
        }}
      >
        {menuItems
          .filter((item) => !["LOGIN", "SIGNUP"].includes(item.title))
          .map((menu, index) => (
            <li
              key={index}
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <Link
                to={menu.link}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
                }}
              >
                {menu.title}
              </Link>

              {menu.submenu && openIndex === index && (
                <DropdownMenu items={menu.submenu} parentTitle={menu.title} />
              )}
            </li>
          ))}
      </ul>

      {/* Login/Signup */}
      <div
        style={{
          display: "flex",
          gap: "15px",
          flex: "0 0 auto",
          alignItems: "center",
          fontFamily: "Futura, Trebuchet MS, Arial, sans-serif",
        }}
      >
        <Link
          to="/login"
          style={{ textDecoration: "none", color: "white", fontWeight: 600,fontFamily: "Futura, Trebuchet MS, Arial, sans-serif", }}
        >
          Login
        </Link>
        <Link
          to="/signup"
          style={{ textDecoration: "none", color: "white", fontWeight: 600,fontFamily: "Futura, Trebuchet MS, Arial, sans-serif", }}
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default MainNavbar;