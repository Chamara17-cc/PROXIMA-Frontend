import React from 'react'
import Topbar from '../Compornents/Topbar'
import ProjectManagerSidebar from '../Components-Suraj/ProjectManagerSidebar'
import AdminDashboardComponent from '../Components-Thusharaga/AdminDashboardComponent'

export default function ProjectManagerDashboard() {
  return (
    <div>
       <div className="FullPage">
        
        <Topbar />
        <ProjectManagerSidebar />
        <div className="Content">
            <div>

             {/* content */}
             

            <AdminDashboardComponent showRateUpdate={false} /> {/* Hide the RateUpdatePage */}

            </div>
        </div>
        
      </div>
    </div>
  )
}
