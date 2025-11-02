
import React from 'react';
import './Tips.css';

const Tips: React.FC = () => {
  return (
    <div className="tips-container">
      <h1>Tips for Reducing Screen Time</h1>
      <div className="tips-grid">
        <div className="tip-card">
          <div className="tip-icon"></div>
          <h3>Schedule Regular Breaks</h3>
          <p>Use the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.</p>
        </div>
        <div className="tip-card">
          <div className="tip-icon"></div>
          <h3>Set App Time Limits</h3>
          <p>Most smartphones have built-in features to set daily time limits for specific apps.</p>
        </div>
        <div className="tip-card">
          <div className="tip-icon"></div>
          <h3>“Phone-Free” Bedtime</h3>
          <p>Avoid screens for at least an hour before bed to improve sleep quality.</p>
        </div>
        <div className="tip-card">
          <div className="tip-icon"></div>
          <h3>Engage in Offline Hobbies</h3>
          <p>Rediscover the joy of reading, exercising, or spending time with loved ones.</p>
        </div>
        <div className="tip-card">
          <div className="tip-icon"></div>
          <h3>Mindful Notifications</h3>
          <p>Turn off non-essential notifications to reduce distractions.</p>
        </div>
        <div className="tip-card">
          <div className="tip-icon"></div>
          <h3>Designate “No-Phone” Zones</h3>
          <p>Create areas in your home, like the dinner table, where phones are not allowed.</p>
        </div>
      </div>
    </div>
  );
};

export default Tips;
