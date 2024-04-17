import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import './styles/UserCreationForm.css'
import { Link } from 'react-router-dom';
import './UserCreationForm2.js'

export default function UserCreationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [nic, setNIC] = useState('');
  const [dob, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [profilePhoto, setProfilePicture] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check form validity whenever any field changes
    console.log('Form validity:', isFormValid);
    setIsFormValid(
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      userName !== '' &&
      address.trim() !== '' &&
      nic.trim() !== '' &&
      dob !== '' &&
      gender !== '' &&
      mobileNumber.trim() !== '' &&
      email !== '' &&
      profilePhoto
    
    );
  }, [firstName, lastName, userName, address, nic, dob, gender, mobileNumber, email, profilePhoto]);

  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!isFormValid) {
      alert("Please fill in all fields");
      return;
    }

    const data = {
      FirstName: firstName,
      LastName: lastName,
      UserName: userName,
      Address: address,
      NIC: nic,
      DOB: dob,
      Gender: gender,
      ContactNumber: mobileNumber,
      Email: email,
      ProfilePicture: profilePhoto
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
  }

  const clear= ()=>{
    setFirstName('');
    setLastName('');
    setUserName('');
    setAddress('');
    setContactNumber('');
    setDOB('');
    setEmail('');
    setGender('');
    setNIC('');
    setProfilePicture(null);
  }

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
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
              <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-10" controlId="formGridUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter user name" value={userName} onChange={(e) => setUserName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-10" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address of user" value={address} onChange={(e) => setAddress(e.target.value)} />
          </Form.Group>

          <Row className="mb-10">
            <Form.Group as={Col} controlId="formGridNIC">
              <Form.Label>NIC</Form.Label>
              <Form.Control type="text" placeholder="Enter NIC" value={nic} onChange={(e) => setNIC(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" value={dob} onChange={(e) => setDOB(e.target.value)} />
            </Form.Group>
          </Row>

          <Row className="mb-10">
            <Form.Group as={Col} controlId="formGridGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control type="text" placeholder="Enter mobile number" value={mobileNumber} onChange={(e) => setContactNumber(e.target.value)} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-10" controlId="formGridEmail">
            <Form.Label>Email ID</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

         <Form.Group className="mb-10" controlId="formGridProfilePhoto">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>


          <Row className="mb-10">
          
            <Col>
            <Link to='/'>
              <Button variant="primary" type="cancel" id="resetButton" >
                Cancel
              </Button>
              </Link>
            </Col>
            
            <Col>
              <Link to='/usercreation2'>
              <Button variant="secondary" type="next" id="submitButton" disabled={!isFormValid}>
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
