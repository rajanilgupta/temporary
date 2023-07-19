import React, { useState } from "react";
import "./Navbar.css"; // Import your CSS file for styling
import logo from "./Images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LogOut" });
    sessionStorage.clear();
    navigate("/");
  };
  console.log(sessionStorage.getItem("role"));

  if (sessionStorage.getItem("role") === "admin")
    return (
      <nav className="navbar">
        <div>
          <a href="/adminHome" className="logo">
            PortalX
          </a>
        </div>
        <div className="navbar-buttons">
          <button className="create-hackathon-button">Create Hackathon</button>
          <button className="show-teams-button">Show Teams</button>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    );
  if (sessionStorage.getItem("role") === "team")
    return (
      <nav className="navbar">
        <div>
          <a href="/teamHome" className="logo">
            PortalX
          </a>
        </div>
        <div className="navbar-buttons">
          <button>
            <Link to="/teamMembers" className="link">
              Show Team Members
            </Link>
          </button>
          <button>User Stories</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    );
  return (
    <nav className="navbar">
      <div>
        <a href="/adminHome" className="logo">
          PortalX
        </a>
      </div>
      <br></br>
      <div className="navbar-buttons">
        <button className="create-hackathon-button">Genzeon Hackathon</button>
        <button className="show-teams-button">Guidelines</button>
        <button>
          <Link className="link">Support</Link>
        </button>
        <button>
          <Link to="/login" className="link">
            Login
          </Link>
        </button>
        <button>
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
