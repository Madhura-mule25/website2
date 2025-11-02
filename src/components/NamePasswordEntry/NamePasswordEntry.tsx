import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
 

; //  import your firebase config
import './NamePasswordEntry.css';

const NamePasswordEntry: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firebaseError, setFirebaseError] = useState(''); // ✅ handle Firebase error
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFirebaseError('');

    let valid = true;
    if (!username.trim()) {
      setUsernameError('Email is required.');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (!password) {
      setPasswordError('Password is required.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!valid) return;

    try {
      // ✅ Firebase sign-in
      await signInWithEmailAndPassword(auth, username, password);
      console.log('Login successful');
      navigate('/home');
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        setFirebaseError('No account found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setFirebaseError('Incorrect password.');
      } else {
        setFirebaseError('Failed to sign in. Please try again.');
      }
    }
  };

  return (
    <div className="name-age-entry-container">
      <form onSubmit={handleSubmit} className="name-age-entry-form">
        <h1>Cyberbuddy</h1>
        <h2>Enter Your Details</h2>

        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={usernameError ? 'input-error' : ''}
          />
          {usernameError && <p className="error-message">{usernameError}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={passwordError ? 'input-error' : ''}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>

        {firebaseError && <p className="error-message">{firebaseError}</p>}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NamePasswordEntry;

