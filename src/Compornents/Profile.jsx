import React, { useState } from "react";
import './Profile.css'

export default function TopBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null); // Assuming you have the user's profile photo stored in state

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleProfileVisibility = () => {
    // Handle profile visibility change
  };

  const handleChangePassword = () => {
    // Handle change password action
  };

  const handleLogout = () => {
    // Handle logout action
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
