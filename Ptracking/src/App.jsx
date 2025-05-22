import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header.jsx';
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/ProfilePage';
import Analytics from './pages/Analytics';
import NGOregisterPage from './pages/NGOregisterPage';
import ProjectForm from './pages/ProjectForm';
import './App.css'; // assuming the layout styles are here

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Sidebar collapsed={isCollapsed} setCollapsed={setIsCollapsed} />
        <div className={`main-content ${isCollapsed ? 'collapsed' : ''}`}>
          <Header 
            username="john_doe" 
            profilePic="/uploads/john.jpg" 
            onSignOut={() => localStorage.removeItem('token')}
          />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/register-ngo" element={<NGOregisterPage />} />
              <Route path="/project-form" element={<ProjectForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
