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
        change="+12.5%"
        changeLabel="vs previous 6 months"
        positive
      />
      <KpiCard
        label="Average rating"
        value={averageRating}
        change="+0.3"
        changeLabel="vs previous 6 months"
        positive
      />
      <KpiCard
        label="Active locations"
        value={activeLocations}
        change="+1"
        changeLabel="vs previous 6 months"
        positive
      />
    </div>
  );
}

function KpiCard({ label, value, change, changeLabel, positive }) {
  return (
    <div className="bg-white rounded-xl border border-border p-5">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
      <div className="flex items-center gap-1.5 mt-2">
        <span className={`text-xs font-medium flex items-center gap-0.5 ${positive ? "text-green-600" : "text-red-500"}`}>
          <TrendingUp className="size-3" />
          {change}
        </span>
        <span className="text-xs text-muted-foreground">{changeLabel}</span>
      </div>
    </div>
  );
}
