import React from "react";
import Chart from "react-apexcharts";
import { Paper, Typography } from "@mui/material";

const Top10DriversChart = () => {
  // sample data for top 10 drivers
  const driversData = [
    { name: "Driver 1", score: 95 },
    { name: "Driver 2", score: 90 },
    { name: "Driver 3", score: 85 },
    { name: "Driver 4", score: 80 },
    { name: "Driver 5", score: 75 },
    { name: "Driver 6", score: 70 },
    { name: "Driver 7", score: 65 },
    { name: "Driver 8", score: 60 },
    { name: "Driver 9", score: 55 },
    { name: "Driver 10", score: 50 },
  ];

  // prepare data for apexcharts
  const chartData = {
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      xaxis: {
        categories: driversData.map((data) => data.name),
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "%";
          },
        },
      },
      colors: ["#008FFB"],
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.75,
          opacityTo: 1,
          stops: [50, 100],
        },
      },
      title: {
        text: "Top 10 Drivers",
        align: "center",
        style: {
          fontSize: "18px",
          fontWeight: 600,
        },
      },
    },
    series: [
      {
        name: "Score",
        data: driversData.map((data) => data.score),
      },
    ],
  };

  return (
    <Paper style={{ padding: "20px", marginTop: "20px" }}>
      <Typography variant="h6" gutterBottom>
        Top 10 Drivers
      </Typography>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </Paper>
  );
};

export default Top10DriversChart;
