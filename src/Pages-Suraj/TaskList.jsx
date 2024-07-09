import React from 'react'
import Topbar from "../Compornents/Topbar";
import Sidebar from "../Compornents/Sidebar";
import '../Pages/PageStructure.css'
import TaskListCom from '../Components-Suraj/TaskListCom';

export default function TaskList() {
  return (
    <div>
        <div className="FullPage">
        
        <Topbar />
        <Sidebar />
        <div className="Content">
            <h1>Task List</h1><br/>
            
            {/*---- content --------*/}
            
           <TaskListCom />
            

            <div>
              
            </div>
            
        </div>
        
      </div>
      
    </div>
  )
}
