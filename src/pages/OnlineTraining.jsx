import React from "react";
import OnlineTrainingImg from "../assets/online.png"; // make sure path is correct

const OnlineTrainingPage = () => {
  return (
    <div style={{ backgroundColor: "beige", minHeight: "100vh", padding: "10px", }}>
      
      <div style={{ padding: "0px",   margin:"0px", textAlign: "left", fontFamily: "Futura, Trebuchet MS, Arial, sans-serif", }}>
        
        <img
          src={OnlineTrainingImg}
          alt="Online Training"
          style={{ width: "1500px", height: "550px", objectFit: "cover" }}
        />

        <h1>Online Training</h1>

        <p>
          Online training is an educational method that allows learners to access courses and materials via the internet, offering flexibility and convenience. 
          Participants can engage with interactive modules, videos, and live sessions from any location, making it ideal for busy schedules. 
          It covers a wide range of subjects, from professional skills to personal development, and often includes practical exercises and assessments. 
          Online training provides a cost-effective and accessible way to gain new skills and advance careers.
        </p>

        <h2>We Offer Online Training</h2>

        <p>
          We provide comprehensive online training designed to meet your educational needs from the comfort of your home. 
          Our programs feature interactive lessons, expert instructors, and practical exercises across various subjects. 
          With the flexibility to learn at your own pace and access resources anytime, you can balance your studies with your schedule. 
          Whether you’re seeking professional development or personal enrichment, our online training delivers high-quality education tailored to help you succeed.
        </p>

      </div>
    </div>
  );
};

export default OnlineTrainingPage;