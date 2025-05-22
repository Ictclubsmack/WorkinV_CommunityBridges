const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  registrationNumber: String,
  country: String,
  district: String,
  address: String,
  contactEmail: String,
  contactPhone: String,
  website: String,
  logo: String,
  mission: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('NGO', ngoSchema);
