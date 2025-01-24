import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddContentPage.css';

const AddContentPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [docLink, setDocLink] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!title || !description || !videoLink || !category) {
      alert('Please fill in all the required fields.');
      return;
    }
  
    console.log({
      title,
      description,
      videoLink,
      docLink,
      category,
    }); // Log the data before sending
  
    try {
      const response = await axios.post('http://localhost:5001/add-content', {
        title,
        description,
        videoLink,
        docLink,
        category,
      });
      console.log('Response from server:', response.data); // Log the response
      alert('Content added successfully!');
      setTitle('');
      setDescription('');
      setVideoLink('');
      setDocLink('');
      setCategory('');
    } catch (err) {
      console.error('Error adding content:', err); // Log the error
      alert('Failed to add content. Please try again.');
    }
  };
  

  return (
    <div className="add-content-container">
      <h1>Add New Learning Content</h1>
      <form className="add-content-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title <span className="required">*</span></label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter content title"
            required
          />
        </div>

        <div className="form-group">
          <label>Description <span className="required">*</span></label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter a brief description"
            required
          />
        </div>

        <div className="form-group">
          <label>Video Link <span className="required">*</span></label>
          <input
            type="url"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            placeholder="Enter a valid video URL"
            required
          />
        </div>

        <div className="form-group">
          <label>Documentation Link (Optional)</label>
          <input
            type="url"
            value={docLink}
            onChange={(e) => setDocLink(e.target.value)}
            placeholder="Enter a valid documentation URL"
          />
        </div>

        <div className="form-group">
          <label>Category <span className="required">*</span></label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full Stack</option>
          </select>
        </div>

        <button type="submit" className="submit-button">Add Content</button>
      </form>
    </div>
  );
};

export default AddContentPage;
