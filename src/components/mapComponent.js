import React from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function MapComponent({cities}) {
    
    function customIcon(url) {
        return L.icon({
          iconUrl: url,
          iconSize: [40, 40], // size of the icon, adjust as needed
          iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
          popupAnchor: [0, -41], // point from which the popup should open relative to the iconAnchor
        });
      }
      

  return (
    <MapContainer center={[39.50, -98.35]} zoom={4} style={{ height: "75vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cities.map((city, idx) => (
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
