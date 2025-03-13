import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LearningPaths from './components/LearningPaths';
import AddLearningPath from './App';
import LearnPage from './components/LearnPage';
import SchedulePage from './components/SchedulePage';
import AddContentPage from './components/AddContentPage';
import AIAssistant from './components/AiAssistant';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/learning-paths/:path" element={<LearningPaths />} />
      <Route path="/add-learning-path" element={<AddLearningPath />} />
      <Route path="/learn" element={<LearnPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/add-content" element={<AddContentPage />} />
      <Route path="/ai-assistant" element={<AIAssistant />} />
    </Routes>
  </BrowserRouter>
);
