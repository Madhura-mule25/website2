
import React from 'react';
import './Safety.css';

const Safety: React.FC = () => {
  return (
    <div className="safety-container">
      <h1>Safety & Security Tips</h1>
      <div className="safety-grid">
        <div className="safety-card">
          <h3>Use Strong, Unique Passwords</h3>
          <p>Create complex passwords with a mix of letters, numbers, and symbols. Use a password manager to keep track of them.</p>
        </div>
        <div className="safety-card">
          <h3>Enable Two-Factor Authentication (2FA)</h3>
          <p>Add an extra layer of security to your accounts by requiring a second verification step.</p>
        </div>
        <div className="safety-card">
          <h3>Recognize Phishing Attempts</h3>
          <p>Be wary of suspicious emails or messages asking for personal information. Look for red flags like typos and generic greetings.</p>
        </div>
        <div className="safety-card">
          <h3>Adjust Privacy Settings</h3>
          <p>Review and customize the privacy settings on your social media accounts to control who sees your information.</p>
        </div>
        <div className="safety-card">
          <h3>Keep Software Updated</h3>
          <p>Regularly update your operating system, browser, and other software to patch security vulnerabilities.</p>
        </div>
        <div className="safety-card">
          <h3>Be Mindful of Public Wi-Fi</h3>
          <p>Avoid accessing sensitive information on public Wi-Fi networks. Use a VPN for added security.</p>
        </div>
      </div>
    </div>
  );
};

export default Safety;
