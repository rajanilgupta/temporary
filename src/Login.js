import React, { useEffect, useState } from "react";
import "./Login.css"; // Import the CSS file for styling
import { useNavigate } from "react-router";
import axios from "axios";
import swal from "sweetalert";
import loginvalidation from "./loginvalidation";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [team, setTeam] = useState({
    username: "",
    password: "",
  });

  // const [user, setUser] = useState({
  //   name: "morpheus",
  //   job: "leader",
  // });
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log("Login submitted");
    console.log("Username:", username);
    console.log("Password:", password);
    setErrors(loginvalidation(team));
    setUsername("");
    setPassword("");
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log("Forgot password clicked");
  };

  useEffect(() => {
    console.log("inside useeffect");
    if (submitted) {
      axios
        .post("https://reqres.in/api/users", team)
        .then((resp) => {
          let result = resp.data.data;
          console.log(resp);
          sessionStorage.setItem("teamname", result.teamname);
          sessionStorage.setItem("teamid", result.teamid);
          sessionStorage.setItem("role", result.role);
          dispatch({ type: "IsLoggedIn" });

          navigate("teamHome");
        })
        .catch((error) => {
          console.log("error", error);
          swal({
            title: "Error",
            text: "Invlaid username or password",
            icon: "error",
            button: "ok",
          });
        });
    }
  }, [errors]);

  return (
    <div className="outer">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="button-container">
            <button type="submit">Login</button>
            <button type="button" onClick={handleForgotPassword}>
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
