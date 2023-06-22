import React, { useState } from 'react';
import { Grid, Card, CardContent, Divider } from '@mui/material';
import Chart from 'react-apexcharts';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'Product',
    label: 'Product',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const createData = (name, code, Product, size) => {
  const density = Product / size;
  return { name, code, Product, size, density };
};

const rows = [
  createData('India', 'IN', 1317, 263),
  createData('China', 'CN', 14035, 6961),
  createData('Italy', 'IT', 6048, 3013),
  createData('United States', 'US', 67434, 3520),
  createData('Canada', 'CA', 2103, 990),
  createData('Australia', 'AU', 2400, 764),
  createData('Germany', 'DE', 83200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const BasicReport = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const state = {
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        id: 'basic-bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'South Korea',
          'Canada',
          'United Kingdom',
          'Netherlands',
          'Italy',
          'France',
          'Japan',
          'United States',
          'China',
          'Germany',
        ],
      },
    },
  };

  return (
    <Paper>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div id='chart'>
                <Chart
                  options={state.options}
                  series={state.series}
                  width={`82%`}
                  type='bar'
                  height={350}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
            <h1>Reports</h1>
              <Divider mt={2} />
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                      <TableRow>
                        {columns.map(({ id, label, align, minWidth }) => (
                          <TableCell
                            key={id}
                            align={align}
                            style={{ minWidth }}
                          >
                            {label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                          <TableRow
                            hover
                            role='checkbox'
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map(({ id, align, format }) => (
                              <TableCell key={id} align={align}>
                                {format && typeof row[id] === 'number'
                                  ? format(row[id])
                                  : row[id]}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component='div'
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default BasicReport;