import React from 'react'
import Topbar from '../Compornents/Topbar';
import DeveloperSidebar from '../Components-Bhaumika/DeveloperSidebar';
import Header from '../Components-Bhaumika/Header'
import Content from '../Components-Bhaumika/Content'

function DashboardDeveloper() {
  return (
    <div>
    <div className='DeveloperDashboard'>
    
      <Topbar />
      <DeveloperSidebar/>

      <div className="Content">
      <Header/>
   
     <Content/>
  


        </div>
    
    
    
    </div>
    </div>
  )
}

export default DashboardDeveloper