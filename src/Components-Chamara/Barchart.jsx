import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';

export default function BasicBars(props) {
    const [Income,setIncome] = useState(0);
    const [Expence,setExpence] = useState(0);


   const projectId=props.projectid;
    useEffect(() => {
      fetchBardata(projectId); // Assuming project ID is 11, change as necessary
    }, [projectId]);
  
    const fetchBardata = async (projectId) => {
      try {
        const response = await axios.get(`https://localhost:44339/api/FinanceDigram/Projects/${projectId}`);
        const data = response.data;
        console.log(data)
        setIncome(data.income);
        setExpence(data.used);
      } catch (error) {
        console.error('Error fetching diagram data:', error);
      }
    };
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Income', 'Expence'] }]}
      series={[{ data: [Income, Expence] }]}
      width={400}
      height={400}
    />
  );
}
