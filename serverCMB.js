// File: server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./serversoftware/routes/authRoutes');
const ngoRoutes = require('./serversoftware/routes/ngoRoutes');
const projectRoutes = require('./serversoftware/routes/projectRoutes');
const userRoutes = require('./serversoftware/routes/userRoutes');
const validateRegister = require('./serversoftware/middleware/validateRegister');
const validateLogin = require('./serversoftware/middleware/validateLogin');
const authenticateToken = require('./serversoftware/middleware/authenticateToken');

console.log('its okay after getting modules')
const app = express();
const PORT = process.env.PORT || 5000;



console.log('its okay after getting  app and port setting')
// ✅ Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

console.log('its okay after getting middleware setup')

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB error:', err));


console.log('its okay after getting db setup')

// ✅ Routes

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/ngos', authenticateToken, ngoRoutes);
app.use('/api/projects', authenticateToken, projectRoutes);

console.log('its okay after getting past routes')
// ✅ Serve static vanilla HTML pages
app.use(express.static(path.join(__dirname, 'public_CMB')));
console.log('its okay after getting modules')
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public_CMB/COMMUNITY_BRIDGES_index.html')));
console.log('its okay after getting modules1')
app.get('/Services', (req, res) => res.sendFile(path.join(__dirname, 'public_CMB/Services.html')));
console.log('its okay after getting modules2')
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public_CMB/Contact_us.html')));
console.log('its okay after getting modules3')
app.get('/signup', (req, res) => res.sendFile(path.join(__dirname, 'public_CMB/sign up.html')));
console.log('its okay after getting modules4')
app.get('/signin', (req, res) => res.sendFile(path.join(__dirname, 'public_CMB/Sign_inCMB.html')));
console.log('its okay after getting modules5')
app.get('/About_us', (req, res) => res.sendFile(path.join(__dirname, 'public_CMB/About_us.html')));
console.log('its okay after getting modules6')
//app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public_CMB/pagenotfound.html')));
console.log('its okay after getting modules7')


console.log('its okay after getting to static files')

// ✅ Serve React frontend (built files)
app.use(express.static(path.join(__dirname, 'Ptracking/dist')));

// Catch-all for React routes
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'Ptracking/dist', 'index.html'));
});
/*app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});*/

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
