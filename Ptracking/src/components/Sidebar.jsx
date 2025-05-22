import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Sidebar.css';
import {
  FaBars,
  FaTachometerAlt,
  FaUserAlt,
  FaChartBar,
  FaSignOutAlt,
} from 'react-icons/fa';

const Sidebar = ({ onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setMobileOpen(false); // Close mobile sidebar if resizing to desktop
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>

      <div
        className={`sidebar ${collapsed ? 'collapsed' : ''} ${
          isMobile && mobileOpen ? 'open' : ''
        }`}
      >
        <div className="sidebar-title">
          {collapsed ? '' : 'Community-Bridges'}
        </div>

        <NavLink to="/dashboard">
          <FaTachometerAlt /> <span>Dashboard</span>
        </NavLink>
        <NavLink to="/analytics">
          <FaChartBar /> <span>Analytics</span>
        </NavLink>
        <NavLink to="/profile">
          <FaUserAlt /> <span>Profile</span>
        </NavLink>
        <NavLink to="/register-ngo">
          <FaUserAlt /> <span>Register NGO</span>
        </NavLink>
        <NavLink to="/project-form">
          <FaUserAlt /> <span>Project Form</span>
        </NavLink>

        <button className="logout-btn" onClick={onLogout}>
          <FaSignOutAlt /> <span>Sign Out</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
