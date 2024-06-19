import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';
import './Report.css'

function ModuleReport() {

    const [remain,setRemain] = useState(0);
    const [inprogress,setInprogress] = useState(0);
    const [complete,setComplete] = useState(0);
    const colors = ['#FF6384', '#36A2EB', '#FFCE56'];

  
    useEffect(() => {
      fetchBardata(7); // Assuming project ID is 7, change as necessary
    }, []);
  
    const fetchBardata = async (projectId) => {
      try {
        const responseremain = await axios.get(`https://localhost:44339/api/ModuleProgressReport/GetProjectRemainingTasks/${projectId}`);
        setRemain(responseremain.data);
        console.log(inprogress);

        const responsecomplete = await axios.get(`https://localhost:44339/api/ModuleProgressReport/GetProjectInProgressTasks/${projectId}`);
        setInprogress(responsecomplete.data);
        console.log(remain);


        const responseinprogress = await axios.get(`https://localhost:44339/api/ModuleProgressReport/GetProjectCompletedTasks/${projectId}`);
        setComplete(responseinprogress.data);
        console.log(complete);



       
      } catch (error) {
        console.error('Error fetching diagram data:', error);
      }
    };
  return (
<div className='Main'>
    <div className='MainTitle'><h2>Module Progress Report</h2></div>
   <BarChart
      xAxis={
        [{ scaleType: 'band', 
        data: ['Project Remaining Tasks','Project InProgress Tasks', 'Project Completed Tasks']
       }]}
      series={[
        { data: [remain, inprogress,complete],
          backgroundColor: colors, },
        ]}

      width={600}
      height={400}
     

  
      
    />

    </div>

  )
}

export default ModuleReport