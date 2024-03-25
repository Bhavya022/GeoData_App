// components/MapView.js
import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useMap } from 'react-leaflet';

const MapView = ({ geojsonData }) => {
  const mapRef = useRef();
  const map = useMap(mapRef);

  useEffect(() => {
    // Initialize Leaflet map
    if (map) {
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);
    }
  }, [map]);

  useEffect(() => {
    // Render GeoJSON data on the map
    if (map && geojsonData) {
      L.geoJSON(geojsonData).addTo(map);
    }
  }, [map, geojsonData]);

  return <div ref={mapRef} style={{ height: '500px' }} />;
};

export default MapView;
