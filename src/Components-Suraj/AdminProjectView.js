import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./FormStyle.css";
import "./AdminProjectViewCSS.css";
import axios from "axios";
import "./ProjectListComponent";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import "./ProjectListCSS.css";


export default function AdminProjectView() {
  const [projectData, setProjectData] = useState([]);
  const location = useLocation();

  //  console.log(location.state.selectedId);
  const selectedId = location.state.selectedId;

  const navigate = useNavigate();
  
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://localhost:44319/api/AdminProjectView/${selectedId}`
      );
      setProjectData(response.data);
      console.log(projectData);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getData();

  },[]);


  const handleNavigate = async()=>{
    console.log("clicked");
    navigate("/AddDevelopersPage", {state:{selectedId:selectedId}});
  }

  const HandleAssign = () => {
    console.log('clicked');
    navigate('/taskcreation');
  }

  return (
    <div className="Section">
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="project" title="Project Info">
          {projectData.map((pro) => (
            <div className="project-detail">
              <h3 className="card-topic">{pro.projectName}</h3>
              <p className="ViewItems">{pro.projectDescription}</p>
              <p className="ViewItems">Project Id : {pro.projectId}</p>
              <p className="ViewItems">Technologies : {pro.technologies}</p>
              <p className="ViewItems">Project StartDate : {pro.p_StartDate}</p>
              <p className="ViewItems">Project DueDate : {pro.p_DueDate}</p>
              <p className="ViewItems">Duration : {pro.duration}</p>
              <p className="ViewItems">Objectives : {pro.objectives}</p>
            </div>
          ))}
          <div>
          </div>

          <Button onClick={handleNavigate} variant="outline-primary">
            Add developers
          </Button>

          
          
          
        </Tab>

        <Tab eventKey="devTeam" title="Team Info">
          {projectData.map((pro) => (
            <div className="project-detail">
              <h3 className="card-topic">{pro.teamName}</h3>
            </div>
          ))}
            <div className="project-detail">
              <p className="ViewItems">Project Manager Name: manager01</p>

              <br/>

              <h3 className="card-topic">Developers</h3>
              <table className="ProjectList">
                <thead>
                  <th>DeveloperId</th>
                  <th>Developer Name</th>
                  <th>Job Role</th>
                  <th>Assign Task</th>
                </thead>

                <tbody>
                  <tr>
                    <td>3</td>
                    <td>developer3</td>
                    <td>fronendDev</td>
                    <td><Button onClick={HandleAssign} variant="danger">Assign</Button></td>

                  </tr>
                  <tr>
                    <td>4</td>
                    <td>developer4</td>
                    <td>wfwf3</td>
                    <td><Button  variant="danger">Assign</Button></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>developer5</td>
                    <td>wfwf3</td>
                    <td><Button variant="danger">Assign</Button></td>
                  </tr>
                </tbody>
              </table>

            </div>
        </Tab>
        <Tab eventKey="client" title="Client Info">
          <div className="project-detail">
            <h3 className="card-topic">Client Name</h3>
            <p className="ViewItems">Description</p>
            <p className="ViewItems">Project Id : abc</p>
            <p className="ViewItems">Category : bcd</p>
            <p className="ViewItems">Start Date : 2000</p>
            <p className="ViewItems">End Date : 3000</p>
            <p className="ViewItems">Duration :</p>
            <p className="ViewItems">Objectives :</p>
            <p className="ViewItems"></p>
            {/* You can add more details here */}
          </div>
        </Tab>
        <Tab eventKey="budget" title="Budget Info">
          <div className="project-detail">
            <h3 className="card-topic">Budget Info</h3>
            <p className="ViewItems">Description</p>
            <p className="ViewItems">Project Id : abc</p>
            <p className="ViewItems">Category : bcd</p>
            <p className="ViewItems">Start Date : 2000</p>
            <p className="ViewItems">End Date : 3000</p>
            <p className="ViewItems">Duration :</p>
            <p className="ViewItems">Objectives :</p>
            <p className="ViewItems"></p>
            {/* You can add more details here */}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
