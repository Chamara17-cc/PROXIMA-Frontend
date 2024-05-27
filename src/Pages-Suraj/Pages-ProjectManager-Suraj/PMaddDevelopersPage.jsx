import React from 'react'
import Topbar from '../../Compornents/Topbar'
import ProjectManagerSidebar from '../../Components-Suraj/ProjectManagerSidebar'
import AddDevelopersCom from '../../Components-Suraj/AddDevelopersCom'


export default function PMaddDevelopersPage() {
  return (
    <div>
        <div className="FullPage">
        <Topbar />
        <ProjectManagerSidebar />
        <div className="Content">
          <h2>Add Developers</h2>

          <div>
            {/* content */}

            <AddDevelopersCom />
          </div>
        </div>
      </div>
      
    </div>
  )
}
