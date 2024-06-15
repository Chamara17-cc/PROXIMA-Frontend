import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './styles/UserDetailView.css'

const UserDetailView = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://localhost:44339/api/User/${userId}`);
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      
      
{/*     
      {userData.profileImage && (
        <img 
          src={userData.profileImage} 
          alt="Profile" 
          className="profile-image" 
        />
      )} */}

      {/* Profile Icon */}
      <div className="profile-icon">
        <FontAwesomeIcon icon={faUser} size="5x" color="#000000" />
      </div>

      <div className="profile-details">
        <div>
          <strong>User ID:</strong> {userData.userId}
        </div>
        <div>
          <strong>Username:</strong> {userData.userName}
        </div>
        <div>
          <strong>Name:</strong> {userData.firstName} {userData.lastName}
        </div>
        <div>
          <strong>Email:</strong> {userData.email}
        </div>
        <div>
          <strong>Mobile number:</strong> {userData.contactNumber}
        </div>
        <div>
          <strong>Address:</strong> {userData.address}
        </div>
        <div>
          <strong>Gender:</strong> {userData.gender}
        </div>
        <div>
          <strong>NIC:</strong> {userData.nic}
        </div>
        <div>
          <strong>DOB:</strong> {userData.dob}
        </div>
        <div>
          <strong>User Category:</strong> {userData.userCategoryType}
        </div>
        <div>
          <strong>Job Role:</strong> {userData.jobRoleType}
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="bottom-buttons">
        <Link to="/userList" className="btn btn-secondary">Back</Link>
        <button className="btn btn-danger">Deactivate</button>
      </div>
    </div>
  );
};

export default UserDetailView;
