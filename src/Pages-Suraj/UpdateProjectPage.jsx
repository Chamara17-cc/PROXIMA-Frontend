import React from 'react'
import Topbar from "../Compornents/Topbar";
import Sidebar from "../Compornents/Sidebar";
import '../Pages/PageStructure.css'
import UpdateProjectCom from '../Components-Suraj/UpdateProjectCom';

export default function UpdateProjectPage() {
  return (
    <div>
        <div className="FullPage">
        
        <Topbar />
        <Sidebar />
        <div className="Content">
            <h1>Update Project</h1><br/>
            {/*---- content --------*/}
            <UpdateProjectCom/>
            
           
            

            <div>
              
            </div>
            
        </div>
        
      </div>
      
    </div>
  )
}
