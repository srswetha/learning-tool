import React, { useState } from 'react';
import '../styles/AiAssistant.css';

const AIAssistant = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  // ✅ HuggingFace API Key

  const HUGGINGFACE_API_KEY = process.env.REACT_APP_HUGGINGFACE_API_KEY1;


  // ✅ Use Starcoder for coding and GPT-2 for general questions
  const isCodingQuestion = /(code|python|javascript|html|function|algorithm|syntax)/i.test(query);
  const MODEL = isCodingQuestion 
    ? "bigcode/starcoder" 
    : "gpt2";

  // ✅ Instruction for AI model
  const SYSTEM_MESSAGE = isCodingQuestion
    ? "You are a helpful coding assistant. Provide clear and accurate answers to programming questions with direct code examples."
    : "You are a helpful AI assistant providing clear and conversational answers. Keep it natural and easy to understand.";

  // ✅ Clean AI response output
  const cleanResponse = (text) => {
    if (!text) return "";

    return text
      .replace(/%%\s?\[markdown\]/g, '') // ✅ Remove markdown artifacts
      .replace(/"""/g, '') // ✅ Remove extra quotes
      .replace(/\n\s*\n/g, '\n') // ✅ Remove excess newlines
      .replace(/•\s+/g, '') // ✅ Clean up bullet points
      .replace(/<NAME>/g, 'Roy Fielding') // ✅ Replace placeholders
      .replace(/js\.js\.js\.js/g, '') // ✅ Remove repeated patterns
      .replace(/0{50,}/g, '') // ✅ Remove long sequences of zeros
      .replace(/self\.\w+ = \d+/g, '') // ✅ Remove odd self-generated patterns
      .replace(/steps to learn html\?/gi, '') // ✅ Remove question repetition
      .trim(); // ✅ Remove leading/trailing whitespace
  };

  // ✅ Handle Query Submission
  const handleQuerySubmit = async () => {
    if (!query.trim()) {
      setResponse("Please enter a question before asking.");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      // ✅ Direct request to HuggingFace API
      const res = await fetch(
        `https://api-inference.huggingface.co/models/${MODEL}`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${HUGGINGFACE_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            inputs: query,
            parameters: {
              max_new_tokens: 150, // ✅ Reduced token count for cleaner output
              temperature: isCodingQuestion ? 0.2 : 0.5, // ✅ Lower for precise coding, higher for general
              stop_sequences: ["https://", "MDN Web Docs", "<NAME>", "In[1]:", "self."]
            },
            system_message: SYSTEM_MESSAGE
          })
        }
      );

      const data = await res.json();

      console.log("Raw data from API:", data);

      if (data && (data.generated_text || (data[0] && data[0].generated_text) || data.text)) {
        const cleaned = cleanResponse(data.generated_text || data[0]?.generated_text || data.text);
        setResponse(cleaned);
        setHasMore(cleaned.length >= 150);
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

  // ✅ Handle Continue Button
  const handleContinue = async () => {
    if (!hasMore) return;

    setLoading(true);

    try {
      // ✅ Continue generating response
      const res = await fetch(
        `https://api-inference.huggingface.co/models/${MODEL}`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${HUGGINGFACE_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            inputs: `Continue with more details:\n\n${response}`,
            parameters: {
              max_new_tokens: 150,
              temperature: isCodingQuestion ? 0.2 : 0.5,
              stop_sequences: ["https://", "MDN Web Docs", "<NAME>", "In[1]:", "self."]
            },
            system_message: SYSTEM_MESSAGE
          })
        }
      );

      const data = await res.json();

      if (data && data.generated_text) {
        const newResponse = cleanResponse(data.generated_text);

        if (!response.includes(newResponse)) {
          setResponse(prev => prev + "\n\n" + newResponse);
        }

        setHasMore(newResponse.length >= 150);
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

      {/* ✅ Render as text */}
      <div className="ai-response">
        {response ? (
          <div className="response-box">
            {response.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        ) : (
          "Ask something and I’ll help you!"
        )}
      </div>

      <button onClick={handleContinue} className="continue-button" disabled={!hasMore || loading}>
        {loading ? "Loading..." : hasMore ? "Continue ⏩" : "No More Content"}
      </button>
    </div>
  );
};

export default AIAssistant;
