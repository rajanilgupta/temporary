import React, { useEffect, useState } from "react";
import teamvalidation from "./teamvalidation";
import "./HackathonRegistration.css";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router";
const HackathonRegistration = () => {
  const [teamName, setTeamName] = useState("");
  const [participants, setParticipants] = useState("");
  const [college, setCollege] = useState("");
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [team, setTeam] = useState({
    teamName: "",
    participants: "",
    college: "",
    contact: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(teamvalidation(team));
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      axios
        .post("-----------", team)
        .then((resp) => {
          swal({
            title: "Success",
            text: "Customer Registered Successfully",
            icon: "Success",
            button: "OK",
          });
          navigate("/login");
        })
        .catch((error) => {
          console.log("Error", error);
          swal({
            title: "Error",
            text: "Team not registered",
            icon: "error",
            button: "ok",
          });
        });
    }
  }, [errors]);

  return (
    <div className="registration-container">
      <br></br>
      <br></br>
      <h2>Team Registration</h2>
      <form className="registration-form" onSubmit={handleFormSubmit}>
        <label htmlFor="teamName">Team Name:</label>
        <input
          type="text"
          id="teamName"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="participants">Number of Participants:</label>
        <select
          id="participants"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          required
        >
          <option value="" disabled>
            Select
          </option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br />
        <br />

        <label htmlFor="college">College:</label>
        <input
          type="text"
          id="college"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <br />

        <button type="submit">Register</button>

        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default HackathonRegistration;
