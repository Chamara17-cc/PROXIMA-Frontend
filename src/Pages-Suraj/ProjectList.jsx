import React from 'react'
import Topbar from "../Compornents/Topbar";
import Sidebar from "../Compornents/Sidebar";
import '../Pages/PageStructure.css'
//import Projectlist from '../Components-Suraj/List';
import ProjectListComponent from '../Components-Suraj/ProjectListComponent';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function ProjectList() {

  const navigate = useNavigate();

  const HandleAddProject = () => {
    navigate('/ProjectCreation');
  }

  return (
    <div>
      <div className="FullPage">
        
        <Topbar />
        <Sidebar />
        <div className="Content">
          
            <h1>Project List</h1>

            <Button onClick={HandleAddProject} style={{float: 'right', marginRight: '60px'}}>+Add Project</Button>
            
            <br/><br/>

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