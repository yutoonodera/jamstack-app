"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChurnChart = () => {
  // 各業種の残存数（2019年＝100人とした場合の推移）
  const years = ["2019", "2020", "2021", "2022", "2023", "2024", "2025"]; // ← 2025 を削除して7年分に統一

  const datasets = [
    {
      label: "BtoB SaaS（優良：年5%）",
      data: [100, 95, 90, 86, 82, 78, 74],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.3)",
    },
    {
      label: "BtoB SaaS（平均：年10%）",
      data: [100, 90, 81, 73, 66, 59, 53],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.3)",
    },
    {
      label: "BtoC サブスク（年30%）",
      data: [100, 70, 49, 34, 24, 17, 12],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.3)",
    },
    {
      label: "無料アプリ・Web（年40%）",
      data: [100, 60, 36, 22, 13, 8, 5],
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.3)",
    },
    {
      label: "EC・小売（年20%）",
      data: [100, 80, 64, 51, 41, 33, 26],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.3)",
    },
  ];

  const data = {
    labels: years,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: {
        display: true,
        text: "業種別：ユーザー残存数の推移（2019年＝100人）",
        font: { size: 18 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (val: any) => `${val}人`,
        },
        title: {
          display: true,
          text: "残存数",
        },
      },
    },
  };

  return (
    <div className="my-8">
      <Line data={data} options={options} />
      <p className="text-xs text-gray-500 mt-2 text-center leading-relaxed">
        出典：ProfitWell, Pacific Crest, Shopify, RJMetrics, Zuora, Recurly, Localytics, Mixpanel など
        ※各業種のチャーン率は代表的な業界平均値をもとに算出（概算）
      </p>
    </div>
  );
};

export default ChurnChart;
