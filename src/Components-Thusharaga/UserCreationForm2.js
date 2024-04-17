import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './styles/UserCreationForm.css'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from 'react-router-dom';

export default function UserCreationForm() {
  const [userCategory, setUserCategory] = useState('');
  const [selectedJobs, setSelectedJobs] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check form validity whenever any field changes
    console.log('Form validity:', isFormValid);
    setIsFormValid(
      userCategory !== '' &&
      selectedJobs !== ''     
    );
  }, [userCategory, selectedJobs]);

  
  const handleJobChange = (e) => {
    const job = e.target.value;
    setSelectedJobs(selectedJobs => {
      if (selectedJobs.includes(job)) {
        return selectedJobs.filter(item => item !== job);
      } else {
        return [...selectedJobs, job];
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const data = {
      CategoryName: userCategory,
      RoleName: selectedJobs
    };

    const url = 'https://localhost:7187/api/User_Management/register'; // Add your URL here
    axios.post(url, data)
      .then((result) => {
          clear();
          const dt= result.data;
          alert(dt.statusMessage);
      })
      .catch((error) => {
        console.log(error);
      });

      const clear= ()=>{
        setUserCategory('');
        setSelectedJobs('');
      }
  }

  return (
    <div className="content">
      <div className="form_group">
        <div> 
          <h3>User Creation: Job Information</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formGridUserCategory">
            <Form.Label>User Category:</Form.Label>
            <Form.Check
              type="radio"
              label="Admin"
              name="userCategory"
              value="Option 1"
              onChange={(e) => setUserCategory(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="2nd level user"
              name="userCategory"
              value="Option 2"
              onChange={(e) => setUserCategory(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="3rd level user"
              name="userCategory"
              value="Option 3"
              onChange={(e) => setUserCategory(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Client"
              name="userCategory"
              value="Option 4"
              onChange={(e) => setUserCategory(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formGridJobOptions">
            <Form.Label>Job Roles:</Form.Label>
            <Form.Check
              type="checkbox"
              label="Client"
              value="Job 1"
              onChange={handleJobChange}
            />
            <Form.Check
              type="checkbox"
              label="Software Engineer"
              value="Job 2"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="UI/UX Designer"
              value="Job 3"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="System Analyst"
              value="Job 4"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="Network Engineer"
              value="Job 5"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="Database Administrator"
              value="Job 6"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="IT Project Manager"
              value="Job 7"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="Quality Assurance"
              value="Job 8"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="Software Engineer"
              value="Job 9"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="Data Scientist"
              value="Job 10"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="Cloud Engineer"
              value="Job 11"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="Data Quality Manager"
              value="Job 12"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="Cloud Architect"
              value="Job 13"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="Programmer"
              value="Job 14"
              onChange={handleJobChange}
            />
             <Form.Check
              type="checkbox"
              label="Web Developer"
              value="Job 15"
              onChange={handleJobChange}
            />
          </Form.Group>


          <Row className="mb-10">
            <Col>
            <Link to='/usercreation1'>
              <Button variant="secondary" type="back" id="resetButton">
                Back
              </Button>
              </Link>
            </Col>

            <Col>
              <Link to='/userCreation2/success'>
              <Button variant="primary" type="submit" id="submitButton" disabled={!isFormValid}>
                Submit
              </Button>
              </Link>
            </Col>

          </Row>
        </Form>
      </div>
    </div>
  );
}
