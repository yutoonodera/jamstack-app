"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PostsChart from "./components/PostsChart";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChurnChart from "./components/ChurnChart";

export default function HomePage() {
  const services = [
    {
      title: "ソフトウェア開発",
      description: "最新技術を活用し、お客様の課題を解決するソフトウェアを開発します。",
      href: "/services/software",
    },
    {
      title: "間借り",
      description: "弊社サイトのサーバ・システムを“間借り”するサービスです。",
      href: "/services/magari",
    },
    {
      title: "メール送信代行",
      description: "どんな内容でもご相談ください。",
      href: "/services/mail",
    },
  ];

  return (
    <>
      <Header />
      <main className="p-6 font-sans">
        {/* Top section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            なぜ「はじまり」が重要なのか
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-base sm:text-lg">
            どの企業にもチャーン率（解約率）は存在し、時間とともにユーザーは自然と減少していきます。
            成長を続けるためには、営業や広告に頼らない構造的な認知拡大が欠かせません。
          </p>

          {/* グラフ */}
          <div className="h-56 sm:h-64 mb-14"> {/* ← mb-10 → mb-14 に増やした */}
            <ChurnChart />
          </div>

          {/* リンク */}
          <div className="mt-40"> {/* ← mt-6 → mt-10 に増やした */}
            <Link
              href="/make-start"
              className="inline-block text-blue-600 font-medium hover:underline text-sm sm:text-base"
            >
              "はじまり"をつくるついて詳しく見る →
            </Link>
          </div>
        </section>

        {/* Services section */}
        <section id="services" className="max-w-6xl mx-auto mt-12 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
            事業内容
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="p-6 border rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow"
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

        {/* その他セクション */}
        <section className="mt-20">
          <ContactSection />
          <PostsChart />
        </section>
      </main>
      <Footer />
    </>
  );
}
