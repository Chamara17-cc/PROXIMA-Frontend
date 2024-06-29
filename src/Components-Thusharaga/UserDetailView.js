import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './styles/UserDetailView.css';

const UserDetailView = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://localhost:44339/api/User/${userId}`);
        setUserData(response.data);
        setIsActive(response.data.isActive);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  const deactivateUser = async () => {
    const confirmDeactivation = window.confirm("Are you sure you want to deactivate the user?");
    if (!confirmDeactivation) {
      return;
    }

    try {
      const response = await axios.post('https://localhost:44339/api/User/deactivate-user', { userId });
      alert("User deactivated successfully.");
      setErrorMessage(null);
    } catch (error) {
      handleError(error, 'Error deactivating user.');
    }
  };

  const reactivateUser = async () => {
    const confirmReactivation = window.confirm("Are you sure you want to reactivate the user?");
    if (!confirmReactivation) {
      return;
    }

    try {
      const response = await axios.post('https://localhost:44339/api/User/reactivate-user', { userId });
      alert("User reactivated successfully.");
      setErrorMessage(null);
    } catch (error) {
      handleError(error, 'Error reactivating user.');
    }
  };

  const handleError = (error, genericErrorMessage) => {
    if (error.response && error.response.data && error.response.data.message) {
      setErrorMessage(error.response.data.message);
      window.alert(error.response.data.message);
    } else {
      setErrorMessage(genericErrorMessage);
      window.alert(genericErrorMessage);
    }
    console.error(genericErrorMessage, error);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>{errorMessage || 'User data not found.'}</div>;
  }

  return (
    <div className="profile-container">
      <div>
      {userData.imageSrc && (
        <img src={userData.imageSrc} alt="Profile" className="card-img-top rounded-circle" />
      )}
      </div>
      <div className="profile-details">
        <table className="user-details-table">
          <tbody>
            <tr>
              <td className="label"><strong>User ID:</strong></td>
              <td className="value">{userData.userId}</td>
            </tr>
            <tr>
              <td className="label"><strong>Username:</strong></td>
              <td className="value">{userData.userName}</td>
            </tr>
            <tr>
              <td className="label"><strong>Name:</strong></td>
              <td className="value">{userData.firstName} {userData.lastName}</td>
            </tr>
            <tr>
              <td className="label"><strong>Email:</strong></td>
              <td className="value">{userData.email}</td>
            </tr>
            <tr>
              <td className="label"><strong>Mobile number:</strong></td>
              <td className="value">{userData.contactNumber}</td>
            </tr>
            <tr>
              <td className="label"><strong>Address:</strong></td>
              <td className="value">{userData.address}</td>
            </tr>
            <tr>
              <td className="label"><strong>Gender:</strong></td>
              <td className="value">{userData.gender}</td>
            </tr>
            <tr>
              <td className="label"><strong>NIC:</strong></td>
              <td className="value">{userData.nic}</td>
            </tr>
            <tr>
              <td className="label"><strong>DOB:</strong></td>
              <td className="value">{userData.dob}</td>
            </tr>
            <tr>
              <td className="label"><strong>User Category:</strong></td>
              <td className="value">{userData.userCategoryType}</td>
            </tr>
            <tr>
              <td className="label"><strong>Job Role:</strong></td>
              <td className="value">{userData.jobRoleType}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bottom-buttons">
        <Link to="/userManagement" className="btn btn-secondary">Back</Link>
        <button className="btn btn-danger" onClick={deactivateUser} disabled={!isActive}>Deactivate</button>
        <button className="btn btn-danger" onClick={reactivateUser} disabled={isActive}>Reactivate</button>
      </div>
    </div>
  );
};

export default UserDetailView;
