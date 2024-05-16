import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import SearchBar from "../Compornents/Searchbar.jsx"; // Import the SearchBar component

export default function UserListComponent() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  const fetchData = () => {
    axios
      .get("https://localhost:7121/api/User/list")
      .then((result) => setData(result.data))
      .catch((e) => console.log(e));

    setLoad(false);
  };

  const handleUserSelection = (id) => {
    navigate(`/userProfilePage/${id}`); // Pass the selected user's ID as part of the URL
  };

  const handleAddUser = () => {
    navigate('/userCreation');
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      fetchData(); // If search term is empty, fetch all data
    } else {
      axios
        .get(`https://localhost:7121/api/User/search?id=${searchTerm}`)
        .then((result) => setData(result.data))
        .catch((e) => console.log(e));
    }
  };

  if (load) {
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
        <button 
          style={{ backgroundColor: '#325472', borderColor: 'black' }} 
          className="btn btn-primary" 
          onClick={handleAddUser}
        >
          + Add New User
        </button>
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
            <tr key={index} onClick={() => handleUserSelection(user.userId)}>
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
