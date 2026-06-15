import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapBoundsHandler from "./MapBoundsHandler";

export default function LocationsMap({ locations, onBoundsChange }) {
  return (
    <MapContainer
      center={[50.4501, 30.5234]}
      zoom={6}
      style={{
        height: "500px",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapBoundsHandler onBoundsChange={onBoundsChange} />

      {locations.map((location) => (
        <Marker key={location.id} position={[location.lat, location.lng]}>
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
