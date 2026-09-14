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

type RevenueData = {
  month: string;
  revenue: number;
};

type RevenueChartProps = {
  data: RevenueData[];
};

export default function RevenueChart({ data }: RevenueChartProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Revenue Overview</h2>

      <p className="mt-1 text-sm text-slate-500">Monthly revenue performance</p>

      <div className="mt-6 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
