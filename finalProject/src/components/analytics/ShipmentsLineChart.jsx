import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function ShipmentsLineChart({ locations }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const chartData = months.map((month, index) => ({
    month,
    shipments: locations.reduce(
      (sum, location) => sum + (location.monthlyStats?.[index] || 0),
      0,
    ),
  }));

  return (
    <>
      <h4 className="text-sm font-semibold mb-4">Shipments by month</h4>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 11 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip
            contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
          />
          <Line
            type="monotone"
            dataKey="shipments"
            stroke="oklch(0.546 0.215 262.88)"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
