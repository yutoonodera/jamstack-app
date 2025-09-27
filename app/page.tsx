"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PostsChart from "./components/PostsChart";
import ContactSection from "./components/ContactSection";
import AisasChart from "./components/AisasChart";


export default function HomePage() {
  const services = [
    {
      title: "ソフトウェア開発a",
      description: "最新技術を活用し、お客様の課題を解決するソフトウェアを開発します。",
      href: "/services/development",
    },
    {
      title: "アポ取得代行",
      description: "営業活動を効率化するためのアポイント取得を代行します。",
      href: "/services/appointment",
    },
    {
      title: "コンサルティング",
      description: "経営・システムに関する課題を解決するコンサルティングを行います。",
      href: "/services/consulting",
    },
  ];

  return (
    <main className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">moveeサイト</h1>

      {/* 事業紹介 */}
      <h1 className="text-2xl font-bold mb-4">AISASモデルの可視化（出典: Li, H., & Pan, Y. (2023)</h1>
      <AisasChart />
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">事業内容</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="p-6 border rounded-2xl shadow-sm bg-white"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={service.href}
                className="text-blue-600 font-medium hover:underline"
              >
                詳しく見る →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <ContactSection />
      {/* 投稿グラフ */}
      <PostsChart />
    </main>
  );
}
