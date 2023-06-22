import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent } from '@mui/material';
import data from './ReportsJsonData/SpeedReport.json'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SpeedReport = () => {
  const classes = useStyles();



  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom: '2rem' }}>
      <Card>
        <CardContent>
          <h1>Speed Report </h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Speed report table">
              <TableHead>
                <TableRow>
                  <TableCell>Vehicle ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Speed</TableCell>
                  <TableCell>Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.vehicleId}>
                    <TableCell>{row.vehicleId}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.speed}</TableCell>
                    <TableCell>{row.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Paper >
  );
};

export default SpeedReport;
