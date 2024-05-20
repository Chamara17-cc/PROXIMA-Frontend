// src/BudgetTable.js
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Budgettable = ({ budgetData }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table" id="budgetTable">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={3}>
              {budgetData.objectives}
            </TableCell>
            <TableCell align="left">Date: {budgetData.date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Expense</TableCell>
            <TableCell colSpan={4}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {budgetData.map((item, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell>Selection Process Cost</TableCell>
                <TableCell align="left" colSpan={4}>{item.selectionprocessCost}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>License Cost</TableCell>
                <TableCell align="left" colSpan={4}>{item.licenseCost}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Server Cost</TableCell>
                <TableCell align="left" colSpan={4}>{item.serversCost}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Hardware Cost</TableCell>
                <TableCell align="left" colSpan={4}>{item.hardwareCost}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Connection Cost</TableCell>
                <TableCell align="left" colSpan={4}>{item.connectionCost}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Developer Cost</TableCell>
                <TableCell align="left" colSpan={4}>{item.developerCost}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Other Expenses</TableCell>
                <TableCell align="left" colSpan={4}>{item.otherExpenses}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Total Cost</TableCell>
                <TableCell align="left" colSpan={4}>{item.totalCost}</TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Budgettable;
