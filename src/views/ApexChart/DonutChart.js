
import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Box } from '@mui/material';

class DonutChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
      series: [44, 55, 41, 17, 15],
      options: {
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    
    
    };
  }

  render() {
    return (
      <Box className="app"    sx={{ display: 'inline-flex' , background:'white', borderRadius:`5px`, padding: `10px` } }>
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
           // width="380"
           height={`100%`}
            />
          </div>
         
        </div>
       
      </Box>
    );
  }
}

export default DonutChart;
