"use client";

import { motion } from "framer-motion";
import ContactSection from "../../../components/ContactSection";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function AnimatedTextSection() {
  const texts = [
    {
      text: "ソフトウェアは、あなたのビジネスを次のステージへ導く力があります。",
      type: "lead",
    },
    {
      text: "たとえばオープンデータを活用して、市場や競合の動きを可視化できます。",
      type: "normal",
    },
    {
      text: "自社データを組み合わせれば、顧客の行動や売上の傾向も分析できます。",
      type: "normal",
    },
    {
      text: "地図を使って、独自のマップを作ることもできます。",
      type: "normal",
    },
    {
      text: "もしあなたがカレー屋さんを経営しているとしましょう。",
      type: "scenario",
    },
    {
      text: "カレーの画像と「購入」ボタンを設置して、決済を組み込めば…",
      type: "scenario",
    },
    {
      text: "ネットショップが立ち上がります。",
      type: "scenario-strong",
    },
    {
      text: "つまり、アイデア次第でソフトウェアはビジネスの可能性を大きく広げられるのです。",
      type: "lead",
    },
    {
      text: "「ソフトウェアが御社のサービスをどう発展させられるか」",
      type: "highlight",
    },
    {
      text: "その第一歩を、私たちと一緒に考えてみませんか？",
      type: "lead",
    },
  ];

  return (
    <>
    <Header />
    <div className="space-y-14 p-8 leading-relaxed md:leading-loose">
      {texts.map((item, index) => {
        let className = "text-2xl md:text-3xl";
        if (item.type === "lead") className = "text-3xl md:text-4xl font-semibold text-gray-800";
        if (item.type === "highlight") className = "text-4xl md:text-5xl font-extrabold text-blue-600";
        if (item.type === "scenario") className = "text-2xl md:text-3xl text-gray-600";
        if (item.type === "scenario-strong") className = "text-3xl md:text-4xl font-bold text-gray-800";

        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={className}
          >
            {item.text}
          </motion.p>
        );
      })}
      <div className="mt-20">
        <ContactSection />
      </div>
    </div>
    <Footer />
    </>
  );
}
