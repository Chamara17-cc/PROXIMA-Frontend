import React from 'react'
import Topbar from '../Compornents/Topbar';
import DeveloperSidebar from '../Components-Bhaumika/DeveloperSidebar';
import Projectlist from '../Components-Bhaumika/Projectlist';
import ProjectHeader from '../Components-Bhaumika/ProjectHeader';


function ProjectDeveloper() {
  return (
    <div>
    <div className='DeveloperProject'>
    
      <Topbar />
      <DeveloperSidebar/>

      <div className="Content">

            <ProjectHeader/>
            
            <Projectlist/>

        </div>
    
    </div>
    </div>
  )
}

export default ProjectDeveloper