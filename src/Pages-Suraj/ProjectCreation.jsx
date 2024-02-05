import React from "react";
import Topbar from "../Compornents/Topbar";
import Sidebar from "../Compornents/Sidebar";
import '../Pages/PageStructure.css'
import ProjectCreationForm from "../Components-Suraj/ProjectCreationForm";


export default function ProjectCreation() {
  return (
    <div>
      <div className="FullPage">
        
        <Topbar />
        <Sidebar />
        <div className="Content">
            <h1>Project Creation</h1><br/>
            <ProjectCreationForm/>
            <div>
              
            </div>
            
        </div>
        
      </div>
    </div>
  );
}
