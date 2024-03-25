import React from 'react'
import Topbar from "../Compornents/Topbar";
import Sidebar from "../Compornents/Sidebar";
import '../Pages/PageStructure.css'
import AddDevelopersCom from '../Components-Suraj/AddDevelopersCom';

export default function AddDevelopersPage() {
  return (
    <div>
        <div className="FullPage">
        
        <Topbar />
        <Sidebar />
        <div className="Content">
            <h1>Add Developers</h1><br/>
            {/*---- content --------*/}
            
           <AddDevelopersCom/>
            

            <div>
              
            </div>
            
        </div>
        
      </div>
      
    </div>
  )
}
