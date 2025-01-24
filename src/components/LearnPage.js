import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LearnPage.css';

const LearnPage = () => {
  const navigate = useNavigate();

  const navigateToPath = (path) => {
    navigate(`/learning-paths/${path}`);
  };

  return (
    <div className="learn-container">
      <h1 className="learn-title">Choose Your Development Path</h1>
      <div className="learn-buttons">
        <button
          className="learn-button frontend-button"
          onClick={() => navigateToPath('frontend')}
        >
          Frontend Development
        </button>
        <button
          className="learn-button backend-button"
          onClick={() => navigateToPath('backend')}
        >
          Backend Development
        </button>
        <button
          className="learn-button fullstack-button"
          onClick={() => navigateToPath('fullstack')}
        >
          Full Stack Development
        </button>
        <button
          className="learn-button data-engineering-button"
          onClick={() => navigateToPath('data-engineering')}
        >
          Data Engineering
        </button>
        <button
          className="learn-button data-analytics-button"
          onClick={() => navigateToPath('data-analytics')}
        >
          Data Analytics
        </button>
        <button
          className="learn-button software-engineering-button"
          onClick={() => navigateToPath('software-engineering')}
        >
          Software Engineering
        </button>
        <button
          className="learn-button machine-learning-button"
          onClick={() => navigateToPath('machine-learning')}
        >
          Machine Learning
        </button>
        <button
          className="learn-button cybersecurity-button"
          onClick={() => navigateToPath('cybersecurity')}
        >
          Cybersecurity
        </button>
        <button
          className="learn-button devops-button"
          onClick={() => navigateToPath('devops')}
        >
          DevOps
        </button>
      </div>
    </div>
  );
};

export default LearnPage;
