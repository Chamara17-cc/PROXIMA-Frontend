import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Col, Form, Row, InputGroup } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function BudgetFormEdit() {
  const [description, setDescription] = useState('');
  const [selectionProcessCost, setSelectionProcessCost] = useState('');
  const [serversCost, setServersCost] = useState('');
  const [hardwareCost, setHardwareCost] = useState('');
  const [connectionCost, setConnectionCost] = useState('');
  const [developerCost, setDeveloperCost] = useState('');
  const [otherExpenses, setOtherExpenses] = useState('');
  const [licenseCost, setLicenseCost] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [date, setDate] = useState('');
  const [validated, setValidated] = useState(false);

  const location = useLocation();
  const projectId = location.state.projectId;

  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleSelectionprocessCostChange = (event) => setSelectionProcessCost(event.target.value);
  const handleLicenseCostChange = (event) => setLicenseCost(event.target.value);
  const handleServersCostChange = (event) => setServersCost(event.target.value);
  const handleHardwareCostChange = (event) => setHardwareCost(event.target.value);
  const handleConnectionCostChange = (event) => setConnectionCost(event.target.value);
  const handleDeveloperCostChange = (event) => setDeveloperCost(event.target.value);
  const handleOtherExpensesChange = (event) => setOtherExpenses(event.target.value);

  useEffect(() => {
    const budgetdata = [
      selectionProcessCost,
      serversCost,
      hardwareCost,
      connectionCost,
      developerCost,
      otherExpenses,
      licenseCost
    ];

    const total = budgetdata.reduce((acc, currentValue) => acc + parseFloat(currentValue || 0), 0);
    setTotalValue(total);
  }, [selectionProcessCost, serversCost, hardwareCost, connectionCost, developerCost, otherExpenses, licenseCost]);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      alert("Input the required fields");
    } else {
      event.preventDefault(); // Prevent default form submission

      const budgetdata = {
        Objectives: description,
        SelectionprocessCost: selectionProcessCost,
        LicenseCost: licenseCost,
        ServersCost: serversCost,
        HardwareCost: hardwareCost,
        ConnectionCost: connectionCost,
        DeveloperCost: developerCost,
        OtherExpenses: otherExpenses,
        TotalCost: totalValue,
        Date: date
      };

      const url = `https://localhost:44339/api/Budget/Projects/${projectId}`;

      try {
        const response = await axios.post(url, budgetdata);
        alert('Data inserted');
      } catch (error) {
        alert('Error occurred: ' + error);
      }
    }

    setValidated(true); // Always set validated to true after attempting validation
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Budget Description</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="text"
                placeholder="Enter budget description"
                onChange={handleDescriptionChange}
                style={{ fontSize: "16px" }}
                autoComplete="off"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter budget description.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Selection Process Cost</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="number"
                placeholder="Enter selection process cost"
                onChange={handleSelectionprocessCostChange}
                style={{ fontSize: "16px" }}
                autoComplete="off"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter selection process cost.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>License Cost</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="number"
                placeholder="Enter license cost"
                onChange={handleLicenseCostChange}
                style={{ fontSize: "16px" }}
                autoComplete="off"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter license cost.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Servers Cost</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="number"
                placeholder="Enter servers cost"
                onChange={handleServersCostChange}
                style={{ fontSize: "16px" }}
                autoComplete="off"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter servers cost.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Hardware Cost</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="number"
                placeholder="Enter hardware cost"
                onChange={handleHardwareCostChange}
                style={{ fontSize: "16px" }}
                autoComplete="off"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter hardware cost.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Connection Cost</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="number"
                placeholder="Enter connection cost"
                onChange={handleConnectionCostChange}
                style={{ fontSize: "16px" }}
                autoComplete="off"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter connection cost.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Developer Cost</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="number"
                placeholder="Enter developer cost"
                onChange={handleDeveloperCostChange}
                style={{ fontSize: "16px" }}
                autoComplete="off"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter developer cost.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="Other">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Other Expenses</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                required
                type="number"
                placeholder="Enter other expenses"
                onChange={handleOtherExpensesChange}
                style={{ fontSize: "16px" }}
                autoComplete="off"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please enter other expenses.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="Datepicker">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Date</Form.Label>
            <TextField
              required
              margin="dense"
              id="last_updated"
              type="date"
              fullWidth
              value={date}
              onChange={(e) => setDate(e.target.value)}
              inputProps={{
                style: {
                  height: "40px",
                  paddingTop: "5px",
                  paddingBottom: "0px",
                }
              }}
              style={{ backgroundColor: "white", width: "220px", marginTop: "10px", marginLeft: "15px" }}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please select a date.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="Total" >
        <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Total Estimation</Form.Label>
            <Form.Control value={totalValue} 
            style={{ fontSize: "16px" }} autoComplete="off"/>
          </Form.Group>
         
        </Row>

        <Row>
        <Link to={'/budget'}> 
        <Form.Group className="print-btn" controlId="formGridAddress1">
          <Button variant="primary" type="submit" id="Print" >
            Report
          </Button>
        </Form.Group></Link>
        

        <Form.Group className="submit-btn" controlId="formGridAddress1">
        <Button variant="primary" type="button" id="usubmit" onClick={handleSubmit}>
          Submit
        </Button>
        </Form.Group>
        </Row>
           
        
      </Form>
    </div>
  )
}

export default BudgetFormEdit