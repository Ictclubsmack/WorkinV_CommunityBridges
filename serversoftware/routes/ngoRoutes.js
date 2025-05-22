try{
const express = require('express');
const NGO = require('../models/NGO');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

// Create NGO
router.post('/', authenticateToken, async (req, res) => {
  const newNGO = new NGO({ ...req.body, createdBy: req.user.id });
  const saved = await newNGO.save();
  res.status(201).json(saved);
});

// Get all NGOs
router.get('/', async (req, res) => {
  const ngos = await NGO.find().sort({ createdAt: -1 });
  res.json(ngos);
});

module.exports = router;
}
 catch(error){
console.log("its in ngo");
};
