import React, { useState, useEffect } from 'react'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete'
import { Card, Grid, CardContent, Button, Box } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import DownloadIcon from '@mui/icons-material/Download';
import Map from '../Map/Map';
import BatteryCharging80Icon from '@mui/icons-material/BatteryCharging80';
import KeyIcon from '@mui/icons-material/Key';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import Input from '@mui/joy/Input';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';





const Tripdetails = () => {
  const [apidata, setApiData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([]);

  const columns = [
    { field: 'channel.id', headerName: 'Channel ID', width: 150 },
    { field: 'device.id', headerName: 'Device ID', width: 150 },
    { field: 'device.name', headerName: 'Device Name', width: 150 },
    { field: 'gnss.realtime.status', headerName: 'GNSS Realtime Status', width: 200 },
    { field: 'gsm.cellid', headerName: 'GSM Cell ID', width: 150 },
    { field: 'gsm.lac', headerName: 'GSM LAC', width: 150 },
    { field: 'gsm.mcc', headerName: 'GSM MCC', width: 150 },
    { field: 'gsm.mnc', headerName: 'GSM MNC', width: 150 },
    { field: 'ident', headerName: 'Ident', width: 150 },
    { field: 'peer', headerName: 'Peer', width: 150 },
    { field: 'position.direction', headerName: 'Position Direction', width: 200 },
    { field: 'position.latitude', headerName: 'Position Latitude', width: 200 },
    { field: 'position.longitude', headerName: 'Position Longitude', width: 200 },
    { field: 'position.satellites', headerName: 'Position Satellites', width: 200 },
    { field: 'position.speed', headerName: 'Position Speed', width: 150 },
    { field: 'position.valid', headerName: 'Position Valid', width: 150 },
    { field: 'protocol.id', headerName: 'Protocol ID', width: 150 },
    { field: 'protocol.number', headerName: 'Protocol Number', width: 200 },
    { field: 'server.timestamp', headerName: 'Server Timestamp', width: 200 },
    { field: 'timestamp', headerName: 'Timestamp', width: 150 },
  ];



  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        'https://flespi.io/gw/devices/4856018/messages',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:
              `FlespiToken hcXnv9nl3OzlqewzXlOeu6dCvoO2LRTSTG4eEfnxUNGaP2yCccHu6IWrUyitfZaY`,
          },
        }).then((res) => res.json())
        .then((data) => {

          const wrap = [data.result].flat();
          setApiData(wrap)
          console.log(wrap);
          setPosts(wrap);
        })
    };
    fetchData();
  }, []);





  const getRowId = (row) => {
    return `${row['device.id']}-${row['timestamp']}`;
  };


  return (

    <div >
      <Grid container >
        <Grid item xs={4}>
          <Box mr={1}>

            <Card>
              <Grid container  >
                <Grid item xs={6} >
                  <Stack m={1} sx={{ width: 'auto', }}>
                    <Autocomplete
                      id="free-solo-2-demo"
                      disableClearable
                      options={options.map((option) => option.title)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Search input"
                          InputProps={{
                            ...params.InputProps,
                            type: 'search',
                          }}
                        />
                      )}
                    />

                  </Stack>
                </Grid>
                <Grid item sm={6}>
                  <Box display="flex" mt={2} >
                    <Button variant="contained" className="btn-success" endIcon={<DownloadIcon />} >
                      export
                    </Button>
                    <Button variant="contained" color="primary" endIcon={<RefreshIcon />}>
                      Refresh
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Card>



            <Box p={1} >
              <Grid container>
                <Grid item xs={3}>
                  <Card className='bx-card-left' style={{ borderLeft: `5px solid #00cfd5 ` }}>
                    <CardContent style={{ textAlign: 'center' }}>
                      Total <br /><b>19</b>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className='bx-card-left' style={{ borderLeft: `5px solid #33bc87 ` }}>
                    <CardContent style={{ textAlign: 'center' }}>
                      Moving  <br /><b>15</b>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className='bx-card-left' style={{ borderLeft: `5px solid #ec4333 ` }}>
                    <CardContent style={{ textAlign: 'center' }}>
                      Stopped <br /><b>02</b>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={3}>
                  <Card className='bx-card-left' style={{ borderLeft: `5px solid #f6b333 ` }}>
                    <CardContent style={{ textAlign: 'center' }} >
                      Offline  <br /> <b>02</b>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>

            <Card>

              <Card className='bx-card'>
                <CardContent >
                  <h3>
                    KJ366KDUNGKD45
                  </h3>
                  <p>
                    Date & Time : 2021-08-10 10:00 <br />
                    Distance : 100 km <br />
                    Address: 123456789
                  </p>

                  <box>
                    <Grid container>
                      <Grid item xs={3} style={{ textAlign: 'center' }} ><BatteryCharging80Icon /><br />4.5v</Grid>
                      <Grid item xs={3} style={{ textAlign: 'center' }} ><BatteryFullIcon sx={{ color: "#33bc87" }} /><br />50v</Grid>
                      <Grid item xs={3} style={{ textAlign: 'center' }} ><KeyIcon sx={{ color: "#00cfd5" }} /><br />On</Grid>
                      <Grid item xs={3} style={{ textAlign: 'center' }} ><FiberManualRecordIcon sx={{ color: "#ec4333" }} /><br />Stopped</Grid>
                    </Grid>
                  </box>
                </CardContent>
                <box  >
                  <Grid container p={2} >
                    <Grid item xs={3} style={{ background: "#f6b333", display: "flex", justifyContent: "center", color: "#f8f8f9", textAlign: "center", padding: `10px` }}>Details</Grid>
                    <Grid item xs={3} style={{ background: "#33bc87", display: "flex", justifyContent: "center", color: "#f8f8f9", textAlign: "center", padding: `10px` }}>Trips</Grid>
                    <Grid item xs={3} style={{ background: "#00cfd5", display: "flex", justifyContent: "center", color: "#f8f8f9", textAlign: "center", padding: `10px` }}>Live Track</Grid>
                    <Grid item xs={3} style={{ background: "#ec4333", display: "flex", justifyContent: "center", color: "#f8f8f9", textAlign: "center", padding: `10px` }}>Command</Grid>
                  </Grid>
                </box>


              </Card>

              {/*date and input */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <box spacing={3} sx={{ m: '2rem' }}>
                  <Grid container spacing={2}>
                    <Grid item sm={6} >

                      <Input
                        type="date"
                        color="neutral"
                        disabled={false}
                        size="lg"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item sm={6} >
                      <Input
                        type="number"
                        color="neutral"
                        disabled={false}
                        size="lg"
                        placeholder=" Enter distance"
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </box>
              </LocalizationProvider>

              {/* table*/}
              <Grid item xs={12}>
                <div style={{ height: 500, width: '100%', padding: `12px` }}>
                  <DataGrid
                    getRowId={getRowId}
                    rows={apidata}
                    columns={columns}
                    components={{
                      Toolbar: GridToolbar,
                    }}
                  />
                </div>
              </Grid>

            </Card>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Map  />
        </Grid>
      </Grid>
    </div >
  )
}

export default Tripdetails

const options = [

  { title: 'KJ366KDUNGKD45' },
  { title: 'KJ366KDUNGKD45 ' },
  { title: 'KJ366KDUNGKD45' },
  { title: 'KJ366KDUNGKD45' },
  { title: 'KJ366KDUNGKD45' },
  { title: 'KJ366KDUNGKD45' },
  { title: 'KJ366KDUNGKD45' },

];