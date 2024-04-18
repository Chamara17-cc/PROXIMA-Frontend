import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./BudgetreportStyle.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
//import BudgetEstForm from './BudgetEstForm'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";


export default function ProjectCreationForm() {

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [budgetData, setBudgetData] = useState([]);
  
  const navigate= useNavigate();
  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedProject) {
      fetchBudgetData(selectedProject);
    }
  }, [selectedProject]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`https://localhost:44377/api/Budget`);
      console.log("Projects:", response.data); // Debugging: log fetched projects
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const fetchBudgetData = async (projectid) => {
    try {
      const response = await axios.get(`https://localhost:44377/api/Budget/Projects/${projectid}`);
      console.log("Budget data:", response.data); // Debugging: log fetched budget data
      setBudgetData(response.data);
    } catch (error) {
      console.error("Error fetching budget data:", error);
    }
  };

  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };

  const gotoEditpage = (projectid)=>{
    navigate('/budgetformedit', { state:  {projectId  : selectedProject  }});
  }

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
                        <option value="">Select project here...</option>
                        {projects.map(project => (
                       <option key={project.projectId} value={project.projectId}>{project.projectName}</option>
                       ))}
                        </select>
            </Form.Label>
          </Form.Group>
        </Row>
      </Form>
     
      <div>
      {Object.keys(budgetData).length > 0 && (
      <div className="budgetpdf">  {/*Budget Pdf form*/ }
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="left" colSpan={3}>
                  {budgetData.description}
                </TableCell>
                <TableCell align="left">Date: {budgetData.date}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Expense</TableCell>
                <TableCell colSpan={4}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {budgetData.map((item,index) => (
                <><TableRow key={index}>
                  <TableCell>Selection Process Cost</TableCell>
                  <TableCell align="left" colSpan={4}>{item.selectionprocessCost}</TableCell>
                </TableRow><TableRow key={index}>
                    <TableCell>License Cost</TableCell>
                    <TableCell align="left" colSpan={4}>{item.licenseCost}</TableCell>
                  </TableRow>
                  <TableRow key={index}>
                  <TableCell>Server Cost</TableCell>
                  <TableCell align="left" colSpan={4}>{item.serversCost}</TableCell>
                </TableRow>
                <TableRow key={index}>
                  <TableCell>Hardware Cost</TableCell>
                  <TableCell align="left" colSpan={4}>{item.hardwareCost}</TableCell>
                </TableRow>
                <TableRow key={index}>
                  <TableCell>Connection Cost</TableCell>
                  <TableCell align="left" colSpan={4}>{item.connectionCost}</TableCell>
                </TableRow>
                <TableRow key={index}>
                  <TableCell>Developer Cost</TableCell>
                  <TableCell align="left" colSpan={4}>{item.developerCost}</TableCell>
                </TableRow>
                <TableRow key={index}>
                  <TableCell>Other Expenses</TableCell>
                  <TableCell align="left" colSpan={4}>{item.otherExpenses}</TableCell>
                </TableRow>
                <TableRow key={index}>
                  <TableCell>Total Cost</TableCell>
                  <TableCell align="left" colSpan={4}>{item.totalCost}</TableCell>
                </TableRow>
                </>
                
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )}
    <div className="btn12">
    <Row>
        
        <Form.Group className="print-btn" controlId="formGridAddress1">
          <Button variant="primary" type="submit" id="Print" >
            Print
          </Button>
        </Form.Group>
        
        <Form.Group className="submit-btn" controlId="formGridAddress1">
        <Button variant="primary" type="button" id="usubmit"  onClick={gotoEditpage}>
          Edit
        </Button>
        </Form.Group>
        </Row>
        
           
    </div>
      </div>
     
    </div>
  );
}