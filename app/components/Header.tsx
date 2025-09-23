"use client";

import Link from "next/link";

export default function Header() {
  const navItems = [
    { label: "サービス", href: "/services" },
    { label: "会社概要", href: "/about" },
    { label: "テックブログ", href: "/tech-blog" },
    { label: "お問い合わせ", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ロゴ部分 */}
        <div className="text-xl font-bold">
          <Link href="/">Onody</Link>
        </div>

        {/* ナビゲーション */}
        <nav className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ハンバーガー（モバイル用） */}
        <div className="md:hidden">
          {/* ここに後でモバイルメニュー用アイコンを追加できます */}
        </div>
      </div>
    </header>
  );
}
