import React from "react";
import Topbar from "../Compornents/Topbar";
import Sidebar from "../Compornents/Sidebar";
import '../Pages/PageStructure.css'
import AdminProjectView from "../Components-Suraj/AdminProjectView";


export default function AdminProjectViewPage() {
  return (
    <div>
      <div className="FullPage">
        
        <Topbar />
        <Sidebar />
        <div className="Content">
            <h1>Project Details</h1><br/>
            
            <div>
              <AdminProjectView/>
             
            </div>
            
        </div>
        
      </div>
    </div>
  );
}
