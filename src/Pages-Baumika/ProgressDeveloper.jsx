import React from 'react'
import Topbar from '../Compornents/Topbar';
import DeveloperSidebar from '../Components-Bhaumika/DeveloperSidebar';
import ProgressHeader from '../Components-Bhaumika/ProgressHeader';
import TaskReport from '../Components-Bhaumika/TaskReport';
import './ReportPage.css'

function ProgressDeveloper() {
  return (
    <div>
    <div className='DeveloperProgress'>
    
      <Topbar />
      <DeveloperSidebar/>

      <div className="Content">

           <ProgressHeader/>

           <div className='MainContent'>

           <TaskReport/>
            
               </div>
        </div>
    
    
    
    </div>
    </div>
  )
}

export default ProgressDeveloper