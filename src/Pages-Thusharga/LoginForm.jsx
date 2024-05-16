import {jwtDecode} from 'jwt-decode';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import './styles/LoginForm.css' 


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      UserName: username,
      Password: password
    };

    try {
      const response = await axios.post('https://localhost:7121/api/Auth/login', data);
      const token = response.data; // Assuming your backend returns the token in 'token' field
      localStorage.setItem('token', token); // Store the token securely
      
      // Decode the token to extract user's role
      const decodedToken = jwtDecode(token);
      //console.log('Decoded Token:', decodedToken);
      const userCategory = decodedToken.UserCategoryId; 
      
      // Redirect based on user's role
      switch (userCategory) {
        case '1':
          navigate('/adminDashboard');
          break;
        case '2':
          navigate('/managerDashboard');
          break;
        case '3':
          navigate('/developerDashboard');
          break;
        case '4':
          navigate('/clientDashboard');
          break; 
      }
      
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        console.error('Login failed:', error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className='wrapper1'>
      <div className='wrapper'>
      <form >
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

        <button type="submit" onClick={handleSubmit}>Login</button>

        <div className="remember-forgot">
          <a href="/forgotPassword">Forgot password?</a>
        </div>
      </form>
      </div>
    </div>
  );
};

export default LoginForm;
