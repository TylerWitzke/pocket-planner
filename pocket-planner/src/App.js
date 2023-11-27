import logo from './logo.svg';
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
// import RadioButton from './components/RadioButton/RadioButton';
import Item from './components/Item/Item';

const test = false;

function App() {
  return (
    <div>
      { test && <LoginSignup/>}
      { test && <Signup/>}
      { test && <Login/>}
      { test && <ForgotPassword/>}
      {/* { !test && <RadioButton options={[{ label: 'Option 1', value: 'first' }, { label: 'Option 2', value: 'second' }]} />} */}
      { !test && <Item label="Test item" onClick={()=>{console.log("fook")}} paddingTop="200px" paddingBottom="20px"/>}
    </div>
  );
}

export default App;
