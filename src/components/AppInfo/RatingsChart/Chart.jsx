import React from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ ratings }) => {
  const reverce = [...ratings].reverse();

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={reverce}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />

          <Bar dataKey="count" barSize={20} fill="#632EE3" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

// "ratings": [
//     { "name": "1 star", "count": 2500000 },
//     { "name": "2 star", "count": 3000000 },
//     { "name": "3 star", "count": 5000000 },
//     { "name": "4 star", "count": 10000000 },
//     { "name": "5 star", "count": 51500000 }
//   ]
