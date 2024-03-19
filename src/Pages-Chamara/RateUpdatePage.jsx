import React, { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';


export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [Date, setDate] = useState('');
  const [Rate, setRate] = useState('');
  const[current_rate,setcurrent_rate]=useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /*const handleSubmit =async (event) => {
    try{
      const rateupdate= await axios.post('https://localhost:44377/api/DeveloperRate',{Rate,Date})
      console.log('Updated');
    }catch(error){
      console.error('Error updating name:', error);
    } 
    setOpen(false);
  };*/
  const handleSubmit=()=>{
    const ratedata={
      CurrentRate:Rate,
      UpdatedDate:Date
    };
    const url='https://localhost:44339/api/DeveloperRate';
    axios.post(url,ratedata).then((result) =>
    alert("Data inserted")
    ).catch((error)=>{
      alert(error);
    });
  }

  useEffect (()=>{
    fetchData();
  },[]);
  
  const fetchData = async ()=>{
    try{
      const developer_rate= await axios.get('https://localhost:44339/api/DeveloperRate');//copy backend path
      if (developer_rate.data.length>0){
        const rate= developer_rate.data[1].CurrentRate;
        setcurrent_rate(rate);
      }
    }
    catch(error){
      console.error('Error fetching data:', error);
    }
  };
 

  return (
    <div>
      
      <Button onClick={handleClickOpen}>Developer rate</Button>
      <div className="developer_rate">
      <Dialog open={open} onClose={handleClose} 
      /*PaperProps={{
            style: {
              backgroundColor: 'rgba(0, 0, 255, 0.5)',
            },
          }}*/>
            
        <DialogTitle className='Rateheader'>Hourly Rate</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="last_updated"
            type="date"
            fullWidth
            value={Date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
         margin="dense"
         id="current_rate"
         label="Current Rate"
         type="number"
        fullWidth
         value={current_rate}
/>

          <TextField
            margin="dense"
            id="newrate"
            label="New Rate"
            type="number"
            fullWidth
           // value={Rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
      
      </div>
      {/* <input type="text" value={current_rate} /> */}
      <select id="SelectProject" className="Projectlist"  >
                  <option value="Select project first">Select project here... </option>
                  {current_rate.map((budget,index)=>(
                   <option key={index} value={budget.rate}>{budget.rate}</option>
                  ))}   
                   </select>
    </div>
  );
}
