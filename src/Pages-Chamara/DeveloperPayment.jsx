// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import axios from 'axios';

// function DeveloperPayment() {
//   const [open, setOpen] = useState(false);
//   const [year, setYear] = useState('');
//   const [years, setYearsList] = useState([]);
//   const [month, setMonth] = useState('');
//   const [months, setMonthList] = useState([]);
//   const [rate, setRate] = useState('');
//   const [totalWorkedHours, setTotalWorkedHours] = useState('');
//   const [totalPayment, setTotalPayment] = useState('');
//   const [error, setError] = useState('');
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     window.location.reload();
//   };

//   const handleYearChange = (event) => {
//     setYear(event.target.value);
//   };

//   const handleMonthChange = (event) => {
//     const seletedMonth=event.target.value
//     const currentMonth=getCurrentMonth()+1;
//     const currentYear = getCurrentYear();
//     if (seletedMonth>currentMonth && currentYear==year){
//       setError('Month is not still available');
//       window.location.reload();
//       return;
       
//     }else{
//       setMonth(event.target.value);
//     }
    
//   };

//   const getCurrentYear = () => {
//     return new Date().getFullYear();
//   };
//   const getCurrentMonth = () => {
//     return new Date().getMonth();
//   };

//   const getYears = () => {
//     const yearList = [];
//     const currentYear = getCurrentYear();
//     for (let i = currentYear; i >= currentYear - 5; i--) {
//       yearList.push(i);
//     }
//     setYearsList(yearList);
//   };

//   const getMonths = () => {
//     const monthList = [];
//     for (let i = 1; i <= 12; i++) {
//       monthList.push(i);
//     }
//     setMonthList(monthList);
//   };

//   useEffect(() => {
//     getYears();
//     getMonths();
//   }, []);

//   const handlePaymentRequest = async () => {
//     try {
//       const rateResponse = await axios.get(`https://localhost:44339/api/DeveloperRate/register`);
//       setRate(rateResponse.data.currentRate);

//       const paymentResponse = await axios.get(`https://localhost:44339/api/Developer_Finance/Payment/11/register?month=${month}&year=${year}`);
//       console.log(paymentResponse.data)
//       setTotalWorkedHours(paymentResponse.data.monthlyWorkedHours);
//       setTotalPayment(paymentResponse.data.totalMonthPayment);
//     } catch (error) {
//       const url = `https://localhost:44339/api/Developer_Finance/Developer/11/register?month=${month}&year=${year}`;
//       try {
//         await axios.post(url);
//         handlePaymentRequest(); // Retry the payment request after the data is generated
//       } catch (postError) {
//         console.error('Error generating payment data:', postError);
//       }
//     }
//   };

//   return (
//     <div>
//       <Button onClick={handleClickOpen} style={{ backgroundColor: '#3D97ED', color: 'white' }}>
//         Financial Status
//       </Button>
//       <div className="financialpage">
//         <Dialog open={open} onClose={handleClose} maxWidth="100">
//           <DialogTitle className="financialpage"><b><u>Developer Financial Status</u></b></DialogTitle>
//           <DialogContent>
//             <div className="container">
//               <table className="table table-borderless">
//                 <thead>
//                   <tr>
//                     <th>Year</th>
//                     {error && <div style={{ color: 'red' }}>{error}</div>}
//                     <th>Month</th>
//                   </tr>
//                   <tr>
//                     <th scope="col">
//                       <select className="year" value={year} onChange={handleYearChange}>
//                         <option value="">Select Year..</option>
//                         {years.map((year) => (
//                           <option key={year} value={year}>{year}</option>
//                         ))}
//                       </select>
//                     </th>
//                     <th>
//                       <select className="month" value={month} onChange={handleMonthChange}>
//                         <option value="">Select Month..</option>
//                         {months.map((month) => (
//                           <option key={month} value={month}>{month}</option>
//                         ))}
//                       </select>
//                     </th>
//                     <Button style={{ backgroundColor: '#3D97ED' }} onClick={handlePaymentRequest}>Payment Status</Button>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                   </tr>
//                 </tbody>
//                 <thead>
//                   <tr>
//                     <th scope="col">Hourly Rate</th>
//                     <th scope="col">Total Worked Hours</th>
//                     <th scope="col">Total Payment</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>
//                       <div className="form-control" style={{ backgroundColor: '#f0f0f0', border: '1px solid #ced4da',
//                          padding: '.375rem .75rem', borderRadius: '.25rem', color: '#000000' }}>
//                         Rs: {rate}
//                       </div>
//                     </td>
//                     <td>
//                       <div className="form-control" style={{ backgroundColor: '#f0f0f0', border: '1px solid #ced4da',
//                          padding: '.375rem .75rem', borderRadius: '.25rem', color: '#000000' }}>
//                         {totalWorkedHours} Hrs.
//                       </div>
//                     </td>
//                     <td>
//                       <div className="form-control" style={{ backgroundColor: '#f0f0f0', border: '1px solid #ced4da',
//                         padding: '.375rem .75rem', borderRadius: '.25rem', color: '#000000' }}>
//                         Rs: {totalPayment}
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}>Close</Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </div>
//   );
// }

