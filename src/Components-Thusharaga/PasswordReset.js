import React, { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/UserCreationForm.css';

function PasswordReset() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your password validation logic goes here
    if (newPassword.length >= 8 && newPassword === confirmPassword) {
      // Password is valid
      setShowAlert(true); // Display success message
      // Additional logic for resetting password
    } else {
      // Password is not valid
      alert('Password must be at least 8 characters long and match the confirmation.');
    }
  };

  return (
    <div className="content">
      <div className="form_group">
      
        <div>
          <h3>Reset Password</h3>
        </div>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-10" controlId="formGridOldPassword">
            <Form.Label>Old Password :</Form.Label>
            <Form.Control type="password" placeholder="Enter Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
          </Form.Group>

          <Row className="mb-10">
            <Form.Group as={Col} controlId="formGridNewPassword">
              <Form.Label>New password :</Form.Label>
              <Form.Control type="password" placeholder="Enter New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridConfirmPassword">
              <Form.Label>Confirm Password :</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>
          </Row>

          <Row className="mb-10">
            <Col>
              <Link to='/'>
                <Button variant="primary" type="cancel" id="resetButton" >
                  Cancel
                </Button>
              </Link>
            </Col>

            <Col>
              <Button variant="secondary" type="submit" id="submitButton">
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
        <br/> 
        {showAlert &&
          <Alert variant="success">
            Password reset successfully!
          </Alert>
        }
        
      </div>
    </div>
  )
}

export default PasswordReset;
