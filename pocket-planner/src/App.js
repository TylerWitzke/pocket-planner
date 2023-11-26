import logo from './logo.svg';
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

const test = false;

function App() {
  return (
    <div>
      { test && <LoginSignup/>}
      { test && <Signup/>}
      { !test && <Login/>}
    </div>
  );
}

export default App;
