import React from 'react'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'
import AdminDashboardComponent from '../Components-Thusharaga/AdminDashboardComponent'

function AdminDashboard() {
  return (
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
       
        <AdminDashboardComponent/>
     
      </div>
      
    </div>

  )
}

export default AdminDashboard