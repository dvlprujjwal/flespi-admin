import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent } from '@mui/material';
import data from './ReportsJsonData/MachineHelath.json'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const MachineHealthCheckReport = () => {
  const classes = useStyles();

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom: '2rem' }}>
      <Card>
        <CardContent>
          <h1>Machine Health Check Report</h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Machine health check report table">
              <TableHead>
                <TableRow>
                  <TableCell>Machine</TableCell>
                  <TableCell align="right">Health Status</TableCell>
                  <TableCell align="right">Downtime</TableCell>
                  <TableCell align="right">Machine Utilization</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.machine}>
                    <TableCell component="th" scope="row">{row.machine}</TableCell>
                    <TableCell align="right">{row.healthStatus}</TableCell>
                    <TableCell align="right">{row.downtime}</TableCell>
                    <TableCell align="right">{row.utilization}</TableCell>
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

export default MachineHealthCheckReport;
