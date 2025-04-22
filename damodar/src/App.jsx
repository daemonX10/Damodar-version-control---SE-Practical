import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx';
import Home from './pages/home/Home.jsx';

import "tailwindcss";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}


export default App;