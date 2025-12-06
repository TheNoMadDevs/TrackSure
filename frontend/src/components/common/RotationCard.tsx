import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RotateCw } from "lucide-react";

interface RotationData {
  time: any;
  rotation: number;
}

interface RotationCardProps {
  currentRotation: number;
  data: RotationData[];
}

const RotationCard = ({ currentRotation, data }: RotationCardProps) => {
  const formatTime = (timestamp: any) => {
    if (timestamp && timestamp.toDate) {
      return timestamp.toDate().toLocaleTimeString();
    }
    return new Date(timestamp).toLocaleTimeString();
  };

  const chartData = data
    .map((item) => ({
      time: formatTime(item.time),
      rotation: item.rotation,
    }))
    .slice(-10);

  const isRotated = currentRotation === 1;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 p-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <RotateCw className="h-5 w-5 text-indigo-600 mr-2" />
          <h3 className="text-lg font-semibold text-white">
            Rotation Status - Maximum 90°
          </h3>
        </div>
        <div className="text-right">
          <p
            className={`text-2xl font-bold ${
              isRotated ? "text-red-600" : "text-green-600"
            }`}
          >
            {isRotated ? "ROTATED" : "NORMAL"}
          </p>
          <p className="text-sm text-gray-500">
            {isRotated ? "Alert!" : "Stable"}
          </p>
        </div>
      </div>

      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              tick={{ fontSize: 10 }}
              interval="preserveStartEnd"
            />
            <YAxis
              tick={{ fontSize: 10 }}
              domain={[0, 1]}
              ticks={[0, 1]}
              tickFormatter={(value) => (value === 0 ? "Normal" : "Rotated")}
            />
            <Tooltip
              labelFormatter={(label) => `Time: ${label}`}
              formatter={(value) => [
                value === 0 ? "Normal" : "Rotated",
                "Rotation Status",
              ]}
            />
            <Line
              type="step"
              dataKey="rotation"
              stroke="#4f46e5"
              strokeWidth={2}
              dot={{ fill: "#4f46e5", strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RotationCard;
