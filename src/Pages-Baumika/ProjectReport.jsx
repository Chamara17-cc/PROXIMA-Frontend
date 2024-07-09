import React from 'react'
import Topbar from '../Compornents/Topbar';
import DeveloperSidebar from '../Components-Bhaumika/DeveloperSidebar';
import SummaryHeader from '../Components-Bhaumika/SummaryHeader';
import TimeReport from '../Components-Bhaumika/TimeReport';
import './ReportPage.css'


export default function ProjectReport() {
  return (
    <div>
    <div className='DeveloperProject'>
    
      <Topbar />
      <DeveloperSidebar/>

      <div className="Content">
           <SummaryHeader/>
           <div className='MainContent'>
           
  <TimeReport />
  
          </div>
      </div>
    
    </div>
    </div>
  )
}
