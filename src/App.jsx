import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import FirstNavbar from "./components/FirstNavbar";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import MainRouter from "./components/MainRouter";

function Layout() {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/SignUp"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* Hide Navbars */}
      {!shouldHideNavbar && <FirstNavbar />}
      {!shouldHideNavbar && <MainNavbar />}

      <MainRouter />

      {/* Optional: also hide footer */}
      {!shouldHideNavbar && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;