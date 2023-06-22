import React from "react";
import GoogleMapReact from 'google-map-react';
import { Card, CardContent } from '@mui/material';

export default function Map() {

  const delhiCoords = {
    lat: 28.7041,
    lng: 77.1025
  };

  const upCoords = {
    lat: 26.8467,
    lng: 80.9462
  };

  const gujaratCoords = {
    lat: 22.2587,
    lng: 71.1924
  };

  return (
    <Card>
      <CardContent style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyANbW-9KNFEHbrycu4u-axIqB9tApzgZLs",
            language: "en",
            region: "US",
          }}
          defaultCenter={
            { lat: 20.5937, lng: 78.9629 }
          }
          defaultZoom={5}
        >
          <Marker
            lat={delhiCoords.lat}
            lng={delhiCoords.lng}
            text="Delhi"
            style={{ backgroundColor: 'red' }}
          />
          <Marker
            lat={upCoords.lat}
            lng={upCoords.lng}
            text="Uttar Pradesh"
            style={{ backgroundColor: 'red' }}
          />
          <Marker
            lat={gujaratCoords.lat}
            lng={gujaratCoords.lng}
            text="Gujarat"
            style={{ backgroundColor: 'red' }}
          />
        </GoogleMapReact>
      </CardContent>
    </Card>
  );
}

const Marker = ({ text, style }) => (
  <div style={{ fontWeight: 'bold', ...style }}>
    {text}
  </div>
);
