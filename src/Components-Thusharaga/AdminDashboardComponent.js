import React, { useEffect, useState } from 'react';
import RateUpdatePage from '../Pages-Chamara/RateUpdatePage';
import './styles/AdminDashboardStyles.css';
import { BarChart } from '@mui/x-charts/BarChart';


function AdminDashboardComponent() {
  const [Income,setIncome] = useState(0);
  const [Expence,setExpence] = useState(0);
  return (
    <div>
    <div className='column1'>Hi, Welcome Back 
      <div className='Developerrate'>
      <RateUpdatePage/>
      </div>
    </div>
    <div className="column2">
      <div className="box">Total Admins<br/>5</div>
      <div className="box">Total Project Managers<br/>200</div>
      <div className="box">Total Developers <br/>200</div>
      <div className="box">Total Projects<br/>300</div>
    </div>
    <div className='column3'>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Monthly Income', 'Monthly Expence'] }]}
      series={[{ data: [2000,3000 ] }]}
      width={400}
      height={300}
    />
    </div>
    </div>
  )
}

export default AdminDashboardComponent
