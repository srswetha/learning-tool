// const express = require('express');
// const router = express.Router();
// const LearningPath = require('./models/LearningPath'); // Replace with your model

// // Route to add new content
// router.post('/add-content', async (req, res) => {
//   const { title, description, videoLink, docLink, category } = req.body;

//   try {
//     const newContent = new LearningPath({
//       title,
//       description,
//       videoLink,
//       docLink,
//       category,
//     });
//     await newContent.save();
//     res.status(201).json({ message: 'Content added successfully' });
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to add content' });
//   }
// });

// module.exports = router;
