import './ProjectDescriptionStyle.css'
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { format } from 'date-fns';

export default function ProjectDescription() {

    const [projectDetails, setProjectDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const selectedId = location.state.selectedId;
    const navigate = useNavigate();

 

  console.log(selectedId);

  const getData = async () => {
    try {
      const response = await axios.get(`https://localhost:7008/api/DeveloperProject/ProjectDescription/${selectedId}`);
      setProjectDetails(response.data);
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
    return <div>Loading project details...</div>;
  }

  if (error) {
    // Handle errors gracefully, e.g., display an error message
    return <div>Error fetching project details: {error.message}</div>;
  }

  return (
<div>
    { projectDetails.map((item) => (


    <div className='ProjectDescription'>
      <h2>{item.projectName}</h2>
      <h5>Basic Information:</h5>
      <div className='Projectdetails'>
      <p>Project Name: {item.projectName}</p>
      <p>Project Id: {item.projectId}</p>
      <p>Description: {item.projectDescription}</p>
      <p>Objectives: {item.objectives}</p>
      </div>
      <h5>Project Manager Information:</h5>
      <div className='Projectdetails'>
      <p>Manager Name: {item.projectManagerName}</p>
      <p>Manager Id: {item.projectManagerId}</p>
      </div>
      <h5>Project Planning:</h5>
      <div className='Projectdetails'>
      <p>Start Date: {item.p_StartDate ? format(new Date(item.p_StartDate ), 'yyyy-MM-dd') : '-'}</p>
      <p>Time Estimation: {item.duration}</p>
      <p>Due Date: {item.p_DueDate ? format(new Date(item.p_DueDate ), 'yyyy-MM-dd') : '-'}</p>
      </div>
    </div>
  
  ))}

</div>


);
  
}
