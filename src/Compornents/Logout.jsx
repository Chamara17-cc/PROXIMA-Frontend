import React from "react";
import "./Logoutstyle.css";

export default function Logout() {
  // Function to handle logout button click
  const handleLogout = () => {
    // Show an alert when the logout button is clicked
    if (window.confirm("Do you want to log out?")) {
      // Perform logout actions here
      console.log("Logging out..."); // You can replace this with actual logout logic
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
