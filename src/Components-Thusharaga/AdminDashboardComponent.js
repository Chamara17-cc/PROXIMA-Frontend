import React, { useEffect, useState } from 'react';
import RateUpdatePage from '../Pages-Chamara/RateUpdatePage';
import './styles/AdminDashboardStyles.css';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';

function AdminDashboardComponent({ showRateUpdate }) {
  const [monthlyincome,setIncome] = useState('');
  const [monthlyexpense,setExpence] = useState('');
  const [totaladmins,setTotalAdmins]=useState(0);
  const [totalmanagers,setTotalManagers]=useState(0);
  const [totaldevelopers,setTotaldevelopers]=useState(0);
  const [totalprojects,setTotalProjects]=useState(0);
  useEffect(()=>{
     fetchDashboardData();
  },[])

  const fetchDashboardData= async()=>{
    try{
       const response = await axios.get(`https://localhost:44339/api/AdminDashboard`);
       console.log(response.data);
       setTotalAdmins(response.data.totalAdmins);
       setTotaldevelopers(response.data.totalDevelopers)
       setTotalManagers(response.data.totalManagers)
       setIncome(response.data.totalIncome)
       setExpence(response.data.totalExpense)
       setTotalProjects(response.data.totalProjects)
    }catch(error){
      console.error('Error fetching diagram data:', error);
    }
  };

  return (
    <div>
    <div className='column1'>Hi, Welcome Back 
    {showRateUpdate && (
          <div className='Developerrate'>
            <RateUpdatePage />
          </div>
        )}
    </div>
    <div className="column2">
      <div className="box">Total Admins<br/>{totaladmins}</div>
      <div className="box">Total Project Managers<br/>{totalmanagers}</div>
      <div className="box">Total Developers <br/>{totaldevelopers}</div>
      <div className="box">Total Projects<br/>{totalprojects}</div>
    </div>
    <div className='column3'>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Monthly Income', 'Monthly Expence'] }]}
      series={[{ data: [monthlyincome,monthlyexpense ] }]}
      width={400}
      height={300}
    />
    </div>
    </div>
  )
}

export default AdminDashboardComponent
