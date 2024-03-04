import React, { useState } from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import './UserCreationForm.css'
import { Link } from 'react-router-dom';
import './UserCreationForm2.js'

export default function UserCreationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [nic, setNIC] = useState('');
  const [dob, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const data = {
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      address: address,
      NIC: nic,
      dateOfBirth: dob,
      gender: gender,
      mobileNumber: mobileNumber,
      email: email,
      profilePhoto: profilePhoto
    };

    const url = ''; // Add your URL here
    axios.post(url, data)
      .then((result) => alert('Data inserted'))
      .catch((error) => alert(error));
  }

  return (
    <div className="content">
      <div className="form_group">
        <div> 
          <h3>User Creation : Personal Information</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-10">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" onChange={(e) => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-10" controlId="formGridFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter full name" onChange={(e) => setFullName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-10" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address of user" onChange={(e) => setAddress(e.target.value)} />
          </Form.Group>

          <Row className="mb-10">
            <Form.Group as={Col} controlId="formGridNIC">
              <Form.Label>NIC</Form.Label>
              <Form.Control type="text" placeholder="Enter NIC" onChange={(e) => setNIC(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" onChange={(e) => setDOB(e.target.value)} />
            </Form.Group>
          </Row>

          <Row className="mb-10">
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" onChange={(e) => setGender(e.target.value)}>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" placeholder="Enter mobile number" onChange={(e) => setMobileNumber(e.target.value)} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-10" controlId="formGridEmail">
            <Form.Label>Email ID</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-10" controlId="formGridProfilePhoto">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control type="file" onChange={(e) => setProfilePhoto(e.target.files[0])} />
          </Form.Group>

          <Row className="mb-10">
            <Col>
              <Button variant="primary" type="cancel" id="submitButton">
                Cancel
              </Button>
            </Col>

            <Col>
            <Link to="2">
              <Button variant="secondary" type="next" id="resetButton">
                Next
              </Button>
            </Link>
            </Col>

          </Row>
        </Form>
      </div>
    </div>
  );
}
