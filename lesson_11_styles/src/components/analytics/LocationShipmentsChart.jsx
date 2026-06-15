import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function LocationShipmentsChart({ location }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const chartData = months.map((month, index) => ({
    month,
    shipments: location.monthlyStats?.[index] || 0,
  }));

  return (
    <>
      <h4>Shipments History</h4>

      <LineChart width={700} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="month" />

        <YAxis />

        <Tooltip />

        <Line type="monotone" dataKey="shipments" />
      </LineChart>
    </>
  );
}
