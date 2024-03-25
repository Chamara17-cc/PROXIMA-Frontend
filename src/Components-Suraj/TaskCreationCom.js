import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./FormStyle.css";

import InputGroup from "react-bootstrap/InputGroup";
import { faL } from "@fortawesome/free-solid-svg-icons";

export default function TaskCreationCom() {
  const [validated, setValidated] = useState(false);

  const handleAssign = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleAssign}>
        <div className="Section">
          <h3 className="SectionHeading">Task Initialization</h3>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label htmlFor="taskName">Task Name:</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Task Name"
                  id="taskName"
                 // onChange={(e) => handlePNameChange(e.target.value)}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter task name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Task Description:</Form.Label>
            <Form.Control
              placeholder="Enter task description"
              id="description"
             // onChange={(e) => handleDescriptionChange(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Task Type:</Form.Label>
            <Form.Control
              placeholder="Enter task type"
              id="taskType"
             // onChange={(e) => handleObjectiveChange(e.target.value)}
            />
          </Form.Group>
          {/*----------------------File upload part----------------------- */}
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Upload:</Form.Label>
            <Form.Control type="file" size="sm" style={{ width: "250px" }} />
          </Form.Group>
        </div>

        <Button type="submit">Assign</Button>
      </Form>
    </div>
  );
}
