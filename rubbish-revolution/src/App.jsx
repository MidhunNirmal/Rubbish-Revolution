import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Scanner from './pages/Scanner';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderbord';
import ScoreAnimation from './pages/ScoreAnimation/ScoreAnimation';
import ScanAgainButton from './components/ScanAgainButton';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/leaderbord' element={<Leaderboard />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/scoreincreased" element={<ScoreAnimation />} />
          <Route path="/scanagain" element={<ScanAgainButton />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App