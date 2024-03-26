import React from 'react'
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState,useEffect } from 'react';

function BudgetFormEdit() {
    const [projectData, setProjectData] = useState([]);
  const [selectedProject, setselectedProject]= useState();
  const [description , setDescription] = useState('');
  const [selectionprosessCost , setSelectionProcessCost] = useState('');
  const [serversCost , setServersCost] = useState('');
  const [hardwareCost, setHardwareCost] = useState('');
  const [connectionCost , setConnectionCost] = useState('');
  const [developerCost , setDeveloperCost] = useState('');
  const [otherExpenses , setOtherExpenses] = useState('');
  const [licenseCost , setLicenseCost] = useState('');
  const [totalValue ,   setTotalValue] = useState('');
  const [date ,setDate] = useState('')
  const handleProjectChange = (event) => {
    setselectedProject(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }
  
  const handleSelectionprocessCostChange = (event) => {
    setSelectionProcessCost(event.target.value);
  }
  
  const handleLicenseCostChange = (event) => {
    setLicenseCost(event.target.value);
  }
  
  const handleServersCostChange = (event) => {
    setServersCost(event.target.value);
  }
  
  const handleHardwareCostChange = (event) => {
    setHardwareCost(event.target.value);
  }
  
  const handleConnectionCostChange = (event) => {
    setConnectionCost(event.target.value);
  }
  
  const handleDeveloperCostChange = (event) => {
    setDeveloperCost(event.target.value);
  }
  
  const handleOtherExpensesChange = (event) => {
    setOtherExpenses(event.target.value);
  }
  const handleDateChange = (event) => {
    setDate(event.target.value);
  }
  const currentDate = new Date().toISOString().split('T')[0];

  
  useEffect(() => {
    fetchData();
  },[]);

  useEffect(() => {
    const budgetdata=[
      selectionprosessCost,
      serversCost,
      hardwareCost,
      connectionCost,
      developerCost,
      otherExpenses,
      licenseCost
      ];
  
    const total = budgetdata.reduce((acc, currentValue) => acc + parseFloat(currentValue || 0), 0);
    setTotalValue(total);
}, [connectionCost, developerCost, hardwareCost, licenseCost, otherExpenses, selectionprosessCost, serversCost]);



  const fetchData = async ()=>{                    //get project names
   try{
    const response= await  axios.get ('https://localhost:44377/api/Budget');
    setProjectData(response.data);//Add data
   }
   catch (error) {
    console.error('Error fetching data:', error);
  }
};

  
  const handleSubmit = () => {
    const budgetdata = {
     
      Objectives: description,
      SelectionprocessCost: selectionprosessCost,
      LicenseCost: licenseCost,
      ServersCost: serversCost,
      HardwareCost: hardwareCost,
      ConnectionCost: connectionCost,
      DeveloperCost: developerCost,
      OtherExpenses: otherExpenses,
      TotalCost:totalValue,
      Date :date
    };

    const url = 'https://localhost:44377/api/Budget';
    axios.post(url, budgetdata).then((result) =>
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
            <Form.Label>
              
                  <select id="SelectProject" className="Projectlist" value={selectedProject} onChange={handleProjectChange}>
                  <option value="Select project first">Select project here... </option>
                  {projectData.map((budget,index)=>(
                   <option key={index} value={budget.projectName}>{budget.projectName}</option>
                  ))}   
                   </select>
              
            </Form.Label>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Budget Description</Form.Label>
            <Form.Control placeholder="Enter budget description" onChange={handleDescriptionChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Selection Process Cost</Form.Label>
            <Form.Control placeholder="Enter budget selection process cost" onChange={handleSelectionprocessCostChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>LicenseCost</Form.Label>
            <Form.Control placeholder="Enter budget licenseCost" onChange={handleLicenseCostChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Servers Cost</Form.Label>
            <Form.Control placeholder="Enter budget server cost" onChange={handleServersCostChange} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Hardware Cost</Form.Label>
            <Form.Control placeholder="Enter budget Hardware Cost" onChange={handleHardwareCostChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Connection Cost</Form.Label>
            <Form.Control placeholder="Enter budget Connection Cost" onChange={handleConnectionCostChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Developer Cost</Form.Label>
            <Form.Control placeholder="Enter budget Developer Cost" onChange={handleDeveloperCostChange} />
          </Form.Group>
        </Row>

        <Row className="Other">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Other Expenses</Form.Label>
            <Form.Control placeholder="Enter budget Other Expenses" onChange={handleOtherExpensesChange} />
          </Form.Group>
        </Row>
        <Row className="Datepicker"           onChange={handleDateChange}>
        <LocalizationProvider  dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker']}>
        <DatePicker className="datepicker"
          defaultValue={dayjs('2022-04-17')}
          views={['year', 'month', 'day']}
          max={currentDate}
        />
      </DemoContainer>
    </LocalizationProvider>
        </Row>
       

        <Row className="Total" >
        <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Total Estimation</Form.Label>
            <Form.Control value={totalValue} />
          </Form.Group>
         
        </Row>
        
       
        {/*<Row className="pdfform"><BudgetEstForm selectedProject={selectedProject} 
        selectionprosessCost={selectionprosessCost}  
        licenseCost={licenseCost}
        serversCost={serversCost}
        hardwareCost={hardwareCost}
        connectionCost={connectionCost}
        developerCost={developerCost}
        otherExpenses={otherExpenses}
        date={date}
        /></Row>*/}

                  <Row>
        
        <Form.Group className="print-btn" controlId="formGridAddress1">
          <Button variant="primary" type="submit" id="Print" >
            Print
          </Button>
        </Form.Group>

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