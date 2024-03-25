// services/mapService.js

import L from 'leaflet';

// Function to initialize a Leaflet map
export const initializeMap = (mapContainerId, initialCenter, initialZoom) => {
  const map = L.map(mapContainerId).setView(initialCenter, initialZoom);

  // Add a tile layer (e.g., OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  return map;
};

// Function to draw a shape (e.g., polygon) on the map
export const drawShape = (map, shapeCoordinates) => {
  // Example: Draw a polygon
  const polygon = L.polygon(shapeCoordinates, { color: 'blue' }).addTo(map);

  return polygon;
};

// Add more map-related functions as needed (e.g., removeShape, updateShape, etc.)
