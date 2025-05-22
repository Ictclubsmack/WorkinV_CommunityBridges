try{
const express = require('express');
const User = require('../models/user');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

// Get current user profile
router.get('/me', authenticateToken, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
});

// Update profile
router.put('/me', authenticateToken, async (req, res) => {
  const updates = req.body;
  const updated = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).select('-password');
  res.json(updated);
});

module.exports = router;
}
catch(error){
console.log("its in user");
};