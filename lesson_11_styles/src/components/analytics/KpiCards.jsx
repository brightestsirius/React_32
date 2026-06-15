export default function KpiCards({ locations }) {
  const totalLocations = locations.length;

  const totalShipments = locations.reduce(
    (sum, location) => sum + (location.shipments || 0),
    0,
  );

  const averageRating = locations.length
    ? (
        locations.reduce((sum, location) => sum + (location.rating || 0), 0) /
        locations.length
      ).toFixed(1)
    : 0;

  return (
    <div className="kpi">
      <div className="kpi__card">
        <h4>Total Locations</h4>
        <p>{totalLocations}</p>
      </div>

      <div className="kpi__card">
        <h4>Total Shipments</h4>
        <p>{totalShipments}</p>
      </div>

      <div className="kpi__card">
        <h4>Average Rating</h4>
        <p>{averageRating}</p>
      </div>
    </div>
  );
}
