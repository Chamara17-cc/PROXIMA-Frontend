import React from 'react'
import Topbar from '../Compornents/Topbar';
import DeveloperSidebar from '../Components-Bhaumika/DeveloperSidebar';
import TaskDescription from '../Components-Bhaumika/TaskDescription';
import TaskHeader from '../Components-Bhaumika/TaskHeader';



export default function TaskDescriptionDeveloper() {
  return ( <div>
    <div className='DeveloperTask'>
    
      <Topbar />
      <DeveloperSidebar/>

      <div className="Content">

          
            <TaskHeader/>
            <TaskDescription/>

        </div>
    
    </div>
    </div>
  )
}
