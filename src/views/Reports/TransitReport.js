import React from 'react'
import { Card, Grid, CardContent } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const TransitReport = () => {

  const dataGridcols = [
    { field: 'vehicleNo', headerName: 'Vehicle No', minWidth: 170 },
    { field: 'startTime', headerName: 'Start Time', minWidth: 170 },
    {
      field: 'reportingTime',
      headerName: 'End Time',
      minWidth: 170,
    },
    {
      field: 'deviceState',
      headerName: 'Device State',
      minWidth: 70,
    },
    { field: 'stoppingTime', headerName: 'Stopping Time', minWidth: 170 },
    { field: 'distanceMoved', headerName: 'Distance Moved', minWidth: 170 },
    { field: 'startlocation', headerName: 'Start Location', minWidth: 250 },
  ];

  let n = 1001;
  const getRowId = () => {
    return n++;
  };

  const rows = [
    { vehicleNo: 'DL96K0294', speed: 0, reportingTime: '4/21/2017 11:32', deviceState: 'O', signals: 139, maxSpeed: 0, runningTime: '0:00', stoppingTime: '11:34:37', distanceMoved: '0 Km', startTime: '4/21/2017 0:02', startlocation: 'Bhandara - Balaghat Rd, Garra Industrial Area, Balaghat, Madhya Pradesh 481331, India' },
    { vehicleNo: 'DL96K8870', speed: 0, reportingTime: '4/21/2017 12:42', deviceState: 'S', signals: 2525, maxSpeed: 78, runningTime: '6:47:55', stoppingTime: '4:24:47', distanceMoved: '206.861 Km', startTime: '4/21/2017 0:00', startlocation: 'NH30, Madhya Pradesh 486111, India' },
    { vehicleNo: 'DL96K8896', speed: 34, reportingTime: '4/21/2017 12:44', deviceState: 'M', signals: 1712, maxSpeed: 56, runningTime: '4:18:33', stoppingTime: '7:43:24', distanceMoved: '157.661 Km', startTime: '4/21/2017 0:02', startlocation: '76/4A, Stanley Rd, Kamla Nagar, Civil Lines' },
    { vehicleNo: 'DL96K0294', speed: 0, reportingTime: '4/21/2017 11:32', deviceState: 'O', signals: 139, maxSpeed: 0, runningTime: '0:00', stoppingTime: '11:34:37', distanceMoved: '0 Km', startTime: '4/21/2017 0:02', startlocation: 'Bhandara - Balaghat Rd, Garra Industrial Area, Balaghat, Madhya Pradesh 481331, India' },
    { vehicleNo: 'DL96K8870', speed: 0, reportingTime: '4/21/2017 12:42', deviceState: 'S', signals: 2525, maxSpeed: 78, runningTime: '6:47:55', stoppingTime: '4:24:47', distanceMoved: '206.861 Km', startTime: '4/21/2017 0:00', startlocation: 'NH30, Madhya Pradesh 486111, India' },
    { vehicleNo: 'DL96K8896', speed: 34, reportingTime: '4/21/2017 12:44', deviceState: 'M', signals: 1712, maxSpeed: 56, runningTime: '4:18:33', stoppingTime: '7:43:24', distanceMoved: '157.661 Km', startTime: '4/21/2017 0:02', startlocation: '76/4A, Stanley Rd, Kamla Nagar, Civil Lines' },
    { vehicleNo: 'DL96K0294', speed: 0, reportingTime: '4/21/2017 11:32', deviceState: 'O', signals: 139, maxSpeed: 0, runningTime: '0:00', stoppingTime: '11:34:37', distanceMoved: '0 Km', startTime: '4/21/2017 0:02', startlocation: 'Bhandara - Balaghat Rd, Garra Industrial Area, Balaghat, Madhya Pradesh 481331, India' },
    { vehicleNo: 'DL96K8870', speed: 0, reportingTime: '4/21/2017 12:42', deviceState: 'S', signals: 2525, maxSpeed: 78, runningTime: '6:47:55', stoppingTime: '4:24:47', distanceMoved: '206.861 Km', startTime: '4/21/2017 0:00', startlocation: 'NH30, Madhya Pradesh 486111, India' },
    { vehicleNo: 'DL96K8896', speed: 34, reportingTime: '4/21/2017 12:44', deviceState: 'M', signals: 1712, maxSpeed: 56, runningTime: '4:18:33', stoppingTime: '7:43:24', distanceMoved: '157.661 Km', startTime: '4/21/2017 0:02', startlocation: '76/4A, Stanley Rd, Kamla Nagar, Civil Lines' },


  ];

  return (
    <Card >
      <CardContent>
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


export default TransitReport