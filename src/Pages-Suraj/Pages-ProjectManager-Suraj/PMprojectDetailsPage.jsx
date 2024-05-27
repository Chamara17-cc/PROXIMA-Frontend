import React from 'react'
import Topbar from '../../Compornents/Topbar'
import ProjectManagerSidebar from '../../Components-Suraj/ProjectManagerSidebar'
import PMprojectDetailsCom from '../../Components-Suraj/PM-Components-Suraj/PMprojectDetailsCom'

export default function PMprojectDetailsPage() {
  return (
    <div>
        <div className="FullPage">
        
        <Topbar />
        <ProjectManagerSidebar />
        <div className="Content">
            
            <h2>Project Details</h2>
            
            <div>
              {/* content */}
              <PMprojectDetailsCom />
             
            </div>
            
        </div>
        
      </div>
      
    </div>
  )
}
