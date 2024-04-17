import React, { useState } from 'react';
import './styles/LoginForm.css';
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState(''); 
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add forgot password logic here
    console.log("Email:", email);
    // Add logic to send reset password link to the provided email
    setShowPopup(true); 
  };

  const closePopup = () => {
    setShowPopup(false); 
    };

  return (
    <div className='wrapper1'>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input 
              type="email" 
              placeholder="Enter email ID" 
              value={email}
              onChange={handleEmailChange}
              required 
            />
            <FaEnvelope className='icon' /> 
          </div>
          
          <button type="submit">Submit</button> 
          
          <div className="remember-forgot">
          <a href="/loginForm">Login</a>
        </div>
        </form>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>&times;</span>
              <p>Please check your E-mail ID.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
