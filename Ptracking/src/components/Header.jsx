import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Header.css';

const Header = ({ username, profilePic, onSignOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    onSignOut(); // Clear user state or token
    navigate('/signin');
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>🌱 Community Bridges</div>
      <div className="user-info">
        <img src={profilePic || '/default-profile.png'} alt="Profile" className="profile-pic" />
        <span className="username">{username}</span>
        <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
      </div>
    </header>
  );
};

export default Header;
