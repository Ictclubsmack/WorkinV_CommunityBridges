try{
const express = require('express');
const Project = require('../models/Project');
const authenticateToken = require('../middleware/authenticateToken.js');

const router = express.Router();

// Add project
router.post('/', authenticateToken, async (req, res) => {
  const newProject = new Project({ ...req.body, createdBy: req.user.id });
  const saved = await newProject.save();
  res.status(201).json(saved);
});

// Get all projects
router.get('/', async (req, res) => {
  const projects = await Project.find().populate('ngo').sort({ createdAt: -1 });
  res.json(projects);
});

module.exports = router;
} 
catch(error){
console.log("its in proj");
};

