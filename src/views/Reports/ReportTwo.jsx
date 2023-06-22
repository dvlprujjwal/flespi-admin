import React, { useState, useEffect, useCallback } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Card, Autocomplete, CardContent, Grid, TextField } from '@mui/material';

function formatTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZone: 'UTC',
  };
  return date.toLocaleString(undefined, options);
}

function dateFilter(params, value) {
  const { startDate, endDate } = value;
  const timestamp = new Date(params.row.timestamp).getTime();
  return (
    (!startDate || timestamp >= new Date(startDate).getTime()) &&
    (!endDate || timestamp <= new Date(endDate).getTime())
  );
}

export default function FlespiTable() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterModel, setFilterModel] = useState({
    items: [],
    dateRange: {
      startDate: null,
      endDate: null,
    },
  });
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [columns, setColumns] = useState([]);



  const fetchDeviceData = useCallback(async () => {
    try {
      const response = await fetch('https://flespi.io/gw/devices/all', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'FlespiToken Yeeuz0r2h9QSeLqc1kYRSa3E1qKycLG1QKldyA3FxKnBjCDbKsQsqHVhVvEY78PL',
        },
      });
      const devicesData = await response.json();
      setDevices(devicesData.result);
    } catch (error) {
      alert('Failed to fetch devices')
    }
  }, []);

  useEffect(() => {
    fetchDeviceData();
  }, [fetchDeviceData]);

  const handleDeviceSelection = (event, value) => {
    setSelectedDevice(value);
  }

  useEffect(() => {
    const fetchData = async () => {
      if (selectedDevice) {
        const response = await fetch(
          `https://flespi.io/gw/devices/${selectedDevice}/messages`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization:
                `FlespiToken hcXnv9nl3OzlqewzXlOeu6dCvoO2LRTSTG4eEfnxUNGaP2yCccHu6IWrUyitfZaY`,
            },
          }
        );
        const json = await response.json();
        const rows = json.result.map((row) => ({
          ...row,
          timestamp: formatTimestamp(row.timestamp),
        }));
        setData(rows.reverse());
        setFilteredData(rows.reverse());
        
        console.log(rows);
      }
    };
    fetchData();
  }, [selectedDevice]);

  useEffect(() => {
    const { dateRange } = filterModel;
    const filteredRows = data.filter((row) => dateFilter({ row }, { value: dateRange }));
    setFilteredData(filteredRows.reverse());
    console.log(filteredRows);
  }, [filterModel, data]);

  useEffect(() => {
    const dynamicColumns = Object.keys(filteredData[0] || {}).map((key) => ({
      field: key,
      headerName: key,
      width: 200,
    }));
    setColumns(dynamicColumns);
    console.log(dynamicColumns);
  }, [filteredData, data]);
  
 
  const handleFilterModelChange = (model) => {
    setFilterModel(model);
  };

  const handleStartDateChange = (event) => {
    setFilterModel((prevModel) => ({
      ...prevModel,
      dateRange: {
        ...prevModel.dateRange,
        startDate: event.target.value,
      },
    }));
  };

  const handleEndDateChange = (event) => {
    setFilterModel((prevModel) => ({
      ...prevModel,
      dateRange: {
        ...prevModel.dateRange,
        endDate: event.target.value,
      },
    }));
  };

  const getRowId = (row) => {
    return `${row['device.id']}-${row['timestamp']}`;
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>

            <Autocomplete
              options={devices.map((option) => option.id.toString())}
              value={selectedDevice}
              onChange={handleDeviceSelection}
              renderInput={(params) => (
                <TextField {...params} label="Select Device"  variant="outlined" />
              )}
            />
          </Grid>
          <Grid item xs={12} md={4}>

            <TextField
              label="Start Date"
              type="datetime-local"
              value={filterModel.dateRange.startDate || ''}
              onChange={handleStartDateChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="End Date"
              type="datetime-local"
              value={filterModel.dateRange.endDate || ''}
              onChange={handleEndDateChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: '70vh', width: '100%' }}>
              <DataGrid
                getRowId={getRowId}
                rows={filteredData}
                columns={columns}
                filterModel={filterModel}
                onFilterModelChange={handleFilterModelChange}
                components={{
                  Toolbar: GridToolbar,
                }}
              />
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
