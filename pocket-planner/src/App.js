import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
//import RadioButton from './components/RadioButton/RadioButton';
import Browse from './components/Browse/Browse'
import ItemInfoScreen from './components/ItemInfoScreen/ItemInfoScreen';
import TestAddItem from './components/TestAddItem/TestAddItem';
import TestMain from './components/TestMain/TestMain';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const test = false;

function App() {
  return (
    <div>
      { test && <LoginSignup/>}
      { test && <Signup/>}
      { test && <Login/>}
      { test && <ForgotPassword/>}
      {/* { test && <RadioButton options={[{ label: 'Option 1', value: 'first' }, { label: 'Option 2', value: 'second' }]} />} */}
      { test && <Browse/>}
      { test && <ItemInfoScreen/>}
      { test && <TestAddItem/>}
      { !test && <TestMain/>}
      { test && <MainPage/>}
    </div>
/*
    <Router>
    <Routes>
      <Route path="/" element={<LoginSignup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/big-blue-ring" element={ItemInfoScreen} />
    </Routes>
  </Router>*/
  );
}

export default App;
