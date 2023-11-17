import React, { useState } from "react";
import StaffProfilePage from "../StaffProfilePage";
import "./StaffLogin.css";
// import { Link } from "react-router-dom";

export default function StaffLogin() {
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });

  const [formControls, setFormControls] = useState({
    isLoggedIn: false,
    IncorrectMessage: "",
  });

  const handleInputData = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (formInput.username == "abcd" && formInput.password == "1234") {
      setFormControls({ ...formControls, isLoggedIn: true });
    } else {
      setFormControls({ ...formControls, isLoggedIn: false });
      setFormControls({
        ...formControls,
        IncorrectMessage: "Incorrect Username or Password!",
      });
    }
  };

  return (
    <div className="Staff-login-mainDiv">
      {formControls.isLoggedIn ? (
        <StaffProfilePage />
      ) : (
        // <Link to='managementProfile' />
        <div className="staff-login-login-container">
          <form className="staff-login-login-form">
            <h1>Staff Login</h1>
            <div className="staff-login-input-container">
              <input
                className="username"
                type="text"
                placeholder="Username"
                name="username"
                required
                onChange={handleInputData}
              />
            </div>
            <div className="staff-login-input-container">
              <input
                className="password"
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={handleInputData}
              />
            </div>
            <button className="staff-login-loginButton" onClick={handleLogin}>
              Log In
            </button>
            <p className="staff-login-IncorrectMessage">{formControls.IncorrectMessage}</p>
            {/* <p>Forgot Password?</p> */}
            <a>Don't have an account? Sign In</a>
          </form>
        </div>
      )}
    </div>
  );
}
