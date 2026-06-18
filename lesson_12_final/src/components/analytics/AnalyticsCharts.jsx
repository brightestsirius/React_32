import ShipmentsLineChart from "./ShipmentsLineChart";
import TopLocationsBarChart from "./TopLocationsBarChart";
import LocationTypesPieChart from "./LocationTypesPieChart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AnalyticsCharts({ locations }) {
  return (
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
  );
}
