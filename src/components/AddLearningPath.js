import React, { useState } from 'react';
import axios from 'axios';
import '../styles/styles.css';
// import './index.css'; // Ensure this is your global CSS file


const AddLearningPath = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5001/learning-paths', { title, description })
            .then(() => {
                alert('Learning Path added!');
                setTitle('');
                setDescription('');
            })
            .catch((err) => console.error('Error adding learning path:', err));
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <h3>Add Learning Path</h3>
            <input
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddLearningPath;
