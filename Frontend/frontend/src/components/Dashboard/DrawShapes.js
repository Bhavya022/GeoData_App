// components/DrawShape.js
import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMapEvents } from 'react-leaflet';

const DrawShape = () => {
  const mapRef = useRef();
  const [drawnItems, setDrawnItems] = useState(null);

  useEffect(() => {
    // Initialize Leaflet Draw plugin
    const L = window.L;
    const drawnItems = new L.FeatureGroup();
    setDrawnItems(drawnItems);

    const drawControl = new L.Control.Draw({
      draw: {
        polygon: true,
        polyline: false,
        rectangle: true,
        circle: false,
        marker: false,
      },
      edit: {
        featureGroup: drawnItems,
        edit: false,
        remove: false,
      },
    });

    mapRef.current.leafletElement.addControl(drawControl);

    return () => {
      mapRef.current.leafletElement.removeControl(drawControl);
    };
  }, []);

  const onCreated = (event) => {
    const layer = event.layer;
    drawnItems.addLayer(layer);

    // Do something with the drawn shape, e.g., save it to state or send to backend
    console.log('Shape created:', layer.toGeoJSON());
  };

  return (
    <div>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: '400px', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <DrawEventsProvider onCreated={onCreated} />
        {drawnItems && <GeoJSON data={drawnItems.toGeoJSON()} />}
      </MapContainer>
    </div>
  );
};

// A custom component to handle draw events
const DrawEventsProvider = ({ onCreated }) => {
  const map = useMapEvents({
    'draw:created': (event) => {
      onCreated(event);
    },
  });

  return null;
};

export default DrawShape;
