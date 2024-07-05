import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dataset = [
  { month: 'Jan', london: 59, paris: 57 },
  { month: 'Feb', london: 50, paris: 52 },
  { month: 'Mar', london: 47, paris: 53 },
  { month: 'Apr', london: 54, paris: 56 },
  { month: 'May', london: 57, paris: 69 },
  { month: 'June', london: 60, paris: 63 },
  { month: 'July', london: 59, paris: 60 },
  { month: 'Aug', london: 65, paris: 60 },
  { month: 'Sept', london: 51, paris: 51 },
  { month: 'Oct', london: 60, paris: 65 },
  { month: 'Nov', london: 67, paris: 64 },
  { month: 'Dec', london: 61, paris: 70 },
];

export default function BarsDataset() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={dataset} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis label={{ value: 'rupees(Rs)', angle: -90, position: 'insideLeft' }} />
        <Tooltip formatter={(value) => `${value}rs`} />
        <Legend />
        <Bar dataKey="london" fill="#8884d8" name="London" />
        <Bar dataKey="paris" fill="#82ca9d" name="Paris" />
      </BarChart>
    </ResponsiveContainer>
  );
}
