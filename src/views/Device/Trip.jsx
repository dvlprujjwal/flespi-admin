import React, { useState, useEffect } from 'react';
import { GoogleMap, Polyline, Marker } from '@react-google-maps/api';
import { Typography, Card, CardContent } from '@material-ui/core';

const Trip = () => {
  const [trip, setTrip] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to call the API and set the trip state with the response
    const fetchTrip = async () => {
      try {
        const apiUrl = 'https://flespi.io/gw/devices/4804565/calculate';
        const headers = { 'Authorization': 'FlespiToken hcXnv9nl3OzlqewzXlOeu6dCvoO2LRTSTG4eEfnxUNGaP2yCccHu6IWrUyitfZaY' };
        const body = { 'calc_id': 1657374, 'from': 1672233891, 'to': 1672234072 };

        const response = await fetch(apiUrl, { method: 'POST', headers, body: JSON.stringify(body) });

        if (!response.ok) {
          setError('Failed to fetch trip data');
          return;
        }

        const data = await response.json();
        setTrip(data.result[0]);
      } catch (error) {
        setError('Failed to fetch trip data');
      }
    };

    fetchTrip();
  }, []);

  const mapContainerStyle = {
    height: '600px',
    width: '100%',
  };

  const center = trip?.points[0] ?? { lat: 0, lng: 0 };

  return (
    <div>
      <Card>
        <CardContent>
          {error && <Typography variant="h4" color="error">{error}</Typography>}
          {trip && (
            <>
              <Typography variant="h4">Trip Information</Typography>
              <Typography>Duration: {trip.duration} seconds</Typography>
              <Typography>Max Speed: {trip['max.speed']} km/h</Typography>
              <Typography>Avg Speed: {trip['avg.speed']} km/h</Typography>
              <br/>
              <br/>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Polyline
                  path={trip.points.map(point => ({ lat: point.lat, lng: point.lng }))}
                />
                <Marker position={{ lat: trip.points[0].lat, lng: trip.points[0].lng }} />
                <Marker position={{ lat: trip.points[trip.points.length - 1].lat, lng: trip.points[trip.points.length - 1].lng }} />
              </GoogleMap>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Trip;
