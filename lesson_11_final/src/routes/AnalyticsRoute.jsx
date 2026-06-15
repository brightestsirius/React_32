import { useLocations } from "../hooks/useLocations";
import KpiCards from "../components/analytics/KpiCards";
import ShipmentsLineChart from "../components/analytics/ShipmentsLineChart";
import TopLocationsBarChart from "../components/analytics/TopLocationsBarChart";
import LocationTypesPieChart from "../components/analytics/LocationTypesPieChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

      <Tabs defaultValue="overview">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="types">Types</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="bg-white rounded-xl border border-border p-6">
            <ShipmentsLineChart locations={locations} />
          </div>
        </TabsContent>

        <TabsContent value="locations">
          <div className="bg-white rounded-xl border border-border p-6">
            <TopLocationsBarChart locations={locations} />
          </div>
        </TabsContent>

        <TabsContent value="types">
          <div className="bg-white rounded-xl border border-border p-6">
            <LocationTypesPieChart locations={locations} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
