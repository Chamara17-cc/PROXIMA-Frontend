import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./BudgetreportStyle.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
//import BudgetEstForm from './BudgetEstForm'
import jsPDF from "jspdf";
import 'jspdf-autotable';
import { useNavigate } from "react-router-dom";
import Budgettable from "./Budgettable";
import Budgetedit from "./Budgetedit";


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
      const response = await axios.get(`https://localhost:44339/api/Budget/register`);
      console.log("Projects:", response.data); 
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const fetchBudgetData = async (projectid) => {
    try {
      const response = await axios.get(`https://localhost:44339/api/Budget/register/Projects/${projectid}`);
      console.log("Budget data:", response.data);
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

  const downloadPDF=()=>{
    const doc=new jsPDF();
    doc.autoTable({
      html:'#budgetTable',
      theme:'grid',
      styles: {fontSize:10},
      headStyles: { fillColor: [22, 160, 133] }
    })
    doc.save('budget.pdf');
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
      {budgetData.length>0 &&(
        <div className="budgetPDF">
          <Budgettable budgetData={budgetData} />
        </div>
      )}
    <div className="btn12">
    <Row>
        
        <Form.Group className="print-btn" controlId="formGridAddress1">
          <Button variant="primary" type="submit" id="Print" onClick={downloadPDF} >
            Print
          </Button>
        </Form.Group>
        <div className="edit_or_create">
          {budgetData.length >0 ?(
                   <Form.Group className="submit-btn" controlId="formGridAddress1">
                     <Budgetedit projectId={selectedProject} budgetData={budgetData}/>
                   </Form.Group>
          ):
          (
                   <Form.Group className="submit-btn" controlId="formGridAddress1">
                   <Button variant="primary" type="button" id="usubmit"  onClick={gotoEditpage}>
                     Create
                   </Button>
                   </Form.Group>
          )}
 
        </div>

        </Row>
        
           
    </div>
      </div>
     
    </div>
  );
}