import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SearchBar from "../Compornents/Searchbar.jsx"; 
import apiRequest from '../Auth/ApiService.js'; 
import {jwtDecode} from 'jwt-decode';
import './styles/UserList.css'

export default function UserListComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(); // Fetch data on component mount
    fetchUserRoleFromToken();
  }, []);

  const fetchUserRoleFromToken = () => {
    const token = localStorage.getItem('accessToken'); 
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.UserCategory); 
    }
  };


  const fetchData = async () => {
    try {
      const result = await apiRequest("https://localhost:44339/api/User/list");
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  

  const handleAddUser = () => {
    navigate('/userCreation');
  };

  const handleSearch = async (searchTerm) => {
    if (searchTerm.trim() === "") {
      fetchData(); // If search term is empty, fetch all data
    } else {
      try {
        const result = await apiRequest(`https://localhost:44339/api/User/search?term=${searchTerm}`);
        setData(result);
      } catch (error) {
        console.error("Error searching data:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h2>User List</h2>
        
        {userRole === "ADMIN" && (
          <button 
            style={{ backgroundColor: '#2d4296', borderColor: 'black' }} 
            className="btn btn-primary" 
            onClick={handleAddUser}
          >
            + Add New User
          </button>
        )}
        
      </div>
      
      <SearchBar onSearch={handleSearch} />

      <table className="table table-striped mt-3">
        <thead className="thead-dark">
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>User Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className={user.isActive ? "" : "table-danger"} >
              <td>{user.userId}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.userCategoryType}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

