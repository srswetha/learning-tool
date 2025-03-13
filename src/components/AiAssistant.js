import React, { useState } from 'react';
import '../styles/AiAssistant.css';

const AIAssistant = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  const handleQuerySubmit = async () => {
    if (!query.trim()) {
      setResponse("Please enter a question before asking.");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://api.cohere.ai/v1/chat", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 3P64k3h1w0BPuAsPWQyMk3fSFJUHONs8aR7SE4R6",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "command-r",
          message: query,
          temperature: 0.7,
          max_tokens: 300,
          return_likelihoods: "NONE"
        })
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (data.text) {
        setResponse(data.text);
        setHasMore(data.text.length >= 300); // If response is long, enable "Continue"
      } else {
        setResponse("Sorry, I couldn't generate a response. Please try again.");
        setHasMore(false);
      }
  
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setResponse("An error occurred. Please check your connection and try again.");
      setHasMore(false);
    }

    setLoading(false);
  };

  // Function to continue fetching more responses
  const handleContinue = async () => {
    if (!hasMore) return; // Prevent unnecessary calls

    setLoading(true);

    try {
      const res = await fetch("https://api.cohere.ai/v1/chat", {
        method: "POST",
        headers: {
          "Authorization": "Bearer 3P64k3h1w0BPuAsPWQyMk3fSFJUHONs8aR7SE4R6",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "command-r",
          message: `Continue from: ${response}`,
          temperature: 0.7,
          max_tokens: 300
        })
      });

      const data = await res.json();
      if (data.text) {
        setResponse(prev => prev + " " + data.text); // Append new response
        setHasMore(data.text.length >= 300);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setHasMore(false);
    }

    setLoading(false);
  };


  return (
    <div className="ai-container">
      <div className="ai-header">
        <h1>🤖 Ask <span>LearnMate AI</span></h1>
        <p>Get instant AI-powered responses to your queries!</p>
      </div>
      
      <div className="chat-box">
        <input 
          type="text" 
          placeholder="Ask a question..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          className="chat-input"
        />
        <button onClick={handleQuerySubmit} className="chat-button" disabled={loading}>
          {loading ? "Thinking..." : "Ask"}
        </button>
      </div>

      <div className="ai-response">
        {response ? response : "Ask something and I’ll help you!"}
      </div>

      {/* Continue Button (Always Visible) */}
      <button onClick={handleContinue} className="continue-button" disabled={!hasMore}>
        {hasMore ? "Continue ⏩" : "No More Content"}
      </button>
    </div>
  );
};

export default AIAssistant;
