import React from 'react'
import Topbar from "../../Compornents/Topbar";
import ProjectManagerSidebar from "../../Components-Suraj/ProjectManagerSidebar";
import TaskDetailsCom from '../../Components-Suraj/TaskDetailsCom';

export default function PMtaskDetailsPage() {
  return (
    <div>
      <div className="FullPage">
        <Topbar />
        <ProjectManagerSidebar />
        <div className="Content">
          <h2>Task Details</h2>

          <div>
            {/* content */}

            <TaskDetailsCom />
          </div>
        </div>
      </div>
    </div>
  )
}
