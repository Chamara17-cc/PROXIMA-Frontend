import React, { useState } from 'react';
import './styles/LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className='wrapper1'>
      <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={handleUsernameChange}
            required 
          />
          <FaUser className='icon' />
        </div>

        <div className="input-box">
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={handlePasswordChange}
            required 
          />
          <FaLock className='icon' />
        </div>
        <Link to="/">
        <button type="submit">Login</button>
        </Link>

        <div className="remember-forgot">
          <a href="/forgotpassword">Forgot password?</a>
        </div>
      </form>
      </div>
    </div>
  );
};

export default LoginForm;
