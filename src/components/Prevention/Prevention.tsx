
import React from 'react';
import './Prevention.css';

const Prevention: React.FC = () => {
  return (
    <div className="prevention-container">
      <h1>Prevention of Unsafe Internet Practices & Cyberbullying</h1>
      <div className="prevention-steps">
        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Recognize Unsafe Behavior</h3>
            <p>Learn to identify red flags, such as someone asking for personal information, pressuring you to do something you're not comfortable with, or using aggressive language.</p>
          </div>
        </div>
        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Report Cyberbullying</h3>
            <p>If you or someone you know is being cyberbullied, report the behavior to the platform where it's happening. Most social media sites and online games have reporting tools.</p>
          </div>
        </div>
        <div className="step-card">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Seek Help</h3>
            <p>Talk to a trusted adult, such as a parent, teacher, or school counselor. You can also reach out to organizations that specialize in helping with cyberbullying.</p>
          </div>
        </div>
        <div className="step-card">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Indian Cyber Security Helpline</h3>
            <p>For any cybercrime-related complaints, you can call the national helpline number 1930.</p>
          </div>
        </div>
        <div className="step-card">
          <div className="step-number">6</div>
          <div className="step-content">
            <h3>Create Safe Digital Spaces</h3>
            <p>Be an advocate for positive online interactions. Stand up for others, report abuse, and contribute to a respectful and inclusive online community.</p>
          </div>
        </div>
        <div className="step-card">
          <div className="step-number">7</div>
          <div className="step-content">
            <h3>Think Before You Post</h3>
            <p>Remember that what you post online can have lasting consequences. Be mindful of your own digital footprint and how your words might affect others.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prevention;
