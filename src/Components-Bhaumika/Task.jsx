import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TaskStyle.css';
import { format } from 'date-fns';

export default function Task() {


  const [taskData, setTaskData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startTime, setStartTime] = useState(null); 
  const [stopTime, setStopTime] = useState(null); 
  const location = useLocation();
  const selectedTaskId = location.state.selectedTaskId;

  console.log("Taskid = " + selectedTaskId);

  const startTimer = async () => {
    if (!startTime) { 
      const currentDateTime = new Date().toISOString();
      setStartTime(currentDateTime);
      console.log('Start Time:', currentDateTime);

      const editDataNew = { TaskStartTime: currentDateTime };

      try {
        const urlTaskStatusStart = `https://localhost:7008/api/DeveloperTime/tasksStatusStart/${selectedTaskId}`;
        const responseTaskStatusStart = await axios.put(urlTaskStatusStart, editDataNew);
        console.log('Start time submitted:', editDataNew);
      } catch (error) {
        console.error('There was an error submitting the start time!', error);
        alert('An error occurred while submitting start time. Please check the console for details.');
      }
    } else {
      alert("Task already started. Please stop the timer before starting again.");
    }
  };


  const stopTimer = () => {
    if (startTime) { // Only allow stopping if started
      const currentDateTime = new Date().toISOString();
      setStopTime(currentDateTime);
      console.log('Stop Time:', currentDateTime);
    } else {
      alert("Task not yet started. Please start the timer before stopping.");
    }
  };

  const submit = async () => {
    const editData = {
      TaskStartTime: startTime,
      TaskCompleteTime: stopTime,
    };

    try {
      // DeveloperId == 5
      const url = `https://localhost:7008/api/DeveloperTime/taskTimes/${selectedTaskId}/5`;
      const response = await axios.post(url, editData);

      const urlTask = `https://localhost:7008/api/DeveloperTime/tasks/${selectedTaskId}`;
      const responseTask = await axios.put(urlTask, editData);

      const newProject = `https://localhost:7008/api/DeveloperTime/projects/${selectedTaskId}`;
      const responseProject = await axios.put(newProject, editData);

      console.log(editData);
      alert('Data edited successfully!');
      window.location.reload();
    } catch (error) {
      console.error('There was an error editing the data!', error);
      alert('An error occurred while saving data. Please check the console for details.');
    }
  };

  const completed = async () => {
    const editData = {
      TaskStartTime: startTime,
      TaskCompleteTime: stopTime,
    };

    try {
      const urlTaskStatus = `https://localhost:7008/api/DeveloperTime/tasksStatusStop/${selectedTaskId}`;
      const responseTaskStatus = await axios.put(urlTaskStatus, editData);

      console.log(editData);
      alert('Task marked as completed!');
      // Consider alternative UI updates (e.g., disabling buttons, showing success message)
    } catch (error) {
      console.error('There was an error marking task as completed!', error);
      alert('An error occurred while marking task as completed. Please check the console for details.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://localhost:7008/api/DeveloperTask/TaskDescription/${selectedTaskId}`);
        const data = await response.json();
        setTaskData(data);
        console.log(data);
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
    <div>
    { taskData.map((item) => (
    <div className='Task'>
      
      <div className='Description'>
        <h3>{item.taskName}</h3>
      </div>
      <div className='DueDate'>
      <h4>Due Date: {item.dueDate ? format(new Date(item.dueDate), 'yyyy-MM-dd') : '-'}</h4>
      </div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={submit}>Submit</button>
      <button onClick={completed}>Task Completed</button>
    
    </div>
  ))}
    </div>
  );
}