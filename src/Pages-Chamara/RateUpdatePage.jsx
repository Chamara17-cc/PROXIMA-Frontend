import React, { useState, useEffect } from 'react';
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
  const [currentRate, setCurrentRate] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const ratedata = {
      CurrentRate: currentRate,
      UpdatedDate: Date
    };
    const url = `https://localhost:44339/api/DeveloperRate`;
    axios.post(url, ratedata)
      .then((result) => {
        alert("Data inserted");
        setOpen(false);
      })
      .catch((error) => {
        alert(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://localhost:44339/api/DeveloperRate`);
      setCurrentRate(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Developer rate</Button>
      <div className="developer_rate">
        <Dialog open={open} onClose={handleClose}>
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
              value={currentRate || ''} // Set value to currentRate or an empty string if null
              disabled // Disable input for current rate
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
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleSubmit}>Update</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
