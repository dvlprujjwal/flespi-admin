import React, { useState, useEffect, useCallback } from 'react';
import {
  Autocomplete,
  Box,
  TextField,
  Card,
  CardContent,
  CircularProgress,
  Button,
} from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Icon } from 'leaflet';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const carIcon = new Icon({
  iconUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoo8N-M9-7Kw4yVsOWoqdyLMVHL008mz6kA&usqp=CAU',
  iconSize: [70, 50],
  iconAnchor: [19, 38],
});

const MapComponent = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [deviceLocation, setDeviceLocation] = useState(null);
  const [deviceLocationHistory, setDeviceLocationHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [trips, setTrips] = useState([]);
  const [isPlaybackActive, setIsPlaybackActive] = useState(false);
  const [currentPlaybackIndex, setCurrentPlaybackIndex] = useState(0);
  // const [playbackSpeed, setPlaybackSpeed] = useState(1000); 

  const fetchData = useCallback(async () => {
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
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const fetchDeviceLocation = async () => {
      if (selectedDevice !== null) {
        try {
          let endpoint = `https://flespi.io/gw/devices/${selectedDevice}/telemetry/all`;

          if (deviceLocationHistory.length > 0) {
            const fromDate = deviceLocationHistory[0].timestamp;
            const toDate = deviceLocationHistory[deviceLocationHistory.length - 1].timestamp;
            endpoint = `https://flespi.io/gw/devices/${selectedDevice}/telemetry/history?from=${fromDate}&to=${toDate}`;
          }

          const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'FlespiToken Yeeuz0r2h9QSeLqc1kYRSa3E1qKycLG1QKldyA3FxKnBjCDbKsQsqHVhVvEY78PL',
            },
          });

          const locationData = await response.json();
          if (locationData.result && locationData.result.length > 0) {
            const lastTelemetry = locationData.result[0].telemetry;
            if (lastTelemetry) {
              setDeviceLocation(lastTelemetry.position.value);
              setDeviceLocationHistory(locationData.result.map((item) => item.telemetry.position.value));
            } else {
              setDeviceLocation(null);
              setDeviceLocationHistory([]);
            }
          } else {
            setDeviceLocation(null);
            setDeviceLocationHistory([]);
          }
        } catch (error) {
          setError(error.message);
        }
      }
    };

    // Fetch location initially
    const interval = setInterval(fetchDeviceLocation, 5000);
    // Fetch location every 5 seconds
    return () => clearInterval(interval);
  }, [selectedDevice, deviceLocationHistory]);

  useEffect(() => {
    const fetchTrips = async () => {
      if (selectedDevice && fromDate && toDate) {
        try {
          const fromTimestamp = fromDate ? Math.floor(fromDate.getTime() / 1000) : null;
          const toTimestamp = toDate ? Math.floor(toDate.getTime() / 1000) : null;

          if (fromTimestamp && toTimestamp) {
            const response = await fetch(
              `https://flespi.io/gw/devices/${selectedDevice}/trips?from=${fromTimestamp}&to=${toTimestamp}`,
              {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  Authorization: 'FlespiToken Yeeuz0r2h9QSeLqc1kYRSa3E1qKycLG1QKldyA3FxKnBjCDbKsQsqHVhVvEY78PL',
                },
              }
            );
            const tripData = await response.json();
            setTrips(tripData.result);
          }
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchTrips();
  }, [selectedDevice, fromDate, toDate]);

  const handleDeviceSelection = (event, value) => {
    setSelectedDevice(value);
    setDeviceLocation(null);
    setDeviceLocationHistory([]);
    setTrips([]);
  };

  const handlePlayback = () => {
    if (!isPlaybackActive) {
      setCurrentPlaybackIndex(0);
      setIsPlaybackActive(true);
    } else {
      setIsPlaybackActive(false);
    }
  };

  useEffect(() => {
    const fetchTrips = async () => {
      if (selectedDevice && fromDate && toDate) {
        try {
          const fromTimestamp = fromDate ? Math.floor(fromDate.getTime() / 1000) : null;
          const toTimestamp = toDate ? Math.floor(toDate.getTime() / 1000) : null;

          if (fromTimestamp && toTimestamp) {
            const response = await fetch(
              `https://flespi.io/gw/devices/${selectedDevice}/trips?from=${fromTimestamp}&to=${toTimestamp}`,
              {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  Authorization: 'FlespiToken Yeeuz0r2h9QSeLqc1kYRSa3E1qKycLG1QKldyA3FxKnBjCDbKsQsqHVhVvEY78PL',
                },
              }
            );
            const tripData = await response.json();
            setTrips(tripData.result);
          }
        } catch (error) {
          setError(error.message);
        }
      }
    };

    fetchTrips();
  }, [selectedDevice, fromDate, toDate]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '20%' }}>
              <Autocomplete
                options={devices.map((option) => option.id.toString())}
                value={selectedDevice}
                onChange={handleDeviceSelection}
                renderInput={(params) => (
                  <TextField {...params} label="Select Device" margin="normal" variant="outlined" />
                )}
              />
            </div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={fromDate}
                onChange={(date) =>  setFromDate(date.toDate())}
                renderInput={(params) => (
                  <TextField {...params} label="From Date" margin="normal" variant="outlined" />
                )}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={toDate}
                onChange={(date) => setToDate(date.toDate())}
                renderInput={(params) => (
                  <TextField {...params} label="To Date" margin="normal" variant="outlined" />
                )}
              />
            </LocalizationProvider>
          </Box>
          <MapContainer
            center={deviceLocation ? [deviceLocation.latitude, deviceLocation.longitude] : [28.5823, 77.0500]}
            zoom={13}
            style={{ width: '100%', height: 600 }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="Map data © OpenStreetMap contributors"
            />
            {deviceLocationHistory.length > 0 && (
              <Polyline
                pathOptions={{ color: 'blue' }}
                positions={deviceLocationHistory.map((loc) => [loc.latitude, loc.longitude])}
              />
            )}
            {deviceLocation && (
              <Marker position={[deviceLocation.latitude, deviceLocation.longitude]} icon={carIcon}>
                <Popup>
                  Device ID: {selectedDevice} <br />
                  Latitude: {deviceLocation.latitude} <br />
                  Longitude: {deviceLocation.longitude}
                </Popup>
              </Marker>
            )}
            {trips.map((trip, index) => (
              <Polyline
                key={index}
                pathOptions={{ color: 'red' }}
                positions={trip.history.map((location) => [location.latitude, location.longitude])}
              />
            ))}
            {isPlaybackActive && trips.length > 0 && (
              <Marker
                position={[
                  trips[currentPlaybackIndex].history[0].latitude,
                  trips[currentPlaybackIndex].history[0].longitude,
                ]}
                icon={carIcon}
              >
                <Popup>
                  Trip: {currentPlaybackIndex + 1} <br />
                  Start Time: {trips[currentPlaybackIndex].start_time} <br />
                  End Time: {trips[currentPlaybackIndex].end_time}
                </Popup>
              </Marker>
            )}
          </MapContainer>
          <Button variant="contained" onClick={handlePlayback} disabled={!trips.length}>
            {isPlaybackActive ? 'Stop Playback' : 'Start Playback'}
          </Button>
        </CardContent>
        <div>
          <p>play</p>
          <p>pause</p>
          <p>speed</p>
          <p>Message</p>
        </div>
      </Card>
    </div>
  );
};

export default MapComponent;
