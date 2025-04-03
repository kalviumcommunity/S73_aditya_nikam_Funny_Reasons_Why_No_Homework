// models/Excuse.js

const mongoose = require('mongoose');

const excuseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  tags: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Excuse = mongoose.model('Excuse', excuseSchema);

module.exports = Excuse;