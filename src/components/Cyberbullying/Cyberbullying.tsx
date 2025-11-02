
import React from 'react';
import './Cyberbullying.css';

const stories = [
  {
    title: 'Alex\'s Story',
    story: 'Alex, a 15-year-old, was targeted by a group of classmates who spread rumors and created fake profiles to post embarrassing content. Alex felt isolated and his grades started to drop.',
    lesson: 'The anonymity of the internet can embolden bullies. It\'s crucial to report such behavior to a trusted adult and to the platform where it is happening.',
  },
  {
    title: 'Maria\'s Story',
    story: 'Maria, a college student, faced relentless harassment in an online gaming community. The competitive environment was used as an excuse for toxic and threatening messages.',
    lesson: 'Online communities should have clear codes of conduct and moderation. Don\'t be afraid to block, report, and step away from toxic environments.',
  },
  {
    title: 'John\'s Story',
    story: 'John, a young professional, had a private photo shared without his consent by an ex-partner. This "revenge porn" caused him immense distress and professional damage.',
    lesson: 'Sharing intimate images without consent is a serious form of abuse and is illegal in many places. Seek legal help and support from organizations that combat this issue.',
  },
];

const Cyberbullying: React.FC = () => {
  return (
    <div className="cyberbullying-container">
      <h1>Real-Life Cyberbullying Cases</h1>
      <div className="stories-grid">
        {stories.map((s, i) => (
          <div key={i} className="story-card">
            <h2>{s.title}</h2>
            <p className="story-text"><strong>What happened:</strong> {s.story}</p>
            <p className="story-lesson"><strong>Lesson learned:</strong> {s.lesson}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cyberbullying;
