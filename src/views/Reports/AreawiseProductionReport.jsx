import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, CardContent, Paper } from '@mui/material';
import data from './ReportsJsonData/AreawiseProduction.json';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const AreawiseProductionReport = () => {
  const classes = useStyles();

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom: '2rem' }}>
      <Card>
        <CardContent>
          <h1>Area Wise Production Report</h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Area wise production report table">
              <TableHead>
                <TableRow>
                  <TableCell>Area</TableCell>
                  <TableCell align="right">Product A</TableCell>
                  <TableCell align="right">Product B</TableCell>
                  <TableCell align="right">Product C</TableCell>
                  <TableCell align="right">Product D</TableCell>
                  <TableCell align="right">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.area}>
                    <TableCell component="th" scope="row">{row.area}</TableCell>
                    <TableCell align="right">{row.productA}</TableCell>
                    <TableCell align="right">{row.productB}</TableCell>
                    <TableCell align="right">{row.productC}</TableCell>
                    <TableCell align="right">{row.productD}</TableCell>
                    <TableCell align="right">{row.productA + row.productB + row.productC + row.productD}</TableCell>
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

export default AreawiseProductionReport;
