import React from 'react'
import Topbar from '../Compornents/Topbar'
import ProjectManagerSidebar from '../Components-Suraj/ProjectManagerSidebar'

export default function ProjectManagerDashboard() {
  return (
    <div>
       <div className="FullPage">
        
        <Topbar />
        <ProjectManagerSidebar />
        <div className="Content">
            
            
            <div>
              {/* content */}
             
            </div>
            
        </div>
        
      </div>
    </div>
  )
}
