import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function TopLocationsBarChart({ locations }) {
  const chartData = [...locations]
    .sort((a, b) => b.shipments - a.shipments)
    .slice(0, 5)
    .map((location) => ({
      name: location.name,
      shipments: location.shipments,
    }));

  return (
    <>
      <h4>Top Locations by Shipments</h4>
      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="shipments" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
