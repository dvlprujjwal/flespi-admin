import React from 'react'
import { Card, Grid, CardContent } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import RowData from './ReportsJsonData/StoppageReport.json';


const StoppageReport = () => {

  const dataGridcols = [
    { field: 'vehicleNo', headerName: 'Vehicle No', minWidth: 170 },
    { field: 'startTime', headerName: 'Start Time', minWidth: 170 },
    { field: 'stoppingTime', headerName: 'End Time', minWidth: 170 },
    { field: 'deviceState', headerName: 'Device State', minWidth: 70, },
    { field: 'runningTime', headerName: 'Duration', minWidth: 170 },
    { field: 'startlocation', headerName: 'Start Location', minWidth: 250 },
  ];

  let n = 10001;
  const getRowId = () => {
    return n++;
  };

 

  return (
    <Card >
      <CardContent>
        <h1>Stoppage Report</h1>
        <Grid item xs={12}>
          <div style={{ height: 500, width: '100%', padding: `12px` }}>
            <DataGrid
              getRowId={getRowId}
              rows={RowData}
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


export default StoppageReport