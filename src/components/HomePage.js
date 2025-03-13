import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';
// import { FaRobot } from 'react-icons/fa'; 

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <header className="header">
      <h1 className="app-name">LearnMate</h1>
      <p className="tagline">Empowering Your Learning Journey.</p>
      </header>

        <div className="content-container">
        <h2 className="welcome-text">Welcome!</h2>
        <p className="description">Embark on your personalized learning adventure with interactive AI assistance.</p>
        

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
      </div>
      <div className="ai-chat-label">Ask LearnMate AI</div>
      <button className="ai-chat-button" onClick={() => navigate('/ai-assistant')}>
      </button>


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