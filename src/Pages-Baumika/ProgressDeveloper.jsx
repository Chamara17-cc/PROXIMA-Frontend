import React from 'react'
import Topbar from '../Compornents/Topbar';
import DeveloperSidebar from '../Components-Bhaumika/DeveloperSidebar';
import ProgressHeader from '../Components-Bhaumika/ProgressHeader';
import SampleContent from '../Components-Bhaumika/SampleContent';


function ProgressDeveloper() {
  return (
    <div>
    <div className='DeveloperProgress'>
    
      <Topbar />
      <DeveloperSidebar/>

      <div className="Content">

           <ProgressHeader/>
           <SampleContent/>
            
            
        </div>
    
    
    
    </div>
    </div>
  )
}

export default ProgressDeveloper