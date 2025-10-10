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
      description:
        "最新技術を活用し、お客様の課題を解決するソフトウェアを開発します。",
      href: "/services/software",
    },
    {
      title: "その他",
      description:
        "開発以外にも、「こんなことできる？」というご相談を歓迎しています。まずはお気軽にお話しください。",
        href: "/contact", // ← 「お問い合わせ」ページに変更
        buttonText: "お問い合わせはこちら",
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
          <div className="h-56 sm:h-64 mb-14">
            <ChurnChart />
          </div>

          {/* リンク */}
          <div className="mt-40">
            <Link
              href="/make-start"
              className="inline-block text-blue-600 font-medium hover:underline text-sm sm:text-base"
            >
              "はじまり"をつくるついて詳しく見る →
            </Link>
          </div>
        </section>

        {/* Services section */}
        <section id="services" className="max-w-5xl mx-auto mt-12 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-center">
            事業内容
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 place-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full sm:w-[90%] lg:w-[80%] p-8 border rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow text-center"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                {service.description}
              </p>

              {service.href && (
                <Link
                  href={service.href}
                  className="text-blue-600 font-medium hover:underline"
                >
                  {service.buttonText || "詳しく見る →"}
                </Link>
              )}
            </motion.div>
          ))}
          </div>
        </section>

        {/* その他セクション */}
        <section className="mt-20">
          <ContactSection />
          <PostsChart />
        </section>
        <section className="mt-24 text-center">
  {/* タイトル */}
  <h2 className="text-xl sm:text-2xl font-bold mb-4 flex justify-center items-center gap-2">
    🧠 マニアックなページ
  </h2>

  {/* 説明 */}
  <p className="text-gray-600 text-sm sm:text-base mb-10 max-w-2xl mx-auto leading-relaxed">
    開発の裏側、日々の気づき、思考の断片。
    moveeの“中の人”がふと書き残したメモのような場所です。
  </p>

  {/* リンクリスト（常に縦並び） */}
  <div className="flex flex-col items-center gap-6">
    {/* onody-log */}
    <div className="flex items-center gap-3 text-left max-w-md">
      <span className="text-2xl">📔</span>
      <div>
        <Link
          href="/onody-log"
          className="text-blue-600 font-medium hover:underline"
        >
          onody-log（日記）
        </Link>
        <p className="text-gray-500 text-sm mt-1">個人的な記録や考察など</p>
      </div>
    </div>

    {/* テックブログ */}
    <div className="flex items-center gap-3 text-left max-w-md">
      <span className="text-2xl">🧩</span>
      <div>
        <Link
          href="/tech-blog"
          className="text-blue-600 font-medium hover:underline"
        >
          テックブログ
        </Link>
        <p className="text-gray-500 text-sm mt-1">技術検証や実験的な投稿</p>
      </div>
    </div>
  </div>
</section>
      </main>
      <Footer />
    </>
  );
}
