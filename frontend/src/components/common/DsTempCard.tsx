import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Thermometer } from "lucide-react";

interface DsTempData {
  time: any;
  dsTemp: number;
}

interface DsTempCardProps {
  currentDsTemp: number;
  data: DsTempData[];
}

const DsTempCard = ({ currentDsTemp, data }: DsTempCardProps) => {
  const formatTime = (timestamp: any) => {
    if (timestamp && timestamp.toDate) {
      return timestamp.toDate().toLocaleTimeString();
    }
    return new Date(timestamp).toLocaleTimeString();
  };

  const chartData = data
    .map((item) => ({
      time: formatTime(item.time),
      dsTemp: item.dsTemp,
    }))
    .slice(-10);

  return (
    <div className="rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 p-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Thermometer className="h-5 w-5 text-purple-600 mr-2" />
          <h3 className="text-lg font-semibold text-white">
            Fluid Temperature
          </h3>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-purple-600">
            {currentDsTemp}°C
          </p>
          <p className="text-sm text-gray-500">Current</p>
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
            <YAxis tick={{ fontSize: 10 }} />
            <Tooltip
              labelFormatter={(label) => `Time: ${label}`}
              formatter={(value) => [`${value}°C`, "DS Temperature"]}
            />
            <Line
              type="monotone"
              dataKey="dsTemp"
              stroke="#9333ea"
              strokeWidth={2}
              dot={{ fill: "#9333ea", strokeWidth: 2, r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DsTempCard;
