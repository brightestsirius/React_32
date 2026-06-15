import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

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
      <h4 className="text-sm font-semibold mb-4">Top locations by shipments</h4>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 11 }} />
          <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={120} />
          <Tooltip
            contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
          />
          <Bar dataKey="shipments" fill="oklch(0.546 0.215 262.88)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
