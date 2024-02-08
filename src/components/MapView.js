import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
    return (
        <MapContainer center={[39.871801, 32.749975]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[39.871801, 32.749975]}>
                <Popup>Latitude: 39.871801, Longitude: 32.749975</Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapView;
