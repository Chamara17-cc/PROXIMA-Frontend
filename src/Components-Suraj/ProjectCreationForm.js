import React, { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import InputGroup from "react-bootstrap/InputGroup";
import Datepicker from "./Datepicker";

import "./FormStyle.css";
import { Alert } from "react-bootstrap";

export default function ProjectCreationForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const data = {
      ProjectId: projectId,
      ProjectName: projectName,
      ProjectDescription: description,
    };

    // const url = "";
    // axios
    //   .post(url, data)
    //   .then((result) => alert("data inserted"))
    //   .catch((error) => {
    //     alert(error);
    //   });
  };

  const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");

  const handleIdChange = (value) => {
    setProjectId(value);
  };

  const handleNameChange = (value) => {
    setProjectName(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>

         {/* ------Project Initalization part----- has a validation */}

        <div className="Section">
          <h3 className="SectionHeading">Project Initialization</h3>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Project ID</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter ProjectId"
                  id="projectId"
                  onChange={(e) => handleIdChange(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter last name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Project Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="ProjectName"
                  id="projectName"
                  onChange={(e) => handleNameChange(e.target.value)}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter last name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Project Description</Form.Label>
            <Form.Control
              placeholder="Enter project description"
              id="description"
              onChange={(e) => handleDescriptionChange(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Project Objectives</Form.Label>
            <Form.Control
              placeholder="Enter project objectives"
              id="objectives"
            />
          </Form.Group>
        </div>

         {/* -----------Develpment team info---------- has a validation */}

        <div className="Section">
          <h3 className="SectionHeading">Development Team Information</h3>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Project Manager Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter project manager name"
                  id="projectManagerId"
                  onChange={(e) => handleIdChange(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please project manager name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Project Manager ID</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter project manager name"
                  id="projectManagerName"
                  onChange={(e) => handleNameChange(e.target.value)}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter project manager ID.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
        </div>


         {/* -----------Client info---------- has a validation */}

        <div className="Section">
          <h3 className="SectionHeading">Client Information</h3>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Client Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter client name"
                  id="clientName"
                  onChange={(e) => handleIdChange(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter client name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Client ID</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter client ID"
                  id="clientID"
                  onChange={(e) => handleNameChange(e.target.value)}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter client ID.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
        </div>



         {/* --------------Dates--------- */}

        <div className="Section">
          <h2 className="SectionHeading">Project Planing</h2>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Start Date</Form.Label>
              <Datepicker />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Due Date</Form.Label>
              <Datepicker />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Time Estimation</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Enter time estimation"
                  id="timeDuration"
                  onChange={(e) => handleIdChange(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
           

          </Row>
        </div>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Duration</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
}
