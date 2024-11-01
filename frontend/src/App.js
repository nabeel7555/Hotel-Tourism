import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Forgot from './Components/Forgot';
import Verify from './Components/Verify';
import Newpass from './Components/Newpass';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/newpass" element={<Newpass />} />
        <Route path="/home" element={<Home />} />


    </Routes>
</Router>
  );
}

export default App;   