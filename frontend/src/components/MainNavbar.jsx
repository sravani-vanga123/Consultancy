import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/image.png";

import australia from "../assets/Australia.png";
import Europe from "../assets/Europe.png";
import Ireland from "../assets/Ireland.png";
import NewZealand from "../assets/New-Zealand.png";
import USA from "../assets/USA.png";
import Canada from "../assets/canada.png";
import Turkey from "../assets/Turkey.png";
import UK from "../assets/UK.png";
import UAE from "../assets/UAE.png";

// ================= MENU ITEMS =================

const menuItems = [
  {
    title: "HOME",
    link: "/",
  },

  {
    title: "ABOUT US",
    link: "/about",
    submenu: [
      {
        title: "Our Team",
        link: "/about/our-team",
      },
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
          {
            title: "IELTS",
            link: "/services/coaching/ielts",
          },

          {
            title: "ONLINE TRAINING",
            link: "/services/coaching/online-training",

            submenu: [
              {
                title: "MERN FULL STACK",
                link: "/services/coaching/online-training/mern-full-stack",
              },

              {
                title: "MEAN FULL STACK",
                link: "/services/coaching/online-training/mean-full-stack",
              },

              {
                title: "FLUTTER",
                link: "/services/coaching/online-training/flutter",
              },

              {
                title: "PYTHON FULL STACK",
                link: "/services/coaching/online-training/python-full-stack",
              },

              {
                title: "DIGITAL MARKETING",
                link: "/services/coaching/online-training/digital-marketing",
              },
            ],
          },

          {
            title: "BUSINESS ENGLISH",
            link: "/services/coaching/business-english",
          },
        ],
      },

      {
        title: "Career Counselling",
        link: "/services/career-counselling",
      },

      {
        title: "Distance Education",
        link: "/services/distance-education",
      },

      {
        title: "IT Solutions",
        link: "/services/IT-solutions",

        submenu: [
          {
            title: "Web Development",
            link: "/services/IT/web-development",
          },

          {
            title: "Cloud Services",
            link: "/services/IT/cloud-services",
          },

          {
            title: "Cyber Security",
            link: "/services/IT/cyber-security",
          },
        ],
      },

      {
        title: "Recruitment",
        link: "/services/recruitment",
      },

      {
        title: "Immigration",
        link: "/services/immigration",
      },
    ],
  },

  {
    title: "STUDY ABROAD",
    link: "/study-abroad",

    submenu: [
      {
        title: "Australia",
        link: "/study-abroad/australia",
        flag: australia,
      },

      {
        title: "Ireland",
        link: "/study-abroad/ireland",
        flag: Ireland,
      },

      {
        title: "USA",
        link: "/study-abroad/usa",
        flag: USA,
      },

      {
        title: "Canada",
        link: "/study-abroad/canada",
        flag: Canada,
      },

      {
        title: "New Zealand",
        link: "/study-abroad/newzealand",
        flag: NewZealand,
      },

      {
        title: "UK",
        link: "/study-abroad/uk",
        flag: UK,
      },

      {
        title: "Europe",
        link: "/study-abroad/europe",
        flag: Europe,
      },

      {
        title: "Turkey",
        link: "/study-abroad/turkey",
        flag: Turkey,
      },

      {
        title: "UAE",
        link: "/study-abroad/uae",
        flag: UAE,
      },
    ],
  },

  {
    title: "BLOGS",
    link: "/blogs",
  },

  {
    title: "CONTACT US",
    link: "/contact",
  },
];

// ================= DROPDOWN =================

