import React, { useEffect ,useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import "./Invoicestyles.css";
import InvoiceEdit from './InvoiceEdit';


function Invoice(props) {
    const {projectId}=props;
    const[transacdata,setTransacdata]=useState([]);
    useEffect(()=>{
      if(projectId){
        fetchTransaction(projectId);
      }
    },[projectId]);

   const fetchTransaction= async (projectId)=>{
    try{
        const response= await axios.get(`https://localhost:44339/api/Transaction/Projects/${projectId}`)
        console.log("Transacdara",JSON.stringify(response.data))
        setTransacdata(response.data)
       
    }catch (error) {
        console.error("Error fetching budget data:", error);
    }
};
const deletetransac =async (transacId)=>{
  try{
    if(window.confirm("Are you sure you need to delete this item"))
    await axios.delete(`https://localhost:44339/api/Transaction/Transaction/${transacId}`);
    setTransacdata(transacdata.filter(item => item.transacId !== transacId));
    alert("Deleted Successfully")
  }catch(error){
    console.error('Error deleting transaction:', error);
  }
};
   
  return (
    <div>
        
      <div className="transacform"> 
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="left" colSpan={3}>
                <TableCell align="left">Project: {projectId}</TableCell>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={1}>Discription</TableCell>
                <TableCell colSpan={2}>Date</TableCell>
                <TableCell colSpan={3}>Value</TableCell>
                <TableCell colSpan={4}>Total Income</TableCell>
                <TableCell colSpan={5}>Total Expence</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transacdata.map((item,index)=>(
                <TableRow key={index}>
                  <TableCell align='left' colSpan={1}>{item.description}</TableCell>
                  <TableCell align='left' colSpan={2}>{new Date(item.date).toLocaleDateString()}</TableCell>
                  <TableCell align='left' colSpan={3}>{item.value}</TableCell>
                  <TableCell align='left' colSpan={4}>{item.income}</TableCell>
                  <TableCell align='left' colSpan={5}>{item.expence}</TableCell>
                  <TableCell align='left' colSpan={6}><InvoiceEdit transacId={item.transacId}/></TableCell>
                  <TableCell align='left' colSpan={7}><Button onClick={() => deletetransac(item.transacId)}  
                    className='deletebutton'>Delete</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}


export default Invoice