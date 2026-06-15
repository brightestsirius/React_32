import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from "recharts";

const COLORS = ["oklch(0.546 0.215 262.88)", "#22c55e", "#f59e0b"];

export default function LocationTypesPieChart({ locations }) {
  const typesMap = locations.reduce((acc, location) => {
    acc[location.type] = (acc[location.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(typesMap).map(([type, count]) => ({
    type,
    count,
  }));

  return (
    <>
      <h4 className="text-sm font-semibold mb-4">Locations by type</h4>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="type"
            outerRadius={100}
            label={({ type, percent }) => `${type} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {chartData.map((entry, index) => (
              <Cell key={entry.type} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
          />
          <Legend formatter={(value) => <span style={{ fontSize: 12 }}>{value}</span>} />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
