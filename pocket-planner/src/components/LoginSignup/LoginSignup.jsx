import React from 'react'
import './LoginSignup.css'
import GeneralButton from '../GeneralButton/GeneralButton'
import pocketPlannerImage from '../assets/pocket-planner.png'

const LoginSignup = () => {
  return (
    <div className="outer-container">
    <img
        src={pocketPlannerImage}
        alt="Pocket Planner"
        className="image"
      />
    <div className='button-container'>
        <GeneralButton label="Login" onClick={()=>{console.log("fook")}} paddingTop="20px" paddingBottom="20px"/>
        <GeneralButton label="Signup" onClick={()=>{console.log("fook")}} paddingTop="20px" paddingBottom="20px"/>
        <GeneralButton label="Continue as Guest" onClick={()=>{console.log("fook")}} paddingTop="20px" paddingBottom="20px"/>
    </div>
    </div>
  )
}

export default LoginSignup