import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import data from './ReportsJsonData/LatestLocation.json'
// Define the columns for the table
const columns = [
  { id: 'deviceId', label: 'Device ID' },
  { id: 'timestamp', label: 'Timestamp' },
  { id: 'latitude', label: 'Latitude' },
  { id: 'longitude', label: 'Longitude' },
  { id: 'altitude', label: 'Altitude' },
  { id: 'speed', label: 'Speed' },
  { id: 'heading', label: 'Heading' },
];



function LatestLocationReport() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginBottom: '2rem' }}>
      <Card>
        <CardContent>
          <h1>Latest Location Report</h1>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {/* Render table header columns */}
                  {columns.map((column) => (
                    <TableCell key={column.id}>{column.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Render table rows */}
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.deviceId}</TableCell>
                    <TableCell>{row.timestamp}</TableCell>
                    <TableCell>{row.latitude}</TableCell>
                    <TableCell>{row.longitude}</TableCell>
                    <TableCell>{row.altitude}</TableCell>
                    <TableCell>{row.speed}</TableCell>
                    <TableCell>{row.heading}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Paper >
  );
}

export default LatestLocationReport;
