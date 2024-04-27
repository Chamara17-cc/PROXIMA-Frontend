import React from 'react'
import Topbar from '../Compornents/Topbar';
import DeveloperSidebar from '../Components-Bhaumika/DeveloperSidebar';
import TaskHeader from '../Components-Bhaumika/TaskHeader';
import Task from '../Components-Bhaumika/Task';

export default function TaskRecord() {





  
  return (
    <div>
    <div className='DeveloperTaskRecord'>
    
      <Topbar />
      <DeveloperSidebar/>

      <div className="Content">
      <TaskHeader/>
      <Task/>
   
        </div>
    
    
    
    </div>
    </div>
  )
}
