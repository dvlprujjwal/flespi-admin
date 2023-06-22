import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import TripWeighbridge from './ReportsJsonData/TripWeighbridges.json'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TirpWeighbridgesReport = () => {
  const classes = useStyles();

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom: '2rem' }}>
      <Card>
        <CardContent>
          <h1> Trip Weigh bridges Report</h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Trip report table">
              <TableHead>
                <TableRow>
                  <TableCell>Vehicle ID</TableCell>
                  <TableCell>Trip ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time In</TableCell>
                  <TableCell>Time Out</TableCell>
                  <TableCell>Gross Weight</TableCell>
                  <TableCell>Tare Weight</TableCell>
                  <TableCell>Net Weight</TableCell>
                  <TableCell>Operator</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TripWeighbridge.map((trip) => (
                  <TableRow key={trip.tripId}>
                    <TableCell>{trip.vehicleId}</TableCell>
                    <TableCell>{trip.tripId}</TableCell>
                    <TableCell>{trip.date}</TableCell>
                    <TableCell>{trip.timeIn}</TableCell>
                    <TableCell>{trip.timeOut}</TableCell>
                    <TableCell>{trip.grossWeight}</TableCell>
                    <TableCell>{trip.tareWeight}</TableCell>
                    <TableCell>{trip.netWeight}</TableCell>
                    <TableCell>{trip.operator}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default TirpWeighbridgesReport;
