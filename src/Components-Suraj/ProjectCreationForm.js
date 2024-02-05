import React, { useState } from "react";
import axios from 'axios';


import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function ProjectCreationForm() {

  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [description , setDescription] = useState('');

  const handleIdChange = (value) => {
    setProjectId(value);
  }

  const handleNameChange = (value) => {
    setProjectName(value);
  }

  const handleDescriptionChange = (value) => {
    setDescription(value);
  }

  const handleSubmit = () => {
    const data = {
      ProjectId : projectId,
      ProjectName : projectName,
      ProjectDescription : description

    };

    const url = '';
    axios.post(url, data).then((result) =>
      alert('data inserted')
    ).catch((error) =>{
      alert(error);
    });
    
    
  }

  

  


  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Project ID</Form.Label>
            <Form.Control type="text" placeholder="Enter ProjectId" id="projectId" onChange={(e) => handleIdChange(e.target.value)}/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Project Name</Form.Label>
            <Form.Control type="text" placeholder="ProjectName" id="projectName" onChange={(e) => handleNameChange(e.target.value)}/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Project Description</Form.Label>
          <Form.Control placeholder="Enter project description" id="description" onChange={(e) => handleDescriptionChange(e.target.value)} /><br/>
          <Button variant="primary" type="submit" id="upload">
          Upload
        </Button>
        </Form.Group>

        <Button variant="primary" type="submit" id="usubmit" onClick={() => handleSubmit()}>
          Submit
        </Button>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Technologies</Form.Label>
          <Form.Control placeholder="Enter project technologies" id="technologies"/>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Start Date</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Due Date</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Duration</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        
      </Form>
    </div>
  );
}
