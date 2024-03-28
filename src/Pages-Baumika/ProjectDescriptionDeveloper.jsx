import React from 'react'
import Topbar from '../Compornents/Topbar';
import DeveloperSidebar from '../Components-Bhaumika/DeveloperSidebar';
import ProjectHeader from '../Components-Bhaumika/ProjectHeader';
import ProjectDescription from '../Components-Bhaumika/ProjectDescription';




export default function ProjectDescriptionDeveloper() {


  return ( <div>
    <div className='DeveloperProject'>
    
      <Topbar />
      <DeveloperSidebar/>

      <div className="Content">

            <ProjectHeader/>
          
            <ProjectDescription/>

        </div>
    
    </div>
    </div>
  )
}
