import React, { useState } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import InputGroup from "react-bootstrap/InputGroup";

import "react-datepicker/dist/react-datepicker.css";
import "./datepickerStyle.css";

import "./FormStyle.css";
import { useNavigate } from "react-router-dom";


export default function ProjectCreationForm() {
  const navigate = useNavigate();

  //const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [objectives, setObjectives] = useState("");
  //const [projectManagerName, setProjectManagerName] = useState("");
  const [projectTeamName, setProjectTeamName] = useState("");
  const [projectManagerID, setProjectManagerID] = useState("");
  //const [clientName, setClientName] = useState("");
  const [clientID, setClientID] = useState("");
  const [timeDuration, setTimeDuration] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budgetAllocation, setBudgetAllocation] = useState("");
  const [technologies, setTechnologies] = useState("");

  const [startDate, setStartDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  // const handlePIdChange = (value) => {
  //   setProjectId(value);
  // };

  const handlePNameChange = (value) => {
    setProjectName(value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleObjectiveChange = (value) => {
    setObjectives(value);
  };

  // const handlePManagerNameChange = (value) => {
  //   setProjectManagerName(value);
  // };

  const handleTeamNameChange = (value) => {
    setProjectTeamName(value);
  };

  const handlePManagerIDChange = (value) => {
    setProjectManagerID(value);
  };

  // const handleClientNameChange = (value) => {
  //   setClientName(value);
  // };

  const handleClientIDChange = (value) => {
    setClientID(value);
  };

  const handleDurationChange = (value) => {
    setTimeDuration(value);
  };

  const handleTimelineChange = (value) => {
    setTimeline(value);
  };

  const handleBudgetChange = (value) => {
    setBudgetAllocation(value);
  };

  const handleTechnologyChange = (value) => {
    setTechnologies(value);
  };

  const [validated, setValidated] = useState(false);

  //   const handleSubmit = (event) => {
  //     const form = event.currentTarget;
  //     if(form.checkValidity() === false) {
  //       event.preventDefault();
  //       event.stopPropagation();

  //     }

  //     setValidated(true);

  //     const data = {
  //       //ProjectId: projectId,
  //       ProjectName: projectName,
  //       ProjectDescription: description,
  //       Technologies: technologies,
  //       BudgetEstimation: budgetAllocation,
  //       StartDate: selectedStartDate,
  //       DueDate: selectedDueDate,
  //       Duration: timeDuration,
  //       Objectives: objectives,

  //       //ProjectStatus:
  //       TeamName: projectTeamName,
  //       ProjectManagerId: projectManagerID,
  //       //TaskCount
  //       ClientId: clientID,
  //       TimeLine: timeline
  //       //AdminId
  //     };

  //     const url = "https://localhost:44319/api/CreateProject";

  //     axios.post(url,data).then((e) =>{
  //       alert("data inserted");
  //       console.log(data);
  //     }

  //     ).catch((error)=>{
  //         console.log(data);
  //         alert(error);

  //       })
  // }

  const handleAddDevelopers = () => {
    navigate("/AddDevelopersPage");
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert("Input the required fields");
    } else {
      event.preventDefault(); // Prevent default form submission
      // Form is valid, proceed with data submission
      const data = {
        //ProjectId: projectId,
        ProjectName: projectName,
        ProjectDescription: description,
        Technologies: technologies,
        BudgetEstimation: budgetAllocation,
        P_StartDate: startDate,
        P_DueDate: dueDate,
        Duration: timeDuration,
        Objectives: objectives,

        //ProjectStatus:
        TeamName: projectTeamName,
        ProjectManagerId: projectManagerID,
        //TaskCount
        ClientId: clientID,
        TimeLine: timeline,
        //AdminId
      };

      console.log(data);

      const url = "https://localhost:44319/api/CreateProject";

      axios
        .post(url, data)
        .then((response) => {
          alert("Data inserted successfully");
          console.log("**");
          console.log(response.data);

          //---after successful submission

          setValidated(false);
        })
        .catch((error) => {
          alert("Error occurred : " + error);
        });
    }

    setValidated(true); // Always set validated to true after attempting validation
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        {/* ------Project Initalization part----- has a validation */}

        <div className="Section">
          <h3 className="SectionHeading">Project Initialization</h3>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label htmlFor="projectName">Project Name:</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  autoFocus
                  required
                  type="text"
                  placeholder="ProjectName"
                  id="projectName"
                  onChange={(e) => handlePNameChange(e.target.value)}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter project name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Project Description:</Form.Label>
            <Form.Control
              placeholder="Enter project description"
              id="description"
              onChange={(e) => handleDescriptionChange(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Project Objectives:</Form.Label>
            <Form.Control
              placeholder="Enter project objectives"
              id="objectives"
              onChange={(e) => handleObjectiveChange(e.target.value)}
            />
          </Form.Group>
          {/*----------------------File upload part----------------------- */}
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Upload:</Form.Label>
            <Form.Control type="file" size="sm" style={{ width: "250px" }} />
          </Form.Group>
        </div>

        {/* -----------Develpment team info---------- has a validation */}

        <div className="Section">
          <h3 className="SectionHeading">Development Team Information</h3>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Project Manager Name:</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter project manager name"
                  id="projectManagerName"
                  //onChange={(e) => handlePManagerNameChange(e.target.value)}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please project manager name.
                </Form.Control.Feedback>
              </InputGroup>
              <br />
              <Form.Group as={Col}>
                <Form.Label>Project Team Name:</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter project team name"
                    id="projectTeamName"
                    onChange={(e) => handleTeamNameChange(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please enter team name.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <br />

              <Button onClick={handleAddDevelopers}>Add Developers</Button>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Project Manager ID</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter project manager ID"
                  id="projectManagerID"
                  onChange={(e) => handlePManagerIDChange(e.target.value)}
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
            <Form.Group as={Col}>
              <Form.Label>Client Name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter client name"
                  id="clientName"
                  // onChange={(e) => handleClientNameChange(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter client name.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Client ID</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter client ID"
                  id="clientID"
                  onChange={(e) => handleClientIDChange(e.target.value)}
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
            <Form.Group as={Col}>
              <Form.Label>Start Date</Form.Label>

              <TextField
                style={{backgroundColor: "whitesmoke", borderRadius: "10px"}}
                margin="dense"
                id="last_updated"
                type="date"
                fullWidth
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Due Date</Form.Label>

              <TextField
                style={{backgroundColor: "whitesmoke", borderRadius: "10px"}}
                margin="dense"
                id="last_updated"
                type="date"
                fullWidth
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              {/* <DatePicker
                type="date"
                
                className="datepicker"
                selected={selectedDueDate}
                onChange={handleDueDateChange}
                dateFormat="YYYY-MM-DD"
                // You can customize the date format and other options
              /> */}

              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={['DateTimePicker', 'DateTimePicker', 'DateTimePicker']}
      >
        
        <DateTimePicker name="startDateTime" onChange={handleDueDateChange} dateFormat=""/>
      </DemoContainer>
    </LocalizationProvider> */}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Time Estimation</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter time estimation"
                  id="timeDuration"
                  onChange={(e) => handleDurationChange(e.target.value)}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please enter time duration.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Project Time Line</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              id="timeline"
              onChange={(e) => handleTimelineChange(e.target.value)}
            />
          </Form.Group>

          {/*----------------------File upload part----------------------- */}
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Upload</Form.Label>
            <Form.Control type="file" size="sm" style={{ width: "250px" }} />
          </Form.Group>
        </div>

        <div className="Section">
          <Form.Group className="mb-3">
            <Form.Label>Budget Allocation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter budget allocation"
              id="budgetAllocation"
              onChange={(e) => handleBudgetChange(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Technologies</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter technologies"
              id="technologies"
              onChange={(e) => handleTechnologyChange(e.target.value)}
            />
          </Form.Group>

          {/*----------------------File upload part----------------------- */}
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Upload</Form.Label>
            <Form.Control type="file" size="sm" style={{ width: "250px" }} />
          </Form.Group>
        </div>

        {/* -------------------------Legal and complaince------------ */}
        <div className="Section">
          <Row className="mb-3">
            <h3 className="SectionHeading">Legal & Complaince</h3>
            {/*----------------------File upload part----------------------- */}
            <Form.Group as={Col} controlId="formFileSm" className="mb-3">
              <Form.Label>Client Sign-off</Form.Label>
              <Form.Control type="file" size="sm" style={{ width: "250px" }} />
            </Form.Group>

            {/*----------------------File upload part----------------------- */}
            <Form.Group as={Col} controlId="formFileSm" className="mb-3">
              <Form.Label>Contractual Agreement</Form.Label>
              <Form.Control type="file" size="sm" style={{ width: "250px" }} />
            </Form.Group>
          </Row>
        </div>

        {/* -------------------------Resource upload------------ */}
        <div className="Section">
          {/*----------------------File upload part----------------------- */}
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Other Resources</Form.Label>
            <Form.Control
              type="file"
              multiple
              style={{ width: "250px" }}
            />{" "}
            {/* Multiple file upload */}
          </Form.Group>
        </div>

        <Button type="submit">Submit form</Button>
      </Form>
    </>
  );
}
