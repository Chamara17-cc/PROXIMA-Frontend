import React from 'react'
import Topbar from '../Compornents/Topbar';
import DeveloperSidebar from '../Components-Bhaumika/DeveloperSidebar';
import TeamHeader from '../Components-Bhaumika/TeamHeader';
import TeamDescription from '../Components-Bhaumika/TeamDescription';

export default function TeamDescriptionDeveloper() {
  return (<div>
    <div className='DeveloperTeam'>
    
      <Topbar />
      <DeveloperSidebar/>

      <div className="Content">

      <TeamHeader/>
          
            <TeamDescription/>

        </div>
    
    </div>
    </div>
  )
}
