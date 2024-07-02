import React, { useState } from 'react'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'
import AdminDashboardComponent from '../Components-Thusharaga/AdminDashboardComponent'
import { useLocation } from 'react-router-dom'


function AdminDashboard() {




  return (
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
       
        <AdminDashboardComponent showRateUpdate={true}/>
     
      </div>
      
    </div>

  )
}

export default AdminDashboard