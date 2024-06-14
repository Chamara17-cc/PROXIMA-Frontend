import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import "./TransactionStyles.css"
import TextField from '@mui/material/TextField';
import Invoice from "./Invoice";

function Transaction() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState("");
    const [SelectedType, setSelectedType] = useState("");
    const [Description,setDescription] = useState("");
    const [Value,setValue] = useState("");
    const [Date,setDate] = useState("");

    useEffect(() => {
    fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
          const response = await axios.get(`https://localhost:44339/api/Transaction/register`);
          console.log("Projects:", response.data); // Debugging: log fetched projects
          setProjects(response.data);
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      };

    const handleProjectChange = (event) => {
        setSelectedProject(event.target.value);
      };
    const handleTypeChange=(event)=>{
        setSelectedType(event.target.value);
    };
    const handleDescriptionChange=(event)=>{
      setDescription(event.target.value);
    };
    const handleValueChange=(event)=>{
        setValue(event.target.value);
    };
    const addValues = async () => {
      const transacdata = {
        Value: Value,
        Type: SelectedType,
        Description: Description,
        Date: Date
      };
    
      const url = `https://localhost:44339/api/Transaction/Project/${selectedProject}/register`;
    
      try {
        const response = await axios.post(url, transacdata);
        alert("Value added successfully");
            window.location.reload();                               //Refresh Page
      } catch (error) {
        if (error.response) {
          alert(`Server responded with status ${error.response.status}: ${error.response.data}`);
        } else if (error.request) {
          alert("No response received from the server");
        } else {
          alert(`Error setting up the request: ${error.message}`);
        }
      }
    };
    console.log(selectedProject);
  return (
    <div>
       
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
            <div className="Invoicename">
            <p><b>Project</b> : {selectedProject}</p>
             </div>
            <select id="SelectProject" className="Projectlist" value={selectedProject} onChange={handleProjectChange}>
                        <option value="">Select project here...</option>
                        {projects.map(project => (
                       <option key={project.projectId} value={project.projectId}>{project.projectName}</option>
                       ))}
                        </select>
            </Form.Label>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
            <div className="Type">
        <p><b>Type</b> : {SelectedType} </p>
        </div>
            <select id="SelectProject" className="transactype" value={SelectedType} onChange={handleTypeChange}>
                        <option value="">Select Type...</option>
                        <option value="Income">Income</option>   {/*Can be occur error that Income then change in to income */}
                        <option value="Expence">Expence</option>
                        </select>
            </Form.Label>
          </Form.Group>
        </Row>
        <Row>
        <div className="datepicker">
        <TextField
         autoFocus
          margin="dense"
         id="last_updated"
         type="date"
         value={Date}
        onChange={(e) => setDate(e.target.value)}
        inputProps={{
        style: {
            height: "30px",
            paddingTop: "0px",  // Adjust top padding 
            paddingBottom: "0px" // Adjust bottom padding 
        }
        }}
        style={{ backgroundColor: "white", width: "220px", marginTop: "5px", marginLeft: "10px" }}
       />

    </div>

     </Row>
      <div className="body">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Transaction Description</Form.Label>
            <Form.Control placeholder="Enter budget description" onChange={handleDescriptionChange} 
            style={{ fontSize: "16px" }} autoComplete="off"/>
          </Form.Group>
    
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Value</Form.Label>
            <Form.Control placeholder="Enter budget description" onChange={handleValueChange} 
            style={{ fontSize: "16px" }} autoComplete="off"/>
          </Form.Group>
          </Row>
          <div className="addbutton">
          <Row>
          <Form.Group className="submit-btn" controlId="formGridAddress1">
        <Button variant="primary" type="button" id="usubmit" onClick={addValues}>
          Add
        </Button>
        </Form.Group>
          </Row>
          </div>
      </div>
      </Form>

      <div className="invoicereport">
        <Invoice projectId={selectedProject}/>  {/*import invoice report*/}
      </div>
    </div>
  
  )
}

export default Transaction