"use client";

import { motion } from "framer-motion";
import ContactSection from "../../components/ContactSection"; // パスは適宜調整
import PostsList from "../../components/PostsList";

export default function AnimatedTextSection() {
  const texts = [
    "ソフトウェアは様々なことができます。",
    "例えばオープンデータを活用して市場を可視化できます。",
    "あるいは自社データの活用で顧客分析ができるかもしれません。",
    "例えばmapを使って独自マップが作れます。",
    "カレー屋さんを経営してるとしましょう。カレーの画像と購入するボタンを貼って決済処理を作ればネットショップができます。",
    "「ソフトウェアが御社のサービスをどう発展させられるか」",
    "いっしょに考えるところから始めさせてください。",
  ];

  return (
    <div className="space-y-16 p-8 text-3xl md:text-4xl leading-loose">
      {texts.map((text, index) => {
        // 特定の文章だけ特別スタイル
        const isHighlight = text === "「ソフトウェアが御社のサービスをどう発展させられるか」";

        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={isHighlight ? "text-4xl md:text-5xl font-extrabold text-blue-600" : ""}
          >
            {text}
          </motion.p>
        );
      })}
      <ContactSection />
    </div>
  );
}
