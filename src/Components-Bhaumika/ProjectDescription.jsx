import './ProjectDescriptionStyle.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProjectDescription() {

    const [projectDetails, setProjectDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

  
  useEffect(() => {
    // Replace with your actual API call
    fetch('https://localhost:7044/api/DeveloperProject/1') 
      .then(response => response.json())
      .then(data => {
        setProjectDetails(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  
  if (isLoading) {
    return <div>Loading project details...</div>;
  }

  if (error) {
    // Handle errors gracefully, e.g., display an error message
    return <div>Error fetching project details: {error.message}</div>;
  }

  return ( projectDetails && (
    <div className='ProjectDescription'>
      <h2>{projectDetails.projectName}</h2>
      <h5>Basic Information:</h5>
      <div className='Projectdetails'>
      <p>Project Name: {projectDetails.projectName}</p>
      <p>Project Id: {projectDetails.projectId}</p>
      <p>Description: {projectDetails.projectDescription}</p>
      <p>Objectives: {projectDetails.projectObjectives}</p>
      </div>
      <h5>Project Manager Information:</h5>
      <div className='Projectdetails'>
      <p>Manager Name: {projectDetails.projectManagerName}</p>
      <p>Manager Id: {projectDetails.projectManagerId}</p>
      </div>
      <h5>Project Planning:</h5>
      <div className='Projectdetails'>
      <p>Start Date: {projectDetails.projectStartDate}</p>
      <p>Time Estimation: {projectDetails.projectDuration}</p>
      <p>Due Date: {projectDetails.projectDueDate}</p>
      </div>
    </div>
  )

);
  
}
