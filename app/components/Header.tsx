"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // アイコン用

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "サービス", href: "/services" },
    { label: "会社概要", href: "/about" },
    { label: "テックブログ", href: "/tech-blog" },
    { label: "お問い合わせ", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ロゴ */}
        <div className="text-xl font-bold">
          <Link href="/">Onody</Link>
        </div>

        {/* PCナビ */}
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
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <nav className="md:hidden bg-gray-50 border-t">
          <ul className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-gray-900 font-medium"
                  onClick={() => setIsOpen(false)} // クリックで閉じる
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
