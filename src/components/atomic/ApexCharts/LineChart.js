import React from 'react';

import Chart from 'react-apexcharts';

export default function LineChart() {
  const options = {
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  };
  const series = [
    {
      data: [30, 40, 25, 50, 49, 21, 70, 51],
    },
  ];

  return <Chart options={options} series={series} type="line" />;
}
