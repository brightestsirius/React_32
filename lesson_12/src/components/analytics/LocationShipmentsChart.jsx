import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function LocationShipmentsChart({ location }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const chartData = months.map((month, index) => ({
    month,
    shipments: location.monthlyStats?.[index] || 0,
  }));

  return (
    <>
      <h4 className="text-sm font-semibold mb-4">Monthly shipments</h4>
      <ResponsiveContainer width="100%" height={200}>
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
