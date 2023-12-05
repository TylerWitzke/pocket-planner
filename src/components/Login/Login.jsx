import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import GeneralButton from "../GeneralButton/GeneralButton";
import passwordIcon from "../assets/password_icon.png";
import usernameIcon from "../assets/username_icon.png";
import "./Login.css";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const redirectBack = () => {
    navigate(-1);
  };

  const redirectToForgotPassword = () => {
    navigate("/forgot-password");
  };

  const redirectToSignup = () => {
    navigate("/signup");
  };

  const redirectToMain = () => {
    navigate("/main");
  };
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [usernameInputValue, setUsernameInputValue] = useState("");

  const handlePasswordInputChange = (e) => {
    setPasswordInputValue(e.target.value);
  };

  const handleUsernameInputChange = (e) => {
    setUsernameInputValue(e.target.value);
  };

  return (
    <div>
      <a href="#" onClick={redirectBack}>
        Back
      </a>
      <h1 className="basic-header">Login</h1>
      <div className="top-text">
        Create Your Account and Streamline Your Travel Experience:
        <span className="red-text"> Your Next Adventure Awaits!</span>
      </div>
      <h4 className="basic-h4">Username</h4>
      <div className="inputbox-container">
        <InputBox
          icon={usernameIcon}
          placeholder="EX. Austin1"
          value={usernameInputValue}
          onChange={handleUsernameInputChange}
          type="text"
        />
      </div>
      <h4 className="basic-h4">Password</h4>
      <div className="inputbox-container">
        <InputBox
          icon={passwordIcon}
          placeholder="password"
          value={passwordInputValue}
          onChange={handlePasswordInputChange}
          type="password"
        />
      </div>
      <a
        className="forgot-password"
        href="#"
        onClick={redirectToForgotPassword}
      >
        Forgot Password?
      </a>
      <div className="bottom-text">
        Don't have an account?
        <span className="red-text-underline" onClick={redirectToSignup}>
          {" "}
          Register
        </span>
      </div>
      <div className="button-container">
        <GeneralButton
          label="Login"
          onClick={redirectToMain}
          paddingTop="20px"
          paddingBottom="20px"
        />
      </div>
    </div>
  );
};

export default Login;
