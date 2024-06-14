import React from "react";
import "./Logoutstyle.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from '../Auth/AuthContext'; // Import the useAuth hook

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Use the logout function from the context

  const handleLogout = async () => {
    // Show an alert when the logout button is clicked
    if (window.confirm("Do you want to log out?")) {
      try {
        // Get the refresh token from local storage
        const refreshToken = localStorage.getItem("refreshToken");

        // Make an API call to the backend to invalidate the refresh token
        await axios.post("https://localhost:44339/api/Auth/logout", {
          refreshToken: refreshToken,
        });

        // Remove the tokens from local storage
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        // Call the logout function from the context
        logout();

        // Redirect to login page
        navigate("/loginForm");
      } catch (error) {
        console.error("Logout failed:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="logout">
      <i className="bi bi-box-arrow-right"></i>
      {/* Add onClick event listener to the button */}
      <input
        type="button"
        value="Log Out"
        className="logoutbutton"
        onClick={handleLogout}
      />
    </div>
  );
}
