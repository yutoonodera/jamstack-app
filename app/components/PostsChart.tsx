"use client";

import { useEffect, useState } from "react";
import { getMonthlyCounts, MonthlyCount } from "../lib/getMonthlyCounts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function PostsChart() {
  const [data, setData] = useState<MonthlyCount[]>([]);

  useEffect(() => {
    getMonthlyCounts().then(setData);
  }, []);

  const chartData = data.map((d) => ({
    name: `${d.year}/${d.month}`,
    投稿数: d.count,
  }));

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-2">月別投稿数</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="投稿数" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
