import React, { useEffect ,useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function Invoice(props) {
    const {projectId}=props;
    const[transacdata,setTransacdata]=useState([]);
    useEffect(()=>{
        fetchTransaction(projectId);
    },[projectId])

   const fetchTransaction= async (projectId)=>{
    try{
        const responce= await axios.get(``);
        setTransacdata(responce.data)
    }catch (error) {
        console.error("Error fetching budget data:", error);
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
                <TableCell>Discription</TableCell>
                <TableCell colSpan={2}>Date</TableCell>
                <TableCell colSpan={3}>Value</TableCell>
                <TableCell colSpan={4}>Total Income</TableCell>
                <TableCell colSpan={5}>Total Expence</TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {transacdata.map((item,index) => (
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
            </TableBody> */}
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}


export default Invoice