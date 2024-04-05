import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function UserListComponent() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://localhost:7187/api/User_Management/view")
      .then((result) => setData(result.data))
      .catch((e) => console.log(e));

    setLoad(false);
  }, []);

  const handleUserSelection = (id) => {
    navigate('/UserProfilePage', { state: { selectedId: id } });
  };

  const handleAddUser = () => {
    navigate('/usercreation1'); // Navigate to the user creation form page
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
      <div className="d-flex justify-content-end mb-3">
        <button style={{ backgroundColor: '#325472' , borderColor: 'black'}} className="btn btn-primary" onClick={handleAddUser}> + Add New User</button>
      </div>
      
      <h2>User List</h2>
      <table className="table table-striped mt-3">
        <thead className="thead-dark">
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User Category</th>
            <th>Email</th>
            <th>User Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.userId} onClick={() => handleUserSelection(user.userId)}>
              <td>{user.userId}</td>
              <td>{user.userName}</td>
              <td>{user.userCategory}</td>
              <td>{user.email}</td>
              <td>{user.userStatus === "Active" ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
