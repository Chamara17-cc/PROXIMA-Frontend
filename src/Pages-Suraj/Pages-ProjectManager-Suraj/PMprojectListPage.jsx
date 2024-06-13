import React from 'react'
import Topbar from '../../Compornents/Topbar'
import ProjectManagerSidebar from '../../Components-Suraj/ProjectManagerSidebar'
import PMprojectListCom from '../../Components-Suraj/PM-Components-Suraj/PMprojectListCom'


export default function PMprojectListPage() {
  return (
    <div>
        <div className="FullPage">
        
        <Topbar />
        <ProjectManagerSidebar />
        <div className="Content">
            
            <h2>Project List</h2>
            
            <div>
              {/* content */}
              <PMprojectListCom />
             
            </div>
            
        </div>
        
      </div>
      
    </div>
  )
}