// export default DeveloperPayment;

import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';


function DeveloperPayment() {
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState('');
  const [years, setYearsList] = useState([]);
  const [month, setMonth] = useState('');
  const [months, setMonthList] = useState([]);
  const [rate, setRate] = useState('');
  const [totalWorkedHours, setTotalWorkedHours] = useState('');
  const [totalPayment, setTotalPayment] = useState('');
  const [error, setError] = useState('');



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    const currentMonth = getCurrentMonth() + 1;
    const currentYear = getCurrentYear();
    if (selectedMonth > currentMonth && currentYear === year) {
      setError('Month is not still available');
      window.location.reload();
      return;
    } else {
      setMonth(selectedMonth);
    }
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const getCurrentMonth = () => {
    return new Date().getMonth();
  };

  const getYears = () => {
    const yearList = [];
    const currentYear = getCurrentYear();
    for (let i = currentYear; i >= currentYear - 5; i--) {
      yearList.push(i);
    }
    setYearsList(yearList);
  };

  const getMonths = () => {
    const monthList = [];
    for (let i = 1; i <= 12; i++) {
      monthList.push(i);
    }
    setMonthList(monthList);
  };

  useEffect(() => {
    getYears();
    getMonths();
  }, []);

  const handlePaymentRequest = async (userId) => {
        try {
          const rateResponse = await axios.get(`https://localhost:44339/api/DeveloperRate/register`);
          setRate(rateResponse.data.currentRate);
    
          const paymentResponse = await axios.get(`https://localhost:44339/api/Developer_Finance/Payment/11/register?month=${month}&year=${year}`);
          console.log(paymentResponse.data)
          setTotalWorkedHours(paymentResponse.data.monthlyWorkedHours);
          setTotalPayment(paymentResponse.data.totalMonthPayment);
        } catch (error) {
          const url = `https://localhost:44339/api/Developer_Finance/Developer/11/register?month=${month}&year=${year}`;
          try {
            await axios.post(url);
            handlePaymentRequest(); // Retry the payment request after the data is generated
          } catch (postError) {
            console.error('Error generating payment data:', postError);
          }
        }
      };

  return (
    <div>
      <Button onClick={handleClickOpen} style={{ backgroundColor: '#3D97ED', color: 'white' }}>
        Financial Status
      </Button>
      <div className="financialpage">
        <Dialog open={open} onClose={handleClose} maxWidth="100">
          <DialogTitle className="financialpage"><b><u>Developer Financial Status</u></b></DialogTitle>
          <DialogContent>
            <div className="container">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th>Year</th>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <th>Month</th>
                  </tr>
                  <tr>
                    <th scope="col">
                      <select className="year" value={year} onChange={handleYearChange}>
                        <option value="">Select Year..</option>
                        {years.map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </th>
                    <th>
                      <select className="month" value={month} onChange={handleMonthChange}>
                        <option value="">Select Month..</option>
                        {months.map((month) => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                    </th>
                    <Button style={{ backgroundColor: '#3D97ED' }} onClick={handlePaymentRequest}>Payment Status</Button>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th scope="col">Hourly Rate</th>
                    <th scope="col">Total Worked Hours</th>
                    <th scope="col">Total Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="form-control" style={{ backgroundColor: '#f0f0f0', border: '1px solid #ced4da',
                         padding: '.375rem .75rem', borderRadius: '.25rem', color: '#000000' }}>
                        Rs: {rate}
                      </div>
                    </td>
                    <td>
                      <div className="form-control" style={{ backgroundColor: '#f0f0f0', border: '1px solid #ced4da',
                         padding: '.375rem .75rem', borderRadius: '.25rem', color: '#000000' }}>
                        {totalWorkedHours} Hrs.
                      </div>
                    </td>
                    <td>
                      <div className="form-control" style={{ backgroundColor: '#f0f0f0', border: '1px solid #ced4da',
                        padding: '.375rem .75rem', borderRadius: '.25rem', color: '#000000' }}>
                        Rs: {totalPayment}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default DeveloperPayment;

