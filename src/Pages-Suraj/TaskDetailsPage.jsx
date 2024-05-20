import React from 'react'
import Topbar from "../Compornents/Topbar";
import Sidebar from "../Compornents/Sidebar";
import '../Pages/PageStructure.css'
import TaskDetailsCom from '../Components-Suraj/TaskDetailsCom';

export default function TaskDetailsPage() {
  return (
    <div>
        <div className="FullPage">
        
        <Topbar />
        <Sidebar />
        <div className="Content">
            <h1>Task Details</h1><br/>
            {/*---- content --------*/}
            
           <TaskDetailsCom />
            

            <div>
              
            </div>
            
        </div>
        
      </div>
      
    </div>
  )
}
