import React from 'react'
import Topbar from '../Compornents/Topbar';
import DeveloperSidebar from '../Components-Bhaumika/DeveloperSidebar';
import TaskHeader from '../Components-Bhaumika/TaskHeader';
import Tasklist from '../Components-Bhaumika/Tasklist';

function TaskDeveloper() {
  return (
    <div>
    <div className='DeveloperTask'>
    
      <Topbar />
      <DeveloperSidebar/>

      <div className="Content">
      <TaskHeader/>
      <Tasklist/>
   
        </div>
    
    
    
    </div>
    </div>
  )
}

export default TaskDeveloper