import React from 'react';

import Chart from './Chart';

const RatingsChart = ({ ratings }) => {
  return (
    <div>
      <h6 className="mb-5 text-xl font-bold">Ratings</h6>
      <Chart ratings={ratings}></Chart>
    </div>
  );
};

export default RatingsChart;
