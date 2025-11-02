import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './components/Home/Home';
import Tips from './components/Tips/Tips';
import Quiz from './components/Quiz/Quiz';
import Safety from './components/Safety/Safety';
import Cyberbullying from './components/Cyberbullying/Cyberbullying';
import Prevention from './components/Prevention/Prevention';
import Profile from './components/Profile/Profile';
import NamePasswordEntry from './components/NamePasswordEntry/NamePasswordEntry';
import './App.css';

const App: React.FC = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      {showNavbar && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<NamePasswordEntry />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/cyberbullying" element={<Cyberbullying />} />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/NamePasswordEntry" element={<NamePasswordEntry />} />

        </Routes>
      </main>
    </>
  );
};

export default App;