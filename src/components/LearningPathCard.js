import React, { useState } from 'react';
import '../styles/styles.css';
// import './index.css'; // Ensure this is your global CSS file


const LearningPathCard = ({ path }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="card">
            <h2>{path.title}</h2>
            <p>{path.description}</p>
            <button onClick={() => setExpanded(!expanded)}>
                {expanded ? 'Collapse Steps' : 'View Steps'}
            </button>
            {expanded && (
                <ul>
                    {path.steps.map((step) => (
                        <li key={step.stepNumber}>
                            <strong>Step {step.stepNumber}: </strong>
                            {step.title} - {step.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LearningPathCard;
