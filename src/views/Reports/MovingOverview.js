import React from 'react'
import { Card, Grid, CardContent } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import rows from './ReportsJsonData/MovieOverview.json'
const MovingOverview = () => {

  const dataGridcols = [
    { field: 'vehicleNo', headerName: 'Vehicle No', minWidth: 170 },
    { field: 'speed', headerName: 'Speed', minWidth: 70 },
    { field: 'reportingTime', headerName: 'Reporting Time', minWidth: 170, },
    { field: 'deviceState', headerName: 'Device State', minWidth: 70, },
    { field: 'signals', headerName: 'Signals', minWidth: 170, },
    { field: 'maxSpeed', headerName: 'Max Speed', minWidth: 170 },
    { field: 'runningTime', headerName: 'Running Time', minWidth: 170 },
    { field: 'stoppingTime', headerName: 'Stopping Time', minWidth: 170 },
    { field: 'distanceMoved', headerName: 'Distance Moved', minWidth: 170 },
    { field: 'startTime', headerName: 'Start Time', minWidth: 170 },
    { field: 'startlocation', headerName: 'Start Location', minWidth: 250 },
  ];

  let n = 1001;
  const getRowId = () => {
    return n++;
  };

 

  return (
    <Card >
      <CardContent>
        <h1>Moving Overview </h1>
        <Grid item xs={12}>
          <div style={{ height: 500, width: '100%', padding: `12px` }}>
            <DataGrid
              getRowId={getRowId}
              rows={rows}
              columns={dataGridcols}
              components={{
                Toolbar: GridToolbar,
              }}
            />
          </div>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default MovingOverview