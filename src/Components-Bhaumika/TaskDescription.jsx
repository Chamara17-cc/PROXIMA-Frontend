import './TaskDescription.css'
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';


export default function TaskDescription() {

    const [taskDetails, setTaskDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    const selectedId = location.state.selectedId;
    const navigate = useNavigate();


  // useEffect(() => {
  //   fetch('https://localhost:7044/api/DeveloperTask/${selectedId}') 
  //     .then(response => response.json())
  //     .then(data => {
  //       setTaskDetails(data);
  //       setIsLoading(false);
  //     })
  //     .catch(error => {
  //       setError(error);
  //       setIsLoading(false);
  //     });
  // }, []);

  
  // if (isLoading) {
  //   return <div>Loading Task details...</div>;
  // }

  // if (error) {
    
  //   return <div>Error fetching task details: {error.message}</div>;
  // }

//////////////////////////
  console.log(selectedId);

  const getData = async () => {
    try {
      const response = await axios.get(`https://localhost:7044/api/DeveloperTask/${selectedId}`);
      setTaskDetails(response.data);
      setIsLoading(false);
      console.log(response.data);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };
useEffect(() => {
    getData();

  },[]);

  
  if (isLoading) {
    return <div>Loading Task details...</div>;
  }

  if (error) {
    // Handle errors gracefully, e.g., display an error message
    return <div>Error fetching Task details: {error.message}</div>;
  }

  return ( taskDetails && (
    <div className='TaskDescription'>
      <h2>{taskDetails.taskName}</h2>
      <h5>Task Details:</h5>
      <div className='TaskProjectdetails'>
      <p>Project Name: {taskDetails.projectName}</p>
      <p>Project Id: {taskDetails.projectId}</p>
      </div>
      <div className='Taskdetails'>
      <p>Task Name: {taskDetails.taskName}</p>
      <p>Task Id: {taskDetails.taskId}</p>
      <p>Task Type: {taskDetails.taskType}</p>
      <p>Description: {taskDetails.taskDescription}</p>
      <p>Priority: {taskDetails.taskPriority}</p>
      <p>Technology: {taskDetails.taskTechnologies}</p>
      <p>Comments: {taskDetails.taskComments}</p>
      </div>
      <h5>Time Information:</h5>
      <div className='Taskdetails'>
      <p>Start Date: {taskDetails.taskStartDate}</p>
      <p>Time Estimation: {taskDetails.taskDuration}</p>
      <p>Due Date: {taskDetails.taskDueDate}</p>
      </div>
    </div>
  )

);
}
