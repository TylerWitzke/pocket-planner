import React from "react";
import "./LoginSignup.css";
import GeneralButton from "../GeneralButton/GeneralButton";
import pocketPlannerImage from "../assets/pocket-planner.png";
import { useNavigate } from "react-router";

const LoginSignup = () => {
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login");
  };

  const redirectToSignup = () => {
    navigate("/signup");
  };

  const redirectToGuest = () => {
    navigate("/main");
  };

  return (
    <div className="outer-container">
      <img src={pocketPlannerImage} alt="Pocket Planner" className="image" />
      <div className="button-container">
        <GeneralButton
          label="Login"
          onClick={redirectToLogin}
          paddingTop="20px"
          paddingBottom="20px"
        />
        <GeneralButton
          label="Signup"
          onClick={redirectToSignup}
          paddingTop="20px"
          paddingBottom="20px"
        />
        <GeneralButton
          label="Continue as Guest"
          onClick={redirectToGuest}
          paddingTop="20px"
          paddingBottom="20px"
        />
      </div>
    </div>
  );
};

export default LoginSignup;
