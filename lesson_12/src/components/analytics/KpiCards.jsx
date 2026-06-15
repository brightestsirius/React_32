import { TrendingUp } from "lucide-react";

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

  const activeLocations = locations.filter((l) => l.active !== false).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <KpiCard
        label="Total shipments"
        value={totalShipments.toLocaleString()}
      />
      <KpiCard
        label="Average rating"
        value={averageRating}
      />
      <KpiCard
        label="Active locations"
        value={activeLocations}
      />
    </div>
  );
}

function KpiCard({ label, value }) {
  return (
    <div className="bg-white rounded-xl border border-border p-5">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}
