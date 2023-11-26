import React, { useState } from 'react';
import InputBox from '../InputBox/InputBox';
import GeneralButton from '../GeneralButton/GeneralButton';
import passwordIcon from '../assets/password_icon.png'
import usernameIcon from '../assets/username_icon.png'
import './Login.css';

const Login = () => {
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [usernameInputValue, setUsernameInputValue] = useState('');

    const handlePasswordInputChange = (e) => {
        setPasswordInputValue(e.target.value);
      };
    
      const handleUsernameInputChange = (e) => {
        setUsernameInputValue(e.target.value);
      };

  return (
    <div>
      <a
        href="#"
        onClick={() => {
          console.log("Go back");
        }}
      >
        Back
      </a>
      <h1 className="basic-header">Login</h1>
      <div className="top-text">
        Create Your Account and Streamline Your Travel Experience:
        <span className="red-text"> Your Next Adventure Awaits!</span>
      </div>
      <h4 className='basic-h4'>Username</h4>
      <div className='inputbox-container'>
      <InputBox icon={usernameIcon} placeholder="EX. Austin1" value={usernameInputValue} onChange={handleUsernameInputChange} type="text"/>
      </div>
      <h4 className='basic-h4'>Password</h4>
      <div className='inputbox-container'>
      <InputBox icon={passwordIcon} placeholder="password" value={passwordInputValue} onChange={handlePasswordInputChange} type="password"/>
      </div>
      <a className='forgot-password' href="#" onClick={()=>{console.log("forgot passowrd")}}>Forgot Password?</a>
      <div className='bottom-text'>
        Don't have an account? 
        <span className='red-text-underline' onClick={()=>{console.log("yolo")}}> Register</span>
      </div>
      <div className='button-container'>
      <GeneralButton label="Signup" onClick={()=>{console.log("fook")}} paddingTop="20px" paddingBottom="20px"/>
      </div>
    </div>
  );
};

export default Login;
