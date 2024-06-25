import React from 'react'
import Topbar from '../../Compornents/Topbar'
import ProjectManagerSidebar from '../../Components-Suraj/ProjectManagerSidebar'
import FullTaskListCom from '../../Components-Suraj/FullTaskListCom'


export default function PMFullTaskViewPage() {
  return (
    <div>
        <div className="FullPage">
        <Topbar />
        <ProjectManagerSidebar />
        <div className="Content">
          <h2>Task List</h2>

          <div>
            {/* content */}
            <FullTaskListCom/>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}
