// middleware/authenticateToken.js
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization || req.cookies.token;

  const token = authHeader?.split(' ')[1] || req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    req.user = decoded; // add user info to request object
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};
