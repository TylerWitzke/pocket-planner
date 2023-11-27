import logo from './logo.svg';
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
// import RadioButton from './components/RadioButton/RadioButton';
import Item from './components/Item/Item';
import Browse from './components/Browse/Browse'

const test = false;

function App() {
  return (
    <div>
      { test && <LoginSignup/>}
      { test && <Signup/>}
      { test && <Login/>}
      { test && <ForgotPassword/>}
      {/* { !test && <RadioButton options={[{ label: 'Option 1', value: 'first' }, { label: 'Option 2', value: 'second' }]} />} */}
      { !test && <Browse/>}
    </div>
  );
}

export default App;
