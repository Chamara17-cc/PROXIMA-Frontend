import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function InvoiceEdit(props) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [value, setValue] = useState('');
  const [discription,setDescription]=useState('');

  const {transacId}=props
  console.log(transacId)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDiscriptionEdit=(event)=>{
  setDescription (event.target.value); 
  };
  const handleDateEdit=(event)=>{
    setDate (event.target.value); 
    };
  const handleTypeChange=(event)=>{
    setType (event.target.value); 
    };
  const handleValueEdit=(event)=>{
    setValue (event.target.value); 
    };
  const handleEdit =async (transacId) => {
    const editdata = {
      Value: value,
      Type: type,
      Description: discription,
      Date: date
    };

    console.log(editdata)
    const url = `https://localhost:44339/api/Transaction/Transaction/${transacId}?value=${value}&type=${type}&description=${discription}`;
    axios.put(url, editdata)
      .then((result) => {
        alert("Data edited");
        window.location.reload();
        
      })
      .catch((error) => {
        if (error.response) {

          console.error("Request made, but server responded with error:");
          console.error("Status Code:", error.response.status);
          console.error("Response Data:", error.response.data);
          console.error("Response Headers:", error.response.headers);
        } else if (error.request) {
          console.error("Request made, but no response received:", error.request);
        } else {
          console.error("Error setting up the request:", error.message);
        }
        alert("An error occurred while processing the request. Please check the console for details.");
      });
  }

 

  return (
    <div>
      <Button onClick={handleClickOpen} style={{backgroundColor:'#3D97ED' , color:'white'}}>Edit</Button>
      <div className="invoiceedit">
        <Dialog open={open} onClose={handleClose} maxWidth='100'>
          <DialogTitle className='invoiceedit'>Edit Transaction</DialogTitle>
          <DialogContent>
          <div class="container">
  <table class="table table-borderless">
    <thead>
      <tr>
        <th scope="col">Description</th>
        <th scope="col">Date</th>
        <th scope="col">Type</th>
        <th scope="col">Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="text" class="form-control" onChange={handleDiscriptionEdit}/></td>
        <td><input type="date" class="form-control" onChange={handleDateEdit}/></td>
        <td>
          <select id="SelectProject" class="form-select" value={type} onChange={handleTypeChange}>
            <option value="" >Select Type...</option>
            <option value="Income">Income</option>
            <option value="Expence">Expense</option>
          </select>
        </td>
        <td><input type="text" class="form-control" onChange={handleValueEdit}/></td>
      </tr>
    </tbody>
  </table>
</div>


          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={()=>handleEdit(transacId)}>Edit</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
