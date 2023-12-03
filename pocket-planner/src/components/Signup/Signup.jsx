import React, { useState } from "react";
import GeneralButton from "../GeneralButton/GeneralButton";
import InputBox from "../InputBox/InputBox";
import emailIcon from "../assets/email_icon.png";
import passwordIcon from "../assets/password_icon.png";
import usernameIcon from "../assets/username_icon.png";
import "./Signup.css";
import { useNavigate } from "react-router";

const Signup = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [usernameInputValue, setUsernameInputValue] = useState("");

  const navigate = useNavigate();

  const redirectBack = () => {
    navigate(-1);
  };

  const redirectToLogin = () => {
    navigate("/login");
  };

  const redirectToHome = () => {
    navigate("/");
  };

  const handleEmailInputChange = (e) => {
    setEmailInputValue(e.target.value);
  };

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
      <h1 className="basic-header">Sign Up</h1>
      <div className="top-text">
        Create Your Account and Streamline Your Travel Experience:
        <span className="red-text"> Your Next Adventure Awaits!</span>
      </div>
      <h4 className="basic-h4">Email</h4>
      <div className="inputbox-container">
        <InputBox
          icon={emailIcon}
          placeholder="EX: austin@example.com"
          value={emailInputValue}
          onChange={handleEmailInputChange}
          type="email"
        />
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
      <div className="bottom-text">
        Already have an account?
        <span className="red-text-underline" onClick={redirectToLogin}>
          {" "}
          Login
        </span>
      </div>
      <div className="button-container">
        <GeneralButton
          label="Signup"
          onClick={redirectToHome}
          paddingTop="20px"
          paddingBottom="20px"
        />
      </div>
    </div>
  );
};

export default Signup;
