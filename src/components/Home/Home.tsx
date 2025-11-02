
import React, { useState, useEffect } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        {userName ? (
          <h1>Welcome, {userName} to CyberBuddy!</h1>
        ) : (
          <h1>Welcome to CyberBuddy</h1>
        )}
        <p>Your journey to a healthier digital life starts here.</p>
      </header>
      <section className="home-section">
        <h2>The Impact of Excessive Screen Time</h2>
        <p>
          In today's digital age, we spend more time than ever staring at screens. While technology offers many benefits, excessive screen time can have a negative impact on our mental and physical health. It can lead to eye strain, sleep problems, and even anxiety and depression.
        </p>
        <p>
          This website is dedicated to helping you build healthier digital habits and find a better balance between your online and offline life.
        </p>
      </section>
      <section className="home-section">
        <h2>What You'll Find Here</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Tips for Reducing Screen Time</h3>
            <p>Discover practical strategies to take control of your screen time.</p>
          </div>
          <div className="feature-card">
            <h3>Digital Habits Quiz</h3>
            <p>Assess your digital habits and get personalized recommendations.</p>
          </div>
          <div className="feature-card">
            <h3>Safety & Security Tips</h3>
            <p>Learn how to protect yourself from online threats.</p>
          </div>
          <div className="feature-card">
            <h3>Cyberbullying Cases</h3>
            <p>Read real-life stories and learn from others' experiences.</p>
          </div>
          <div className="feature-card">
            <h3>Prevention Guide</h3>
            <p>Get a step-by-step guide to safer internet practices.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
