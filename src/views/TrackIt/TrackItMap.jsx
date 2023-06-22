import React, { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet-geometryutil';
import 'leaflet.marker.slideto';
import 'leaflet.polyline.snakeanim';
import 'leaflet.polylinemeasure';
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';
import {
  Autocomplete,
  Box,
  TextField,
  Card,
  CardContent,
  Slider,
  Select,
  MenuItem,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CarIcon from '../../assets/images/CarIcon.svg';

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: '800px',
    width: '100%',
    marginBottom: theme.spacing(3),
  },
}));

const TrackItMap = () => {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [coordinates, setCoordinates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1000);

  const mapRef = useRef(null);
  const classes = useStyles();

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
      alert('Failed to fetch devices');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDeviceData();
  }, [fetchDeviceData]);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedDevice && fromDate && toDate) {
        try {
          const currentTime = new Date();
          const last24Hours = new Date(currentTime.getTime() - 24 * 60 * 60 * 1000);
          const fromTimestamp = fromDate ? Math.floor(fromDate.getTime() / 1000) : Math.floor(last24Hours.getTime() / 1000);
          const toTimestamp = toDate ? Math.floor(toDate.getTime() / 1000) : Math.floor(currentTime.getTime() / 1000);
          const response = await fetch(`https://flespi.io/gw/devices/${selectedDevice}/messages?data={"fields":"position.latitude,position.longitude,timestamp","from":${fromTimestamp},"to":${toTimestamp}}`, {
            headers: {
              Authorization: 'FlespiToken Yeeuz0r2h9QSeLqc1kYRSa3E1qKycLG1QKldyA3FxKnBjCDbKsQsqHVhVvEY78PL',
            },
          });
          const data = await response.json();
          if (response.ok) {
            const coordinates = data.result
              .filter((item) => item['position.latitude'] && item['position.longitude'])
              .map((item) => [item['position.latitude'], item['position.longitude']]);
            setCoordinates(coordinates);
          } else {
            console.error('Error:', data);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    fetchData();
  }, [selectedDevice, fromDate, toDate]);

  useEffect(() => {
    let playbackTimer;

    const startPlayback = () => {
      playbackTimer = setInterval(() => {
        setCurrentPositionIndex((prevIndex) => prevIndex + 1);

      }, playbackSpeed);
    };

    const stopPlayback = () => {
      clearInterval(playbackTimer);
    };

    if (isPlaying) {
      startPlayback();
    } else {
      stopPlayback();
    }

    return () => {
      stopPlayback();
    };
  }, [isPlaying, playbackSpeed]);

  const lerp = (start, end, t) => {
    return start + t * (end - start);
  };

  const getMarkerPosition = () => {
    const currentIndex = Math.floor(currentPositionIndex);
    const nextIndex = Math.ceil(currentPositionIndex);
    const t = currentPositionIndex - currentIndex;

    const currentCoordinate = coordinates[currentIndex];
    const nextCoordinate = coordinates[nextIndex];

    const latitude = lerp(currentCoordinate[0], nextCoordinate[0], t);
    const longitude = lerp(currentCoordinate[1], nextCoordinate[1], t);

    return [latitude, longitude];
  };

  const handleDeviceSelection = (event, value) => {
    setSelectedDevice(value);
  };

  const handleSpeedChange = (event, value) => {
    setPlaybackSpeed(value);
  };

  const handlePlayPauseToggle = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const ChangeView = ({ center, zoom }) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const carMarkerIcon = L.icon({
    iconUrl: CarIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

  const limeOptions = { color: 'black' };

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
                onChange={(date) => setFromDate(date.toDate())}
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

          <div className={classes.mapContainer}>
            <MapContainer
              center={[0, 0]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
              whenCreated={(map) => (mapRef.current = map)}
            >
              <ChangeView center={[28.562733, 77.068047]} zoom={15} />
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="Map data © <a href=&quot;https://openstreetmap.org&quot;>OpenStreetMap</a> contributors"
              />
              <Polyline pathOptions={limeOptions} positions={coordinates} />
              {coordinates.length > 0 && (
                <Marker position={getMarkerPosition()} icon={carMarkerIcon}>
                  <Popup>A marker</Popup>
                </Marker>
              )}
            </MapContainer>
          </div>

          <Box display="flex" alignItems="center" mt={2}>
            <Slider
              value={playbackSpeed}
              min={100}
              max={2000}
              step={100}
              onChange={handleSpeedChange}
              disabled={!selectedDevice || !fromDate || !toDate}
              style={{ width: '200px', marginRight: '16px' }}
            />
            <Select
              value={isPlaying ? 'play' : 'pause'}
              onChange={handlePlayPauseToggle}
              disabled={!selectedDevice || !fromDate || !toDate}
            >
              <MenuItem value="play">Play</MenuItem>
              <MenuItem value="pause">Pause</MenuItem>
            </Select>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrackItMap;
