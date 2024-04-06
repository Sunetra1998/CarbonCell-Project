import React, { useState } from 'react';
import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
// import { Chart as chartjs } from 'chart.js/auto';

const BarChart = ({ chartData }) => {
  return (
    <Bar data={chartData} />
  )
}

export default BarChart;