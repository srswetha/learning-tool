import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <header className="header">
        <h1 className="welcome-text">Welcome!</h1>
        <p className="tagline">Embark on your learning journey with us.</p>
      </header>

      

      <div className="buttons-container">
        <button
          className="button learn-button"
          onClick={() => navigate('/learn')}
        >
          Learn
        </button>
        <button
          className="button schedule-button"
          onClick={() => navigate('/schedule')}
        >
          Schedule
        </button>
        <button
          className="button add-content-button"
          onClick={() => navigate('/add-content')}
        >
          Add Content
        </button>
      </div>

      <footer className="footer">
        <p>
          © 2025 Learning Platform. All rights reserved. |{' '}
          <a href="/about">About Us</a>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
