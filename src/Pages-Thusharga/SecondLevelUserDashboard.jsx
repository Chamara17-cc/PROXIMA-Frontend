import React from 'react'
import Sidebar from '../Compornents/Sidebar'
import Topbar from '../Compornents/Topbar'
import '../Pages/PageStructure.css'
import ManagerDashboardComponent from '../Components-Thusharaga/ManagerDashboardComponent'

function SecondLevelUserDashboard() {
  return (
    <div className="FullPage">
      
      <Sidebar/>
      <Topbar/>
     
      <div className="Content">
       
        <ManagerDashboardComponent/>
     
      </div>
      
    </div>

  )
}

export default SecondLevelUserDashboard