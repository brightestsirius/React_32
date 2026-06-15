import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

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
      <h4>Locations by Type</h4>
      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="type"
              outerRadius={100}
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={entry.type} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
