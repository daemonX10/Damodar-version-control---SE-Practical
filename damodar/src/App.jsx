import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx';

import "tailwindcss";
import './App.css';

function App() {
  return (
    <Router>
      <nav className="flex justify-center space-x-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/login" className="text-blue-500">Login</Link>
        <Link to="/register" className="text-blue-500">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>This is a basic app for version control.</p>
    </div>
  );
}

export default App;