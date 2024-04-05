import React, { useState } from "react";
import './Profile.css'
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null); // Assuming you have the user's profile photo stored in state
  const navigate = useNavigate();

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleProfileVisibility = () => {
    // Handle profile visibility change
  };

  const handleChangePassword = () => {
    navigate('/resetpassword');
  };

  const handleLogout = () => {
    navigate('/loginform');
  };

  return (
    <div className="top-bar">
      <div className="profile" onClick={toggleProfile}>
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        {isProfileOpen && (
          <div className="profile-dropdown">
            <button onClick={handleProfileVisibility}>Change Profile Visibility</button>
            <button onClick={handleChangePassword}>Change Password</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
}
