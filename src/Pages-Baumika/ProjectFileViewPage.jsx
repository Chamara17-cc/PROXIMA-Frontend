import React from 'react'
import Topbar from '../Compornents/Topbar';
import DeveloperSidebar from '../Components-Bhaumika/DeveloperSidebar';
import ResourceHeader from '../Components-Bhaumika/ResourceHeader';
import ProjectFileView from '../Components-Bhaumika/ProjectFileView';

export default function ProjectFileViewPage() {
  return (
    
    <div>
    <div className='DeveloperProject'>
    
      <Topbar />
      <DeveloperSidebar/>

      <div className="Content">
           <ResourceHeader/>
           <div className='MainContent'>
           
  <ProjectFileView/>
  
          </div>
      </div>
    
    </div>
    </div>
  )
}
