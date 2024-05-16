import React, { useState } from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import './styles/UserCreationForm.css'
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
  //const [profilePhoto, setProfilePicture] = useState(null);
  const [userCategory, setUserCategory] = useState('');
  const [jobRole, setSelectedJob] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false); 
  const navigate = useNavigate();

  //const [errorMessage, setErrorMessage] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setFormSubmitted(true);
   
    if (!validateForm()) {
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
      //ProfilePictureLink: profilePhoto,
      UserCategoryType: userCategory,
      JobRoleType: jobRole
    };

    const url = 'https://localhost:7121/api/User/register'; 
    axios.post(url, data)
    .then((result) => {
    clear();
    alert(result.data.message); // Display the success message
    navigate('/userCreationSuccess');
  })
  .catch((error) => {
    if (error.response && error.response.data && error.response.data.message) {
      alert(error.response.data.message);
    } else {
      alert("An error occurred. Please try again later.");
    }
    console.log(error);
  });


  }

  const clear = () => {
    setFirstName('');
    setLastName('');
    setUserName('');
    setAddress('');
    setContactNumber('');
    setDOB('');
    setEmail('');
    setGender('');
    setNIC('');
   // setProfilePicture(null);
    setUserCategory('');
    setSelectedJob([]);
    setFormErrors({});
  }

  // const handleFileChange = (e) => {
  //   setProfilePicture(e.target.files[0]);
  // }

  const validateForm = () => {
    const errors = {};
    let isValid = true;
    // Validate NIC
    if (nic.length !== 12) {
      errors.nic = 'NIC must have 12 digits';
    }

    // Validate email
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      errors.email = 'Email must be in the format "example@gmail.com"';
    }

    // Check if any field is empty
    if (!firstName|| !lastName || !userName || !address || !nic || !dob || !gender || !mobileNumber || !email ||  !userCategory || jobRole.length === 0) {
      errors.required = 'All fields are required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  }

  return (
    <div className="content">
      <div className="form_group">
        <div> 
          <h3>User Creation form </h3>
        </div>
        <Form >
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
              {formErrors.nic && <span className="error" style={{ color: 'red', fontSize: 'small' }}>{formErrors.nic}</span>}
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
            {formErrors.email && <span className="error" style={{ color: 'red', fontSize: 'small' }}>{formErrors.email}</span>}
          </Form.Group>

         {/* <Form.Group className="mb-10" controlId="formGridProfilePhoto">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group> */}
          
          <Row className="mb-10">
            <Form.Group as={Col} controlId="formGridUserCategory">
              <Form.Label>UserCategory</Form.Label>
              <Form.Control as="select" value={userCategory} onChange={(e) => setUserCategory(e.target.value)}>
                <option>Select User Category Type</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>Developer</option>
                <option>Client</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridJobOptions">
              <Form.Label>JobRole</Form.Label>
              <Form.Control as="select" value={jobRole} onChange={(e) => setSelectedJob(e.target.value)}>
                <option>Select Job Role</option>
                <option>Client</option>
                <option>Software Engineer</option>
                <option>UI/UX Designer</option>
                <option>Network Engineer</option>
                <option>Database Administrator</option>
                <option>Quality Assurance</option>
                <option>Data Scientist</option>
                <option>Cloud Engineer</option>
                <option>Programmer</option>
                <option>Web Developer</option>
                <option>System Analyst</option>
                <option>Cloud Architect</option>
                <option>Data Quality Manager</option>
              </Form.Control>
            </Form.Group>
          </Row>

          {formSubmitted && Object.keys(formErrors).length > 0 && (
            <div className="alert alert-danger" style={{ color: "red" }}>
              Please fill all fields.
            </div>
          )}

          <Row className="mb-10">          
            <Col>
              <Button variant="primary" onClick={clear} id="resetButton" >
                Clear
              </Button>
            </Col>
            
            <Col>
              <Button variant="secondary" type="submit" onClick={handleSubmit} id="submitButton">
                Submit
              </Button>
            </Col>

          </Row>
        </Form>
      </div>
    </div>
  );
}
