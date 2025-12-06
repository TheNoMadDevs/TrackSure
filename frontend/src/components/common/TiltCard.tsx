import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RotateCcw } from "lucide-react";

interface TiltData {
  time: any;
  tilt: number;
}

interface TiltCardProps {
  currentTilt: number;
  data: TiltData[];
}

const TiltCard = ({ currentTilt, data }: TiltCardProps) => {
  const formatTime = (timestamp: any) => {
    if (timestamp && timestamp.toDate) {
      return timestamp.toDate().toLocaleTimeString();
    }
    return new Date(timestamp).toLocaleTimeString();
  };

  const chartData = data
    .map((item) => ({
      time: formatTime(item.time),
      tilt: item.tilt,
    }))
    .slice(-10);

  const isTilted = currentTilt === 1;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 p-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <RotateCcw className="h-5 w-5 text-orange-600 mr-2" />
          <h3 className="text-lg font-semibold text-white">
            Tilt Status - Maximum 30°
          </h3>
        </div>
        <div className="text-right">
          <p
            className={`text-2xl font-bold ${
              isTilted ? "text-red-600" : "text-green-600"
            }`}
          >
            {isTilted ? "TILTED" : "NORMAL"}
          </p>
          <p className="text-sm text-gray-500">
            {isTilted ? "Alert!" : "Stable"}
          </p>
        </div>
      </div>

      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
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
              tickFormatter={(value) => (value === 0 ? "Normal" : "Tilted")}
            />
            <Tooltip
              labelFormatter={(label) => `Time: ${label}`}
              formatter={(value) => [
                value === 0 ? "Normal" : "Tilted",
                "Tilt Status",
              ]}
            />
            <Area
              type="step"
              dataKey="tilt"
              stroke="#ea580c"
              fill="#fed7aa"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TiltCard;
