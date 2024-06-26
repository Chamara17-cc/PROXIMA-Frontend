import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import './RateUpdateStyles.css'

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [Date, setDate] = useState('');
  const [Rate, setRate] = useState(null);
  const [CurrentRate, setCurrentRate] = useState({ currentRate: 0 });
  const [error, setError] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (!Date && !Rate) {
      setError('Date and Rate fields are required');
      return;
    }
    if (!Date) {
      setError('Date field is required');
      return;
    }
    if (!Rate) {
      setError('Rate field is required');
      return;
    }
    if (Rate <0 ) {
      setError('Invalid rate');
      return;
    }
    if (isNaN(parseFloat(Rate))){
      setError('Rate must be a number');
      return;
    }
    setError('');
    const ratedata = {
      CurrentRate: Rate,
      UpdatedDate: Date
    };
    const url = 'https://localhost:44339/api/DeveloperRate/register';
    axios.post(url, ratedata)
      .then((result) => {
        alert("Data inserted");
        window.location.reload(); 
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    const fetchData = async() => {
      try{
        const response= await axios.get('https://localhost:44339/api/DeveloperRate/register');
        setCurrentRate(response.data);  
        console.log(CurrentRate)
      }
      catch(error){
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); 
  },[]);

  return (
    <div>
      <Button onClick={handleClickOpen} style={{ backgroundColor: '#3D97ED', color: 'white' }}>Developer rate</Button>
      <div className="developer_rate">
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className='Rateheader'>Hourly Rate</DialogTitle>
          <DialogContent>
            {error && <div style={{ color: 'red' }}>{error}</div>}
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
              value={CurrentRate ? CurrentRate.currentRate : ''}
            />
          
            <TextField
              margin="dense"
              id="newrate"
              label="New Rate"
              type="number"
              fullWidth
              value={Rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </DialogContent>
          <div className="actionbutton">
            <DialogActions>
              <Button onClick={handleClose} className="dialog-action-button"> Close</Button>
              <Button onClick={handleSubmit} className="dialog-action-button">Update</Button>
            </DialogActions>
          </div>
        </Dialog>
      </div>
    </div>
  );
}
