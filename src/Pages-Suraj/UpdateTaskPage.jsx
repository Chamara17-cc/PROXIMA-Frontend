import React from 'react'
import Topbar from "../Compornents/Topbar";
import Sidebar from "../Compornents/Sidebar";
import '../Pages/PageStructure.css'
import UpdateTaskCom from '../Components-Suraj/UpdateTaskCom';

export default function UpdateTaskPage() {
  return (
    <div>
        <div className="FullPage">
        
        <Topbar />
        <Sidebar />
        <div className="Content">
            <h1>Update Task</h1><br/>
            {/*---- content --------*/}
            
            <UpdateTaskCom/>
           
            

            <div>
              
            </div>
            
        </div>
        
      </div>
      
    </div>
  )
}
