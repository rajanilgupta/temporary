import React from "react";
import "./LandingPage.css"; // Import the CSS file for styling
import img from "./How-do-hackathons-work.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import Slider from "./Slider";
import Navbar from "./NavBar";
const LandingPage = () => {
  const images = [img, img2, img3];
  return (
    <div className="outer">
      <Navbar />
      {/* <header className="header">
       
        <h1>PortalX</h1>
        <p>Take part in exciting hackathons and showcase your skills!</p>
        <div className="button-container">
          <a href="/register" className="btn">
            Register
          </a>
          <a href="/register" className="btn">
            Register
          </a>
          <a href="/register" className="btn">
            Register
          </a>
          <a href="/register" className="btn">
            Register
          </a>
          <a href="/register" className="btn">
            Register
          </a>
          <a href="/login" className="btn login-btn">
            Login
          </a>
        </div>
      </header> */}

      <section className="container">
        <h2>Welcome to the Hackathon Portal</h2>
        <p>
          Are you ready to unleash your creativity and problem-solving skills?
          Join our hackathons and compete with the best minds in the industry.
        </p>
        <p>What are you waiting for? Register now!</p>
      </section>
      {/* 
      <Slider images={images} /> */}
      <footer className="footer">
        <p>&copy; 2023 Genzeon. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
