// components/Footer.tsx
export default function Footer() {
    const footerLinks: { label: string; href: string }[][] = [
      [
        { label: "会社概要", href: "/company" },
        { label: "はじまりをつくる", href: "/make-start" },
        { label: "サービス", href: "/#services" },
        { label: "技術ブログ", href: "/tech-blog" },
        { label: "onody-log", href: "/onody-log" },
      ],
      [
        { label: "お問い合わせ", href: "/contact" },
        { label: "ホームページWebシステム化事業", href: "/services/web-system" },
        { label: "福岡市のカレーやさん", href: "/fukuoka-curry" },
        { label: "テーマで見る福岡開発実績", href: "/themes/fukuoka" },
        { label: "MOC開発", href: "/moc" },
      ],
      [
        { label: "イギリスの一面と政策対話", href: "/uk-policy" },
        { label: "1時間業務参加", href: "/one-hour" },
        { label: "福岡市の子育ての未来を共創", href: "/fukuoka-future" },
        { label: "サウルスプロース社日本語版のホームページ", href: "/saulus-jp" },
        { label: "開発の哲学", href: "/philosophy" },
      ],
    ];

    return (
      <footer className="bg-neutral-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            {footerLinks.map((column, colIdx) => (
              <ul key={colIdx} className="space-y-2">
                {column.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="hover:text-gray-300 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-gray-500">
            © 2025 movee Inc. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
