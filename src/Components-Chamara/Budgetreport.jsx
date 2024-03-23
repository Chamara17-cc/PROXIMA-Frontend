import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./BudgetreportStyle.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import BudgetEstForm from './BudgetEstForm'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import jsPDF from "jspdf";
import 'jspdf-autotable';


export default function ProjectCreationForm() {

 

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

  const [budgetData, setBudgetData] = useState({             //Get submited budget data in to fornt end
    selectionprosessCost: '',             
    serversCost: '',
    hardwareCost: '',
    connectionCost: '',
    developerCost: '',
    otherExpenses: '',
    licenseCost: '',
    totalValue: '',
    date: dayjs().toISOString().split('T')[0]
  });
//Table
function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, price };
}

const subtotal = (items) => {
  return items.map(({ qty, unit }) => priceRow(qty, unit)).reduce((sum, i) => sum + i, 0);
};


  const rows = [
    createRow('Selection Process Cost', 1, parseFloat(selectionprosessCost||0 )),
    createRow('License Cost', 1, parseFloat(licenseCost || 0)),
    createRow('Servers Cost', 1, parseFloat(serversCost || 0)),
    createRow('Hardware Cost', 1, parseFloat(hardwareCost || 0)),
    createRow('Connection Cost', 1, parseFloat(connectionCost || 0)),
    createRow('Developer Cost', 1, parseFloat(developerCost || 0)),
    createRow('Other Expenses', 1, parseFloat(otherExpenses || 0))
  ];

  const invoiceSubtotal = subtotal(rows);
  const invoiceTotal = invoiceSubtotal;
//End

const getbudgetdata =(projectId)=>{                //endpoint for fetch budget data 
  axios.get(`https://localhost:44339/api/Budget/${projectId}/budget-report`)
  .then(response=>{
    setBudgetData(response.data);
  })
  .catch(error => {
    console.error('Error fetching budget report:', error);
  });

  }



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



  const fetchData = async ()=>{
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
  const handlePrint = () => {
    const doc = new jsPDF();
    doc.text(description, 10, 10);
    doc.setFontSize(12);
    doc.text('Project_Name: ' + selectedProject, 10, 12);
    doc.text('Created Date :'+ date ,10,12);
    // Title    
    doc.autoTable({
      head: [['Expense', 'Amount']],
      body: rows.map(row => [row.desc, row.price]),
    });
    doc.save('budget_report.pdf');
  };

  return (
    <div>
     
      <div className="Pagename">
        <p>Budget Estimation Report : {selectedProject}</p>
      </div>
      
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
          <Button variant="primary" type="submit" id="Print" onClick={handlePrint}>
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
      <div>
      <div className="budgetpdf">  {/*Budget Pdf form*/ }
      <TableContainer component={Paper}>
  <Table sx={{ minWidth: 700 }} aria-label="spanning table">
    <TableHead>
      <TableRow>
        <TableCell align="left" colSpan={2}>
          {selectedProject}
        </TableCell>
        <TableCell align="left">Date: {date}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Expense</TableCell>
        <TableCell align="right">Amount</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.desc}>
          <TableCell>{row.desc}</TableCell>
          <TableCell align="right">{ccyFormat(row.price)}</TableCell>
        </TableRow>
      ))}
      <TableRow>
        <TableCell colSpan={1}>Subtotal</TableCell>
        <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={1}>Total</TableCell>
        <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>

    </div>
      </div>
     
    </div>
  );
      
      }