
import React, { useState, useEffect } from 'react';
import './Quiz.css';
import { getUser, saveUser } from '../../lib/storage';

const questions = [
  {
    question: 'How often do you check your phone before going to sleep?',
    options: ['Always', 'Sometimes', 'Rarely', 'Never'],
    scores: [4, 3, 2, 1],
  },
  {
    question: 'How much time do you spend on social media daily?',
    options: ['More than 2 hours', '1-2 hours', 'Less than 1 hour', "I don't use social media"],
    scores: [4, 3, 2, 1],
  },
  {
    question: 'Do you feel anxious or stressed when you can\'t check your phone?',
    options: ['Often', 'Sometimes', 'Rarely', 'Never'],
    scores: [4, 3, 2, 1],
  },
  {
    question: 'Do you engage in offline hobbies or activities regularly?',
    options: ['Rarely', 'Sometimes', 'Often', 'Every day'],
    scores: [4, 3, 2, 1],
  },
  {
    question: 'Do you use your phone during meals with others?',
    options: ['Always', 'Sometimes', 'Rarely', 'Never'],
    scores: [4, 3, 2, 1],
  },
  {
    question: 'Do you feel you get enough sleep?',
    options: ['Rarely', 'Sometimes', 'Often', 'Always'],
    scores: [4, 3, 2, 1],
  },
  {
    question: 'Do you compare yourself to others on social media?',
    options: ['Often', 'Sometimes', 'Rarely', 'Never'],
    scores: [4, 3, 2, 1],
  },
  {
    question: 'Do you take regular breaks from your screen during the day?',
    options: ['Rarely', 'Sometimes', 'Often', 'Always'],
    scores: [4, 3, 2, 1],
  },
];

const preventionTips = {
  'Excellent': [
    'Continue practicing mindful screen time habits.',
    'Share your positive digital wellness strategies with friends and family.',
    'Explore new offline hobbies to maintain a balanced lifestyle.',
  ],
  'Needs Improvement': [
    'Try setting specific screen time limits for social media and entertainment apps.',
    'Implement a "digital sunset" – avoid screens for an hour before bedtime.',
    'Engage in regular physical activity to balance screen time.',
    'Practice digital detox days or hours to reconnect with your surroundings.',
  ],
  'High Risk': [
    'Seek professional help or counseling if digital habits are significantly impacting your daily life.',
    'Consider using apps or phone settings to monitor and limit screen usage.',
    'Prioritize face-to-face interactions over online communication.',
    'Identify triggers that lead to excessive screen time and develop coping strategies.',
    'Ensure you are getting adequate sleep and maintaining a healthy diet.',
  ],
};

const Quiz: React.FC = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const username = getUser();
    if (username) {
      const storedAnswers = localStorage.getItem(`${username}_quizAnswers`);
      if (storedAnswers) {
        setAnswers(JSON.parse(storedAnswers));
      }
    }
  }, []);

  const handleAnswer = (questionIndex: number, score: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = score;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
    setScore(totalScore);
  };

  const getResultForScore = (currentScore: number | null) => {
    if (currentScore === null) return null;

    let category: keyof typeof preventionTips;
    let recommendation: string;

    if (currentScore <= 12) {
      category = 'Excellent';
      recommendation = 'You have healthy digital habits! Keep up the great work.';
    } else if (currentScore <= 24) {
      category = 'Needs Improvement';
      recommendation = "You're doing okay, but there's room for improvement. Try implementing some of our tips to reduce screen time.";
    } else {
      category = 'High Risk';
      recommendation = 'Your digital habits may be negatively impacting your well-being. We strongly recommend you take steps to reduce your screen time and seek support if needed.';
    }

    return {
      category,
      recommendation,
      tips: preventionTips[category],
    };
  };

  const saveQuizResults = () => {
    const username = getUser();
    if (username && score !== null) {
      localStorage.setItem(`${username}_quizAnswers`, JSON.stringify(answers));
      localStorage.setItem(`${username}_quizScore`, JSON.stringify(score));
      const result = getResultForScore(score);
      const timestamp = new Date().toLocaleString();
      localStorage.setItem(`${username}_quizResult`, JSON.stringify({ ...result, timestamp }));
      console.log('Quiz results saved:', { answers, score, result, timestamp });
      alert('Quiz results saved!');
    }
  };

  const result = getResultForScore(score);

  return (
    <div className="quiz-container">
      <h1>Digital Habits Quiz</h1>
      {score === null ? (
        <>
          <div className="questions-grid">
            {questions.map((q, i) => (
              <div key={i} className="question-card">
                <h3>{q.question}</h3>
                <div className="options-group">
                  {q.options.map((option, j) => (
                    <button
                      key={j}
                      className={`option-button ${answers[i] === q.scores[j] ? 'selected' : ''}`}
                      onClick={() => handleAnswer(i, q.scores[j])}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="submit-button" onClick={calculateScore} disabled={answers.length < questions.length}>
            See Your Results
          </button>
        </>
      ) : (
        <div className="results-card">
          <h2>Your Result: {result?.category}</h2>
          <p>{result?.recommendation}</p>
          {result?.tips && result.tips.length > 0 && (
            <div className="prevention-tips">
              <h3>Prevention Tips:</h3>
              <ul>
                {result.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
          <button className="retake-button" onClick={() => { setScore(null); setAnswers([]); }}>
            Retake Quiz
          </button>
          <button className="save-button" onClick={saveQuizResults}>
            Save Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
