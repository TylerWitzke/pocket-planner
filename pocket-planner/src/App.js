import logo from './logo.svg';
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import Signup from './components/Signup/Signup';

const test = false;

function App() {
  return (
    <div>
      { test && <LoginSignup/>}
      { !test && <Signup/>}
    </div>
  );
}

export default App;
