import React from 'react'
import Topbar from "../Compornents/Topbar";
import Sidebar from "../Compornents/Sidebar";
import '../Pages/PageStructure.css'
import FullTaskListCom from '../Components-Suraj/FullTaskListCom';

export default function FullTaskListPage() {
  return (
    <div>
        <div className="FullPage">
        
        <Topbar />
        <Sidebar />
        <div className="Content">
            <h1>Task List</h1><br/>
            {/*---- content --------*/}
            <FullTaskListCom/>
           
            

            <div>
              
            </div>
            
        </div>
        
      </div>
      
    </div>
  )
}
