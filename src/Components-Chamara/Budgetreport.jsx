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
import { Link } from "react-router-dom";


export default function ProjectCreationForm() {

 

  const [projectData, setProjectData] = useState([]);
  const [selectedProject, setselectedProject]= useState();
  const [budgetdata,setBudgetData]=useState([]);

  

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, price };
}


const handleProjectChange = async(event) => {
  const selectedProjectId = event.target.value;
  setselectedProject(selectedProjectId);
  try{
    const bresponse= await axios.get(`https://localhost:44377/api/Budget/${selectedProjectId}`);// replace with original link
    setBudgetData(bresponse.data);
  }catch(error){
    console.log("Error while fetching data",error);
  }
  
};
const rows = [
  createRow('Selection Process Cost', 1, parseFloat(budgetdata.SelectionprosessCost||0 )),
  createRow('License Cost', 1, parseFloat(budgetdata.LicenseCost || 0)),
  createRow('Servers Cost', 1, parseFloat(budgetdata.ServersCost || 0)),
  createRow('Hardware Cost', 1, parseFloat(budgetdata.HardwareCost || 0)),
  createRow('Connection Cost', 1, parseFloat(budgetdata.ConnectionCost || 0)),
  createRow('Developer Cost', 1, parseFloat(budgetdata.DeveloperCost || 0)),
  createRow('Other Expenses', 1, parseFloat(budgetdata.OtherExpenses || 0)),
  createRow('Total', 1, parseFloat(budgetdata.Total || 0))
];
  
  useEffect(() => {
    fetchData();
  },[]);



  const fetchData = async ()=>{                    //get project names
   try{
    const response= await  axios.get ('https://localhost:44377/api/Budget');
    setProjectData(response.data);//Add data
   }
   catch (error) {
    console.error('Error fetching data:', error);
  }
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


                  
        
      </Form>
      <div>
      <div className="budgetpdf">  {/*Budget Pdf form*/ }
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={3}>
                {budgetdata.description}
              </TableCell>
              <TableCell align="left">Date: {budgetdata.date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Expense</TableCell>
              <TableCell colSpan={4}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="left" colSpan={4}>{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    <div className="btn12">
    <Row>
        
        <Form.Group className="print-btn" controlId="formGridAddress1">
          <Button variant="primary" type="submit" id="Print" >
            Print
          </Button>
        </Form.Group>
        <Link to={`/budgetformedit`}>
        <Form.Group className="submit-btn" controlId="formGridAddress1">
        <Button variant="primary" type="button" id="usubmit" >
          Edit
        </Button>
        </Form.Group>
       
        </Link>
        </Row>
        
           
    </div>
      </div>
     
    </div>
  );
}
