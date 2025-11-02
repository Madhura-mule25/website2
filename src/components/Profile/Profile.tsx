import React, { useState, useEffect } from 'react';
import { getUser } from '../../lib/storage';
import './Profile.css';

const Profile: React.FC = () => {
  const [quizHistory, setQuizHistory] = useState<any[]>([]);

  useEffect(() => {
    const username = getUser();
    if (username) {
      const score = localStorage.getItem(`${username}_quizScore`);
      const result = localStorage.getItem(`${username}_quizResult`);

      if (score && result) {
        const history = [{ score: JSON.parse(score), result: JSON.parse(result) }];
        setQuizHistory(history);
        console.log('Quiz history loaded:', history);
      }
    }
  }, []);

  return (
    <div className="profile-container">
      <h1>Quiz History</h1>
      {quizHistory.length > 0 ? (
        <div className="quiz-history-list">
          {quizHistory.map((history, index) => (
            <div key={index} className="quiz-history-item">
              <h2>Result: {history.result.category}</h2>
              <p>Score: {history.score}</p>
              <p>Date: {history.result.timestamp}</p>
              <p>{history.result.recommendation}</p>
              {history.result.tips && history.result.tips.length > 0 && (
                <div className="prevention-tips">
                  <h3>Prevention Tips:</h3>
                  <ul>
                    {history.result.tips.map((tip: string, i: number) => (
                      <li key={i}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No quiz history found.</p>
      )}
    </div>
  );
};

export default Profile;
