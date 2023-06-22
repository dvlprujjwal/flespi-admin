import React from 'react';
import ReactApexCharts from 'react-apexcharts';

const data = {
  series: [{
    name: 'Fuel Consumption',
    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
  }],
  options: {
    chart: {
      type: 'line',
      height: 350
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
      title: {
        text: 'Fuel Consumption (miles per gallon)'
      }
    }
  },
};

const LineChart = () => (
  <div>
    <h3>Fuel Consumption over Time</h3>
  <ReactApexCharts
  options={data.options}
  series={data.series}
  type="line"
  height={350}
  />
  </div>
);

export default LineChart;
