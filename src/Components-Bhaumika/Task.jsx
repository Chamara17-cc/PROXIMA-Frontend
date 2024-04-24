import React, { useEffect, useState } from 'react';
import './TaskStyle.css'

export default function Task() {

  const [taskData, setTaskData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const [startTime, setStartTime] = useState(null);
    const [stopTime, setStopTime] = useState(null);
    const [workingHours, setWorkingHours] = useState(null);


   
    const startTimer = () => {
      setStartTime(new Date());
      console.log('time recoded(start time)');
  };

  const stopTimer = () => {
      setStopTime(new Date());
      console.log('time recoded(stop time)');
      fetchData();

      // const duration = stopTime - startTime;
      // // Calculate working hours from duration (in milliseconds) and update state
      // setWorkingHours(duration / (1000 * 60 * 60));
  };


  const calculateDuration = () => {
    if (!startTime || !stopTime) {
      return null;  // Handle invalid scenario
    }
  
    const duration = stopTime.getTime() - startTime.getTime();
    return duration; // Duration in milliseconds
  };




  const fetchData = async () => {
    try {
      const calculatedDuration = calculateDuration();
      if (!calculatedDuration) {
        // Handle invalid duration scenario (optional)
        return;
      }
  
      const response = await fetch('http://your-backend-url/api/endpoint', {
        method: 'POST', // Adjust based on your backend's requirements
        headers: { 'Content-Type': 'application/json' }, // Adjust as needed
        body: JSON.stringify({ duration: calculatedDuration }),
      });
  
      const data = await response.json();
      // Handle successful response (e.g., display confirmation)
    } catch (error) {
      // Handle errors (e.g., display error message)
    }
  };




  useEffect(() => {
    fetch('https://localhost:7044/api/DeveloperTask/1') 
      .then(response => response.json())
      .then(data => {
        setTaskData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  
  if (isLoading) {
    return <div>Loading Task details...</div>;
  }

  if (error) {
    
    return <div>Error fetching task details: {error.message}</div>;
  }



  return (
    <div className='Task'>
<div className='Description'><h3>{taskData.taskName}</h3></div>
<div className='DueDate'><h4>Due Date :{taskData.taskDueDate}</h4></div>


<button onClick={startTimer}>Start</button>
<button onClick={stopTimer}>Stop</button>
{/* <p>start time: {startTime}</p>
<p>stop time: {stopTime}</p> */}
<p>Working Hours: {workingHours}</p>

    </div>
  )

}
