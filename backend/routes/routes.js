// routes.js

const express = require('express');
const router = express.Router();
const Excuse = require('../models/Excuse.js');

// CREATE - Add a new excuse
router.post('/excuses', async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }
    
    const newExcuse = new Excuse({
      title,
      description,
      tags: tags || []
    });
    
    const savedExcuse = await newExcuse.save();
    res.status(201).json(savedExcuse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - Get all excuses
router.get('/excuses', async (req, res) => {
  try {
    const excuses = await Excuse.find();
    res.json(excuses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ - Get a single excuse by ID
router.get('/excuses/:id', async (req, res) => {
  try {
    const excuse = await Excuse.findById(req.params.id);
    
    if (!excuse) {
      return res.status(404).json({ error: 'Excuse not found' });
    }
    
    res.json(excuse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE - Update an excuse
router.put('/excuses/:id', async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required." });
    }

    const updatedExcuse = await Excuse.findByIdAndUpdate(
      req.params.id,
      { title, description, tags },
      { new: true }
    );
    
    if (!updatedExcuse) {
      return res.status(404).json({ error: 'Excuse not found' });
    }
    
    res.json(updatedExcuse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE - Delete an excuse
router.delete('/excuses/:id', async (req, res) => {
  try {
    const deletedExcuse = await Excuse.findByIdAndDelete(req.params.id);
    
    if (!deletedExcuse) {
      return res.status(404).json({ error: 'Excuse not found' });
    }
    
    res.json({ message: 'Excuse deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;