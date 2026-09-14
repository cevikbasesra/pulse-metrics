"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type UserGrowthData = {
  month: string;
  users: number;
};

type UserGrowthChartProps = {
  data: UserGrowthData[];
};

export default function UserGrowthChart({ data }: UserGrowthChartProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">User Growth</h2>

      <p className="mt-1 text-sm text-slate-500">Monthly new users</p>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
