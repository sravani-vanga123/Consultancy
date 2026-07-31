// src/router/MainRouter.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import OurTeam from "../pages/OurTeam";
import Career from "../pages/Career";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import ApplyNow from "../pages/Apply";
import BlogPage from "../pages/Blogs";


// Study Abroad
import StudyAbroad from "../pages/StudyAbroad";
import USA from "../pages/USA";
import UK from "../pages/UK";
import UAE from "../pages/UAE";
import Canada from "../pages/Canada";
import Australia from "../pages/Australia";
import Europe from "../pages/Europe";
import NewZealand from "../pages/NewZealand";
import Ireland from "../pages/Ireland";
import Turkey from "../pages/Turkey";

// Services
import CareerCounsellingPage from "../pages/CareerConselling";
import ImmigrationPage from "../pages/Immigration";
import RecruitmentPage from "../pages/Recruitment";
import DistanceEducationPage from "../pages/DistanceEducation";

// IT Services
import CloudServicesPage from "../pages/CloudServices";
import CyberSecurityPage from "../pages/CyberSecurity";
import WebDevelopmentPage from "../pages/WebDevelopment";

// Coaching
import IELTS from "../pages/IeltsPage";
import OnlineTrainingPage from "../pages/OnlineTraining";
import MernFullStack from "../pages/MernFullStack";
import MeanFullStack from "../pages/MeanFullStack";
import PythonFullStack from "../pages/PythonFullStack";
import Flutter from "../pages/Flutter";
import DigitalMarketing from "../pages/DigitalMarketing";
import BusinessEnglish from "../pages/BusinessEnglishPage";

const MainRouter = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* About */}
      <Route path="/about" element={<AboutUs />} />
      <Route path="/about/our-team" element={<OurTeam />} />
      <Route path="/career" element={<Career />} />

      {/* Study Abroad */}
      <Route path="/study-abroad" element={<StudyAbroad />} />
      <Route path="/study-abroad/usa" element={<USA />} />
      <Route path="/study-abroad/uk" element={<UK />} />
      <Route path="/study-abroad/uae" element={<UAE />} />
      <Route path="/study-abroad/canada" element={<Canada />} />
      <Route path="/study-abroad/australia" element={<Australia />} />
      <Route path="/study-abroad/europe" element={<Europe />} />
      <Route path="/study-abroad/newzealand" element={<NewZealand />} />
      <Route path="/study-abroad/ireland" element={<Ireland />} />
      <Route path="/study-abroad/turkey" element={<Turkey />} />

      {/* Services */}
      <Route path="/services" element={<Services />} />
      <Route path="/services/IT/cloud-services" element={<CloudServicesPage />} />
      <Route path="/services/IT/cyber-security" element={<CyberSecurityPage />} />
      <Route path="/services/IT/web-development" element={<WebDevelopmentPage />} />
      <Route path="/services/career-counselling" element={<CareerCounsellingPage />} />
      <Route path="/services/immigration" element={<ImmigrationPage />} />
      <Route path="/services/recruitment" element={<RecruitmentPage />} />
      <Route path="/services/distance-education" element={<DistanceEducationPage />} />

      {/* Coaching */}
      <Route path="/services/coaching/ielts" element={<IELTS />} />
      <Route path="/services/coaching/online-training" element={<OnlineTrainingPage />} />
      <Route path="/services/coaching/online-training/mern-full-stack" element={<MernFullStack />} />
      <Route path="/services/coaching/online-training/mean-full-stack" element={<MeanFullStack />} />
      <Route path="/services/coaching/online-training/flutter" element={<Flutter />} />
      <Route path="/services/coaching/online-training/python-full-stack" element={<PythonFullStack />} />
      <Route path="/services/coaching/online-training/digital-marketing" element={<DigitalMarketing />} />
      <Route path="/services/coaching/business-english" element={<BusinessEnglish />} />

      {/* Other */}
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/apply-now" element={<ApplyNow />} />

      {/* Redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MainRouter;