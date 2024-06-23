import React from 'react'
import Topbar from '../../Compornents/Topbar'
import ProjectManagerSidebar from '../../Components-Suraj/ProjectManagerSidebar'
import TaskCreationCom from '../../Components-Suraj/TaskCreationCom'

export default function PMtaskCreationPage() {
  return (
    <div>
        <div className="FullPage">
        
        <Topbar />
        <ProjectManagerSidebar />
        <div className="Content">
            
            <h2>Task Creation</h2>
            
            <div>
              {/* content */}
              
              <TaskCreationCom />
             
            </div>
            
        </div>
        
      </div>
      
    </div>
  )
}
