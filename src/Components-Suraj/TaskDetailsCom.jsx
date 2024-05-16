import React, { useEffect, useState } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./AdminProjectViewCSS.css";
import "./FormStyle.css";
import "./ProjectListCSS.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function TaskDetailsCom() {

    const location = useLocation();


    ///***********Get basic details******* */
    const [data, setData] = useState([]);
    const selectedTaskId = location.state.selectedTaskId;

    const GetTaskDetails = async () => {
        const url = `https://localhost:44339/api/TaskDetailsView?Tid=${selectedTaskId}`;
        try {
            const response = await axios.get(url);
            setData(response.data);

            console.log(data);
        } catch (error) {
            alert(error);
        }
    }
    useEffect(() => {
        GetTaskDetails();
    },[]);



    
  return (
    <div className="Section">
      <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3" fill>
        <Tab eventKey="home" title="Task Info">
            {data.map((task , index) => (
                <div className="project-detail">
                <h3 className="card-topic">{task.taskName}</h3>
                <p className="ViewItems">Task Id: {task.taskId}</p>
                <p className="ViewItems">Task Description: {task.taskDescription}</p>
                <p className="ViewItems">Technologies: {task.technologies}</p>
                <p className="ViewItems">Start Date: {task.createdDate}</p>
                <p className="ViewItems">Due Date: {task.dueDate}</p>
                <p className="ViewItems">Time Duration: {task.timeDuration} days</p>
                <p className="ViewItems">Priority: {task.priority}</p>
                <p className="ViewItems">Dependancies: {task.dependancies}</p>
                <p className="ViewItems">Task status: {task.taskStatus}</p>
              </div>
            ))}
        
          
        </Tab>

        <Tab eventKey="resources" title="Resources">
        <div className="project-detail">
            Resources
        </div>
        </Tab>

        <Tab eventKey="time" title="Task Info">
        <div className="project-detail">
            Time info
        </div>
        </Tab>
      </Tabs>
    </div>
  );
}
