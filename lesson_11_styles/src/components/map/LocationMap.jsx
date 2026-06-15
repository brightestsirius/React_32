import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function LocationMap({ location }) {
  if (!location) return null;

  const position = [location.lat, location.lng];

  return (
    <MapContainer
      center={position}
      zoom={14}
      style={{
        height: "300px",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position}>
        <Popup>
          <strong>{location.name}</strong>
          <br />
          {location.address}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
