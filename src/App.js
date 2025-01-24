import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddContentPage from './components/AddContentPage';
import SchedulePage from './components/SchedulePage';
import LearnPage from './components/LearnPage';
import LearningPaths from './components/LearningPaths';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-content" element={<AddContentPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/learning-paths/:path" element={<LearningPaths />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
