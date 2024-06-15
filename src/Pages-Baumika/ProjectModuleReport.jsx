import React from 'react'
import Topbar from '../Compornents/Topbar';
import DeveloperSidebar from '../Components-Bhaumika/DeveloperSidebar';
import SummaryHeader from '../Components-Bhaumika/SummaryHeader';
import ModuleReport from '../Components-Bhaumika/ModuleReport';
import './ReportPage.css'

function ProjectModuleReport() {
  return (
   
    <div>
    <div className='DeveloperProject'>
    
      <Topbar />
      <DeveloperSidebar/>

      <div className="Content">
           <SummaryHeader/>
           <div className='MainContent'>
           
 <ModuleReport/>
  
          </div>
      </div>
    
    </div>
    </div>
  )
}

export default ProjectModuleReport