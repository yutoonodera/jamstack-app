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
import Link from "next/link";

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
      <h2 className="text-xl font-bold mb-2">月別ブログ投稿数</h2>
      <p className="text-sm text-gray-500 mb-6">
        すべてのブログ合算数になります。（
        <Link href="/tech-blog" className="text-blue-600 hover:underline">
          テックブログ
        </Link>
        ）
      </p>

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
