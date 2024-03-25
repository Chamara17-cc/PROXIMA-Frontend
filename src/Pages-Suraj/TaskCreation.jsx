import React from 'react'
import Topbar from '../Compornents/Topbar'
import Sidebar from '../Compornents/Sidebar'
import TaskCreationCom from '../Components-Suraj/TaskCreationCom'

function TaskCreation() {
  return (
    <div>

<div className="FullPage">
        
        <Topbar />
        <Sidebar />
        <div className="Content">
            <h1>Task Creation</h1><br/>
            
            <div>
              <TaskCreationCom/>
             
            </div>
            
        </div>
        
      </div>
      
    </div>
  )
}

export default TaskCreation