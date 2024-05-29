import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TaskStyle.css';

export default function Task() {


  const [taskData, setTaskData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startTime, setStartTime] = useState(null); 
  const [stopTime, setStopTime] = useState(null); 
  const location = useLocation();
  const selectedTaskId = location.state.selectedTaskId;

  console.log("Taskid = " + selectedTaskId);

  const startTimer = () => {
    const currentDateTime = new Date().toISOString();
    setStartTime(currentDateTime);
    console.log('Start Time:', currentDateTime);
  };

  const stopTimer = () => {
    const currentDateTime = new Date().toISOString();
    setStopTime(currentDateTime);
    console.log('Stop Time:', currentDateTime);
   
  };

  const submit = () => {
    handleEdit();

  }
  const handleEdit = async () => {
    const editData = {
    
      TaskStartTime: startTime,
      TaskCompleteTime: stopTime,
    };
  
    try {
    
     //DeveloperId == 5
     const url =`https://localhost:7008/api/DeveloperTime/taskTimes/${selectedTaskId}/5`;
      const response = await axios.post(url, editData);

      const urltask = `https://localhost:7008/api/DeveloperTime/tasks/${selectedTaskId}`;
      const responsetask = await axios.put(urltask,editData);

      const newproject = `https://localhost:7008/api/DeveloperTime/projects/${selectedTaskId}`;
      const responseproject = await axios.put(newproject,editData);

      // const responsetask = await axios.put(urltask);
      // const responseproject = await axios.put(newproject);
      console.log(editData);
      alert('Data edited successfully!'); 
      window.location.reload(); 
    } catch (error) {
      console.error('There was an error editing the data!', error);
     
      alert('An error occurred while saving data. Please check the console for details.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:7008/api/DeveloperTask/${selectedTaskId}`);
        const data = await response.json();
        setTaskData(data);
        setIsLoading(false);

        setStartTime(null);
        setStopTime(null);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading Task details...</div>;
  }

  if (error) {
    return <div>Error fetching task details: {error.message}</div>;
  }

  return (
    <div className='Task'>
      <div className='Description'>
        <h3>{taskData.taskName}</h3>
      </div>
      <div className='DueDate'>
        <h4>Due Date: {taskData.taskDueDate}</h4>
      </div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={submit}>Submit</button>
    </div>
  );
}