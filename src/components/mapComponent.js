import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function MapComponent({cities}) {
    const [L, setL] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('leaflet').then(module => {
                setL(module.default);
            });
        }
    }, []);

    function customIcon(url) {
        return L && L.icon({
            iconUrl: url,
            iconSize: [40, 40],
            iconAnchor: [12, 41],
            popupAnchor: [0, -41],
        });
    }

    return (
        <MapContainer center={[39.50, -98.35]} zoom={4} style={{ height: "75vh", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {L && cities.map((city, idx) => (
                <Marker key={idx} position={city.location} icon={customIcon(city.iconUrl)}>
                    <Popup>
                        {city.name}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default MapComponent;
