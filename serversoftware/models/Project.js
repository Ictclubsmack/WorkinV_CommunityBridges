const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ngo: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO' },
  description: String,
  startDate: Date,
  endDate: Date,
  location: String,
  data: Object, // for analytics or reporting
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
