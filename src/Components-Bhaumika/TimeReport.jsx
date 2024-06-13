
import React, { useEffect, useState } from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import './Report.css'

function TimeReport() {

   
    const [remain,setRemain] = useState(0);
    const [complete,setComplete] = useState(0);
   
  
    useEffect(() => {
        fetchDigramData(7); // Assuming project ID is 7, change as necessary
      }, []);
    
      const fetchDigramData = async (projectId) => {
        try {
          const response = await axios.get(`https://localhost:7008/api/TimeProgressReport/ProjectProgressReport/${projectId}`);
         const newData = response.data;
          console.log(newData);


          console.log(newData.totalProjectCompletedHours);
          console.log(newData.totalProjectRemainingHours);

          setRemain(newData.totalProjectRemainingHours);
          setComplete(newData.totalProjectCompletingHours);

        } catch (error) {
          console.error('Error fetching diagram data:', error);
        }
      };
      const data = [
        { label: 'Project Remaining Time', value: 3, color: '#00E5FF' },
        { label: 'Project Completed Time', value: 340, color: '#1A237E' },
      ];
    
      const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
    
      const getArcLabel = (params) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
      };
      const sizing = {
      margin: { right: 10 },
      width: 400,
      height: 400,
      legend: { hidden: true },
      };


  return (
<div className='Main'>
    <div className='MainTitle'><h2>Time Progress Report</h2></div>

    <PieChart
      series={[
        {
          outerRadius: 190,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 16,
        },
      }}
      {...sizing}
    />
      <Box display="flex" flexDirection="column" alignItems="left">
    <Box display="flex" mt={2} margin="10px" marginLeft="20px">
      {data.map((item) => (
        <Box key={item.label} display="flex" alignItems="center" mr={2}>
          <Box
            width={30}
            height={30}
            bgcolor={item.color}
            mr={1}
            borderRadius="5px"
          />
          <Typography variant="body1">{item.label}</Typography>
        </Box>
      ))}
    </Box>
  </Box>

  </div>
);
}

export default TimeReport