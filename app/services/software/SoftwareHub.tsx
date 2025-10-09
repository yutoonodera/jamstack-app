"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function SoftwareHub() {
  const mainCards = [
    {
      icon: "🧑‍💼",
      title: "自社の課題解決をお考えの企業様へ",
      description:
        "ビジネスのアイデアや課題を、システム開発で形にします。市場の可視化、データ活用、決済など柔軟に対応可能です。",
      href: "/services/software/end-user",
      buttonText: "詳しく見る",
    },
    {
      icon: "🤝",
      title: "開発パートナーをお探しの企業様へ",
      description:
        "マーケ・デザイン・制作会社様の裏側で開発を支えるパートナーとして協業可能です。要件定義〜開発〜運用まで対応します。",
      href: "/services/software/partner",
      buttonText: "パートナーの方へ",
    },
    {
      icon: "🤲",
      title: "非営利団体・NPOの皆様へ",
      description:
        "小規模でも運用しやすいウェブサイトや会員管理システムなど、目的と予算に合わせて柔軟にご提案します。",
      href: "/services/software/nonprofit",
      buttonText: "詳しく見る",
    },
  ];

  const subCards = [
    {
      icon: "📰",
      title: "WordPressを運用中の企業様へ",
      description:
        "既存のWordPressサイトの高速化・セキュリティ強化・Jamstack化など、運用基盤の改善や保守運用をサポートします。",
      href: "/services/software/wordpress",
      buttonText: "詳しく見る",
    },
    {
      icon: "🌐",
      title: "情報発信サイトを新しく作りたい企業様へ",
      description:
        "Next.jsやHeadless CMSを活用し、SEO・デザイン・運用性を兼ね備えた情報発信サイトを構築します。",
      href: "/services/software/media",
      buttonText: "詳しく見る",
    },
  ];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Hero */}
        <section className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            ソフトウェアの力で、ビジネスを前へ。
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-gray-600"
          >
            自社の課題解決にも、パートナーとしての協業にも対応しています。
          </motion.p>
        </section>

        {/* Main Cards */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">
           貴社の立場・目的に応じたご案内をご用意しています
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {mainCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-start justify-between rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <Link
                  href={card.href}
                  className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  {card.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="relative my-16 text-center">
          <span className="relative bg-white px-4 text-gray-400 text-sm">
            より具体的なニーズをお持ちの方はこちら
          </span>
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 -z-10"></div>
        </div>

        {/* Sub Cards */}
        <section>
          <div className="grid gap-8 sm:grid-cols-2">
            {subCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col items-start justify-between rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <div>
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <Link
                  href={card.href}
                  className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  {card.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
