import { useLocations } from "../hooks/useLocations";
import KpiCards from "../components/analytics/KpiCards";
import AnalyticsCharts from "../components/analytics/AnalyticsCharts";

export default function AnalyticsRoute() {
  const { data: locations = [], isLoading, isError, error } = useLocations();

  if (isLoading) return <p className="text-muted-foreground text-sm">Loading analytics...</p>;
  if (isError) return <p className="text-destructive text-sm">{error.message}</p>;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold">Analytics</h1>
        <p className="text-sm text-muted-foreground">Overview of locations performance</p>
      </div>

      <KpiCards locations={locations} />
      <AnalyticsCharts locations={locations} />
    </div>
  );
}
