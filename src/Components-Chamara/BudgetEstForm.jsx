
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

const subtotal = (items) => {
  return items.map(({ qty, unit }) => priceRow(qty, unit)).reduce((sum, i) => sum + i, 0);
};

export default function SpanningTable({ budgetData }) {
  const rows = [
    createRow('Selection Process Cost', 1, parseFloat(budgetData.selectionProcessCost || 0)),
    createRow('License Cost', 1, parseFloat(budgetData.licenseCost || 0)),
    createRow('Servers Cost', 1, parseFloat(budgetData.serversCost || 0)),
    createRow('Hardware Cost', 1, parseFloat(budgetData.hardwareCost || 0)),
    createRow('Connection Cost', 1, parseFloat(budgetData.connectionCost || 0)),
    createRow('Developer Cost', 1, parseFloat(budgetData.developerCost || 0)),
    createRow('Other Expenses', 1, parseFloat(budgetData.otherExpenses || 0))
  ];

  const invoiceSubtotal = subtotal(rows);
  const invoiceTotal = invoiceSubtotal;

  return (
    <div>
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
              <TableCell>Quantity</TableCell>
              <TableCell>Unit Cost</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell>{row.qty}</TableCell>
                <TableCell>{ccyFormat(row.unit)}</TableCell>
                <TableCell align="left">{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={3}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