const DropdownMenu = ({
  items,
  parentTitle,
}) => {
  const [openIndex, setOpenIndex] =
    useState(null);

  const isStudyAbroad =
    parentTitle === "STUDY ABROAD";

  const isLargeMenu =
    items.length >= 6 ||
    parentTitle === "SERVICES";

  // Study Abroad: 3 columns
  const columns = [[], [], []];

  if (isStudyAbroad) {
    items.forEach((item, index) => {
      columns[index % 3].push(item);
    });
  }

  const dropdownStyle = {
    listStyle: "none",

    position: "absolute",

    top: "100%",

    left: 0,

    margin: 0,

    padding:
      isStudyAbroad
        ? "20px 25px"
        : isLargeMenu
        ? "20px"
        : "10px",

    minWidth:
      isStudyAbroad
        ? "650px"
        : isLargeMenu
        ? "500px"
        : "210px",

    background: "#ffffff",

    boxShadow:
      "0 8px 20px rgba(0,0,0,0.18)",

    borderRadius: "8px",

    zIndex: 5000,

    display:
      isStudyAbroad || isLargeMenu
        ? "grid"
        : "block",

    gridTemplateColumns:
      isStudyAbroad
        ? "repeat(3, 1fr)"
        : isLargeMenu
        ? "repeat(3, 1fr)"
        : "none",

    gap:
      isStudyAbroad
        ? "25px"
        : "15px",

    boxSizing: "border-box",

    fontFamily:
      "Futura, Trebuchet MS, Arial, sans-serif",
  };

  // ================= STUDY ABROAD =================

  if (isStudyAbroad) {
    return (
      <ul style={dropdownStyle}>
        {columns.map(
          (column, columnIndex) => (
            <li
              key={columnIndex}
              style={{
                display: "flex",

                flexDirection:
                  "column",

                gap: "12px",
              }}
            >
              {column.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  style={{
                    display: "flex",

                    alignItems:
                      "center",

                    textDecoration:
                      "none",

                    color: "#333",

                    fontWeight: 600,

                    fontSize: "14px",

                    padding: "5px",

                    borderRadius:
                      "5px",
                  }}
                >
                  <img
                    src={item.flag}
                    alt={`${item.title} flag`}
                    style={{
                      width: "22px",

                      height: "15px",

                      objectFit:
                        "cover",

                      borderRadius:
                        "2px",

                      marginRight:
                        "9px",

                      boxShadow:
                        "0 0 2px rgba(0,0,0,0.3)",
                    }}
                  />

                  {item.title}
                </Link>
              ))}
            </li>
          )
        )}
      </ul>
    );
  }

  // ================= NORMAL DROPDOWN =================

  return (
    <ul style={dropdownStyle}>
      {items.map(
        (item, index) => (
          <li
            key={item.title}
            style={{
              padding:
                "7px 8px",

              position:
                "relative",

              whiteSpace:
                "nowrap",
            }}
            onMouseEnter={() =>
              setOpenIndex(index)
            }
            onMouseLeave={() =>
              setOpenIndex(null)
            }
          >
            <div
              style={{
                display:
                  "flex",

                alignItems:
                  "center",

                justifyContent:
                  "space-between",

                gap:
                  "15px",
              }}
            >
              <Link
                to={item.link}
                style={{
                  textDecoration:
                    "none",

                  color:
                    "#333",

                  fontSize:
                    "13px",

                  fontWeight:
                    700,
                }}
              >
                {item.title}
              </Link>

              {item.submenu && (
                <span
                  style={{
                    fontSize:
                      "10px",
                  }}
                >
                  ▶
                </span>
              )}
            </div>

            {/* Nested submenu */}

            {item.submenu &&
              openIndex === index && (
                <div
                  style={{
                    position:
                      "absolute",

                    left:
                      "100%",

                    top:
                      0,

                    zIndex:
                      6000,
                  }}
                >
                  <DropdownMenu
                    items={
                      item.submenu
                    }
                    parentTitle={
                      item.title
                    }
                  />
                </div>
              )}
          </li>
        )
      )}
    </ul>
  );
};

// ================= MAIN NAVBAR =================

const MainNavbar = () => {
  const [
    openIndex,
    setOpenIndex,
  ] = useState(null);

  const location =
    useLocation();

  // Hide Navbar on Login and Signup pages

  const hideNavbar =
    location.pathname ===
      "/login" ||
    location.pathname ===
      "/signup";

  if (hideNavbar) {
    return null;
  }

  return (
    <nav
      style={{
        background:
          "#A020F0",

        height:
          "80px",

        display:
          "flex",

        alignItems:
          "center",

        justifyContent:
          "space-between",

        padding:
          "0 40px",

        position:
          "sticky",

        top:
          "55px",

        zIndex:
          999,

        fontFamily:
          "Futura, Trebuchet MS, Arial, sans-serif",

        boxSizing:
          "border-box",
      }}
    >
      {/* LOGO */}

      <Link
        to="/"
        style={{
          display:
            "flex",

          alignItems:
            "center",

          height:
            "100%",
        }}
      >
        <img
          src={logo}
          alt="Moin Consultancy Logo"
          style={{
            height:
              "85px",

            maxWidth:
              "180px",

            objectFit:
              "contain",
          }}
        />
      </Link>

      {/* MAIN MENU */}

      <ul
        style={{
          listStyle:
            "none",

          display:
            "flex",

          alignItems:
            "center",

          justifyContent:
            "center",

          gap:
            "28px",

          margin:
            0,

          padding:
            0,

          flex:
            "1",

          fontFamily:
            "Futura, Trebuchet MS, Arial, sans-serif",
        }}
      >
        {menuItems.map(
          (menu, index) => (
            <li
              key={menu.title}
              style={{
                position:
                  "relative",
              }}
              onMouseEnter={() =>
                setOpenIndex(
                  index
                )
              }
              onMouseLeave={() =>
                setOpenIndex(
                  null
                )
              }
            >
              <Link
                to={menu.link}
                style={{
                  textDecoration:
                    "none",

                  color:
                    "white",

                  fontSize:
                    "14px",

                  fontWeight:
                    600,

                  textTransform:
                    "uppercase",

                  whiteSpace:
                    "nowrap",
                }}
              >
                {menu.title}

                {menu.submenu &&
                  " ▾"}
              </Link>

              {menu.submenu &&
                openIndex ===
                  index && (
                  <DropdownMenu
                    items={
                      menu.submenu
                    }
                    parentTitle={
                      menu.title
                    }
                  />
                )}
            </li>
          )
        )}
      </ul>

      {/* LOGIN / SIGNUP */}

      <div
        style={{
          display:
            "flex",

          alignItems:
            "center",

          gap:
            "15px",

          whiteSpace:
            "nowrap",
        }}
      >
        <Link
          to="/login"
          style={{
            color:
              "white",

            textDecoration:
              "none",

            fontWeight:
              700,

            fontSize:
              "14px",
          }}
        >
          Login
        </Link>

        <Link
          to="/signup"
          style={{
            color:
              "white",

            textDecoration:
              "none",

            fontWeight:
              700,

            fontSize:
              "14px",

            padding:
              "9px 15px",

            border:
              "1px solid white",

            borderRadius:
              "5px",
          }}
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default MainNavbar;