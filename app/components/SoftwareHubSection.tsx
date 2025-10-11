"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SoftwareHubSection() {
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
      title: "情報発信サイトを新しく作りたい方へ",
      description:
        "Next.jsやHeadless CMSを活用し、SEO・デザイン・運用性を兼ね備えた情報発信サイトを構築します。",
      href: "/services/software/media",
      buttonText: "詳しく見る",
    },
    {
      icon: "🛒",
      title: "ECサイト・予約システムを構築したい方へ",
      description:
        "Next.jsとStripeやShopify APIを活用し、スピードと柔軟性を両立したEC・予約システムを構築します。",
      href: "/services/software/ec",
      buttonText: "詳しく見る",
    },
    {
      icon: "📊",
      title: "データを見える化したい方へ",
      description:
        "Chart.jsやRechartsを用い、アクセス数や売上推移などをグラフで可視化。経営やマーケティングの意思決定を支援します。",
      href: "/services/software/analytics",
      buttonText: "詳しく見る",
    },
    {
        icon: "💬",
        title: "1時間単位で相談したい方へ",
        description:
          "開発・技術・システム企画に関するご相談を、1時間からご利用いただけます。要件整理や改善提案など、経営と開発の間をつなぎます。",
        href: "/services/software/consulting",
        buttonText: "詳しく見る",
    },
  ];


  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* ===== Hero（上部） ===== */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          ソフトウェア開発
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
        >
          貴社の立場・目的に応じたご案内をご用意しています。
        </motion.p>
      </div>

      {/* ===== Main Cards ===== */}
      <div className="mb-20">
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
      </div>

      {/* ===== Divider ===== */}
      <div className="relative my-16 text-center">
        <span className="relative bg-white px-4 text-gray-400 text-sm">
          認知拡大をご検討の方へ
        </span>
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 -z-10"></div>
      </div>

      {/* ===== Sub Cards ===== */}
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

      {/* ===== 下部 見出し ===== */}
      <div className="text-center mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          関連サービス
        </h2>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          既存サイトの改善や、情報発信の強化など、目的に合わせたご相談も可能です。
        </p>
      </div>
    </section>
  );
}
