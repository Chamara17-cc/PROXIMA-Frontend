import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProjectListCSS.css";
import { useNavigate } from 'react-router-dom';


export default function ProjectListComponent() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  const navigate = useNavigate();

  //const url = "https://localhost:44319/api/ViewProjectList";    //old

  const url = "https://localhost:44339/api/ViewProjectList";    //new

  useEffect(() => {
    axios
      .get(url)
      .then((result) => setData(result.data))
      .catch((e) => console.log(e));

      setLoad(false);
  }, []);

 
  var selectedId;

  const HandleProjectSelection = (id) => {
    selectedId = id;
  //  alert(selectedId);
    
    
     
    navigate('/AdminProjectViewPage',{state:{selectedId:selectedId}});
    
   
    
  };

  if(load){
    return(
      <>
        Loading...
      </>
    );
  }
  

  return (
    <div>
      <table className="ProjectList">
        <thead>
          <th>Project Id</th>
          <th>Project Name</th>
          <th>Project Status</th>
        </thead>
        
        <tbody>
        
          {data.map((project, index) => (
            <tr
              key={project.proId}
              onClick={() => HandleProjectSelection(project.proId)}
              
            >
              <td>{project.proId}</td>
              <td>{project.projectName}</td>
              <td></td>

              
            </tr>
          ))}
          
        </tbody>
        
      </table>
    </div>
  );
}
