import React from 'react'
import Topbar from "../Compornents/Topbar";
import Sidebar from "../Compornents/Sidebar";
import '../Pages/PageStructure.css'
//import Projectlist from '../Components-Suraj/List';
import ProjectListComponent from '../Components-Suraj/ProjectListComponent';


function ProjectList() {
  return (
    <div>
      <div className="FullPage">
        
        <Topbar />
        <Sidebar />
        <div className="Content">
            <h1>Project List</h1><br/>
            {/*---- content --------*/}
            
            <ProjectListComponent />
            

            <div>
              
            </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default ProjectList