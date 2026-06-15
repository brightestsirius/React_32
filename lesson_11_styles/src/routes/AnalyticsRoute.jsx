import { useLocations } from "../hooks/useLocations";

import KpiCards from "../components/analytics/KpiCards";
import ShipmentsLineChart from "../components/analytics/ShipmentsLineChart";
import TopLocationsBarChart from "../components/analytics/TopLocationsBarChart";
import LocationTypesPieChart from "../components/analytics/LocationTypesPieChart";

export default function AnalyticsRoute() {
  const { data: locations = [], isLoading, isError, error } = useLocations();

  if (isLoading) {
    return <p>Loading analytics...</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <h3>Analytics Route</h3>

      <KpiCards locations={locations} />
      <hr />
      <ShipmentsLineChart locations={locations} />
      <TopLocationsBarChart locations={locations} />
      <LocationTypesPieChart locations={locations} />
    </>
  );
}
