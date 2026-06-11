import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

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
      <h4>Shipments by Month</h4>
      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />

            <Line type="monotone" dataKey="shipments" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
