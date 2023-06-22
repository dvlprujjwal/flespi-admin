import * as React from 'react';
import { Card, Grid, CardContent } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import data from './ReportsJsonData/CurrentOverview';


const getRowId = () => {
  let n = 1111;
  return n++;
};

export default function CurrentOverview() {

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



  return (
    <div>
      <Card >
        <CardContent>
          <h1>Current Overview</h1>

          <Grid item xs={12}>
            <div style={{ height: 500, width: '100%', padding: `12px` }}>
              <DataGrid
                getRowId={getRowId}
                rows={data}
                columns={dataGridcols}
                components={{
                  Toolbar: GridToolbar,
                }}
              />
            </div>
          </Grid>
        </CardContent>

      </Card>
    </div>
  );
}