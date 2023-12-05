import React, { useState } from "react";
import "./ForgotPassword.css";
import passwordIcon from "../assets/password_icon.png";
import emailIcon from "../assets/email_icon.png";
import InputBox from "../InputBox/InputBox";
import GeneralButton from "../GeneralButton/GeneralButton";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const first_message =
    "Recover your password if you have forgot the password!";
  const second_message =
    "We have sent a code to your email with a verification number!";
  const third_message = "Set your new password to login into your account!";
  const fourth_message =
    "Your password has been successfully reset, login to access your account!";

  const [pageNumberValue, setPageNumberValue] = useState(0);
  const [emailInputValue, setEmailInputValue] = useState("");
  const [verificationInputValue, setVerificaionInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");
  const [headerValue, setHeaderValue] = useState("Forgot Password?");
  const [messageValue, setMessageValue] = useState(first_message);
  const [h4HeaderValue, setH4HeaderValue] = useState("Email");
  const [buttonTitle, setButtonTitle] = useState("Submit");
  const navigate = useNavigate();

  const handleEmailInputChange = (e) => {
    setEmailInputValue(e.target.value);
  };

  const handleVerificaitonInputChange = (e) => {
    setVerificaionInputValue(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPasswordInputValue(e.target.value);
  };

  const headerValueSwitchHandler = (val) => {
    let title = "Forgot Password?";
    if (val == 3) {
      title = "Password Reset Success";
    }
    setHeaderValue(title);
  };

  const messageValueSwitchHandler = (val) => {
    let result = "";
    switch (val) {
      case 0:
        result = first_message;
        break;

      case 1:
        result = second_message;
        break;

      case 2:
        result = third_message;
        break;

      case 3:
        result = fourth_message;
        break;

      default:
        result = "We are in a bad state";
    }
    setMessageValue(result);
  };

  const h4ValueSwitchHandler = (val) => {
    let result = "";
    switch (val) {
      case 0:
        result = "Email";
        break;

      case 1:
        result = "Verification Code";
        break;

      case 2:
        result = "Enter New Password";
        break;

      default:
        result = "";
    }
    setH4HeaderValue(result);
  };

  const buttonTitleSwitchHandler = (val) => {
    let result = "";
    switch (val) {
      case 2:
        result = "Confirm";
        break;

      case 3:
        result = "Login";
        break;

      default:
        result = "Submit";
    }
    setButtonTitle(result);
  };

  const updateParameters = (val) => {
    headerValueSwitchHandler(val);
    messageValueSwitchHandler(val);
    h4ValueSwitchHandler(val);
    buttonTitleSwitchHandler(val);
  };

  const submitHander = () => {
    let val = pageNumberValue;
    if (pageNumberValue < 3) {
      setPageNumberValue(pageNumberValue + 1);
      val++;
    } else {
      navigate("/login");
    }

    updateParameters(val);
  };

  const backHandler = () => {
    let val = pageNumberValue;
    if (pageNumberValue > 0) {
      setPageNumberValue(pageNumberValue - 1);
      val++;
    } else {
      navigate("/login");
    }

    updateParameters(val);
  };

  return (
    <div>
      <a href="#" onClick={backHandler}>
        Back
      </a>
      <h1 className="basic-header">{headerValue}</h1>
      <div className="top-text">{messageValue}</div>
      <h4 className="basic-h4">{h4HeaderValue}</h4>
      <div className="inputbox-container">
        {pageNumberValue == 0 && (
          <InputBox
            icon={emailIcon}
            placeholder="Ex: austin@example.com"
            value={emailInputValue}
            onChange={handleEmailInputChange}
            type="email"
          />
        )}
        {pageNumberValue == 1 && (
          <InputBox
            placeholder="Ex: 123456"
            value={verificationInputValue}
            onChange={handleVerificaitonInputChange}
            type="text"
          />
        )}
        {pageNumberValue == 2 && (
          <InputBox
            icon={passwordIcon}
            placeholder="password"
            value={passwordInputValue}
            onChange={handlePasswordInputChange}
            type="password"
          />
        )}
      </div>
      <div className="button-container">
        <GeneralButton
          label={buttonTitle}
          onClick={submitHander}
          paddingTop="20px"
          paddingBottom="20px"
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
